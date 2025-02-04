import React, { useContext } from "react";
import logo from "../../assets/images/logo.png";
import vector from "../../assets/images/Vector (5).png";
import profile from "../../assets/images/profile-icon.png";
import search from "../../assets/images/search icon.png";
import { NavLink } from "react-router-dom";
import { shopContext } from "../Context/ShopContext";

function Header({ setShowSearchbar }) {
  const { cartItems } = useContext(shopContext);

  // Compute cart count directly from cartItems
  const cartCount = Object.keys(cartItems).reduce((total, productId) => {
    return total + Object.keys(cartItems[productId]).length;
  }, 0);

  const handleSearchClick = () => {
    setShowSearchbar(true);
  };

  const navItems = [
    { name: "HOME", value: "/" },
    { name: "COLLECTION", value: "/collection" },
    { name: "ABOUT", value: "/about" },
    { name: "CONTACT", value: "/contact" },
  ];

  return (
    <div className="flex items-center justify-between sm:mr-12 sm:ml-12 lg:ml-32 lg:mr-32 mt-7">
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

      <div className="flex gap-8">
        <img
          src={search}
          className="h-6 w-6 cursor-pointer"
          alt="search-icon"
          onClick={handleSearchClick}
        />

        <NavLink to="/login">
          <img src={profile} className="h-6 w-6" alt="profile-icon" />
        </NavLink>

        <NavLink to="/cart" className="relative">
          <img src={vector} className="h-6 w-6" alt="cart-icon" />
          {cartCount >= 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              {cartCount}
            </span>
          )}
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
