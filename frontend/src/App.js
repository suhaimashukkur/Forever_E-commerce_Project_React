import "./App.css";
import "./index.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

import Footer from "./Components/Footer/Footer";
import Collection from "./Pages/Collection";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import SignupLogin from "./Pages/SignupLogin";

import Cart from "./Pages/Cart";
import { useState } from "react";
import Delivery from "./Pages/Delivery";
import MyOrders from "./Pages/MyOrders";
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminHome from "./Pages/Admin/AdminHome";
import Product from "./Pages/Product";
import { ShopContextProvider } from "./Components/Context/ShopContext";
import { ToastContainer } from "react-toastify";

function App() {
  const [showSearchbar, setShowSearchbar] = useState(false);
  return (
  <ShopContextProvider>
    <BrowserRouter>
    
      <Header  setShowSearchbar={setShowSearchbar}/>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/collection"
          element={
            <Collection
              showSearchbar={showSearchbar}
              setShowSearchbar={setShowSearchbar}
            />
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/admin-login" element={<AdminLogin />}></Route>
        <Route path="/login" element={<SignupLogin />}></Route>
        <Route path='/product/:id' element={<Product />}></Route>
    
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/place-order" element={<Delivery />}></Route>
        <Route path="/orders" element={<MyOrders />}></Route>
        <Route path="/admin-home" element={<AdminHome />}></Route>
       
        
      </Routes>

      <Footer />
  
    </BrowserRouter>
    </ShopContextProvider>
 
  );
}

export default App;
