import React from "react";
import logo from "../../assets/images/logo.png";
import vector from "../../assets/images/Vector (5).png";
import profile from "../../assets/images/profile-icon.png";
import search from "../../assets/images/search icon.png";
import { NavLink, useNavigate } from "react-router-dom";

function Header({ setShowSearchbar }) {
  const navigate = useNavigate();
  const handleSearchClick = () => {
    setShowSearchbar(true);
    navigate("/collection");
  };
  let navItems = [
    {
      id: 1,
      name: "HOME",
      value: "/",
    },
    {
      id: 2,
      name: "COLLECTION",
      value: "/collection",
    },
    {
      id: 3,
      name: "ABOUT",
      value: "/about",
    },
    {
      id: 4,
      name: "CONTACT",
      value: "/contact",
    },
  ];
  // const headerIcons = [search, profile, vector];
  const headerIcons = [
    {
      src: search,
      value: "/collection",
      alt: "search-icon",
      onClick: handleSearchClick,
    },
    {
      src: profile,
      value: "/profile",
      alt: "profile-icon",
    },
    {
      src: vector,
      value: "/cart",
      alt: "vector-icon",
    },
  ];
  return (
    <div className="flex items-center justify-between ml-32 mr-32 mt-7 ">
      <img className="h-12 w-40 " src={logo} alt="Logo-image" />
      <div className="flex gap-5 ">
        {navItems.map((i) => (
          <NavLink
            className={({ isActive }) =>
              `text-base font-medium leading-5  ${isActive ? "underline " : ""}`
            }
            to={i.value}
          >
            {i.name}
          </NavLink>
        ))}
      </div>
      <div className="flex gap-8">
        {headerIcons.map((item) => (
          <NavLink to={item.value}>
            <img
              className="h-6 w-6"
              src={item.src}
              alt={item.alt}
              onClick={item.onClick}
            />
          </NavLink>
        ))}

        {/* {
          headerIcons.map((item) =>(
            <img className="h-6 w-6" src={item} alt="icon" />
          ))
        } */}
        {/* <img src={search} alt="search-icon" />
        <img src={profile} alt="profile-icon" />
        <img src={vector} alt="vector-icon" /> */}
      </div>
    </div>
  );
}

export default Header;
