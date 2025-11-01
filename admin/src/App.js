import "./App.css";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/login";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Add from "./Pages/addItems";
import List from './Pages/list'
import Orders from "./Pages/orders";

export const backend_url = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  console.log(token);
  return (
    <Router>
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Header setToken={setToken} />
          <div className="flex">
            <SideBar />
            <div className="flex-1 p-4">
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token}/>} />
                <Route path="/order" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
