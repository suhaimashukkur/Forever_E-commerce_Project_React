import logo from "./logo.svg";
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
import SearchBar from "./Pages/SearchBar";
import Cart from './Pages/Cart'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/profile" element={<SignupLogin />}></Route>
        <Route path="/search" element={<SearchBar />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
