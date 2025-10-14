import React, { useContext, useState } from "react";
import logo from "../../assets/images/logo.png";
import vector from "../../assets/images/Vector (5).png";
import profile from "../../assets/images/profile-icon.png";
import search from "../../assets/images/search icon.png";
import { NavLink,Link, useNavigate } from "react-router-dom";
import { shopContext } from "../Context/ShopContext";

function Header({ setShowSearchbar }) {
  const { getCartCount,token,setToken} = useContext(shopContext);
  const[dropDown,setDropDown] =useState(false)
  const navigate = useNavigate()

  // Compute cart count directly from cartItems
  // const cartCount = Object.keys(cartItems).reduce((total, productId) => {
  //   return total + Object.keys(cartItems[productId]).length;
  // }, 0);

  const handleSearchClick = () => {
    setShowSearchbar(true);
  };

  const handleLogout = () =>{
    setToken(null);
    localStorage.removeItem("token")
    navigate('/login')

  }

  const navItems = [
    { name: "HOME", value: "/" },
    { name: "COLLECTION", value: "/collection" },
    { name: "ABOUT", value: "/about" },
    { name: "CONTACT", value: "/contact" },
  ];

  return (
    <div className="flex items-center justify-between sm:mr-12 sm:ml-12 lg:ml-24 lg:mr-24 mt-7">
      <img className="h-12 w-40" src={logo} alt="Logo" />

      <div className="flex gap-5">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            className={({ isActive }) =>
              `text-base font-medium leading-5 ${isActive ? "underline" : ""}`
            }
            to={item.value}
          >
            {item.name}
          </NavLink>
        ))}
        
      </div>
      <a href="http://localhost:3001">
  <button className="font-medium bg-gray-100 h-10 rounded-xl w-32">Admin Panel</button>
</a>


      <div className="flex gap-8">
      <NavLink to='/collection'>
        <img
          src={search}
          className="h-6 w-6 cursor-pointer"
          alt="search-icon"
          onClick={handleSearchClick}
        />
        </NavLink>
         {token ? (
          <div className="relative">
            <img
              src={profile}
              className="h-6 w-6 cursor-pointer"
              alt="profile-icon"
              onClick={() => setDropDown((prev) => !prev)}
            />
            
            {dropDown && (
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => navigate('/orders')}
                >
                  Orders
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
        <NavLink to="/login">
          <img src={profile} className="h-6 w-6" alt="profile-icon" />
        </NavLink>
        )}
        <NavLink to="/cart" className="relative">
          <img src={vector} className="h-6 w-6" alt="cart-icon" />
          {getCartCount() >= 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              {getCartCount()}
            </span>
          )}
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
