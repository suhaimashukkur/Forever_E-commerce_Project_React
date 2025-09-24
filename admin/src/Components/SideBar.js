import React from "react";
import { Link, NavLink } from "react-router-dom";

function SideBar() {
  return (
    <>
      <div className="flex">
        <div>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `flex border-solid border-2 h-10 w-40 ml-14 mt-5 text-center cursor-pointer pl-5 pt-1 font-semibold ${
                isActive ? "bg-pink-200" : "bg-gray-50"
              }`
            }
          >
            Add items
          </NavLink>
          <NavLink
            to="/list"
            className={({
              isActive,
            }) => `flex border-solid border-2 h-10 w-40 ml-14 mt-5 text-center cursor-pointer pl-5 pt-1 font-semibold ${
              isActive ? "bg-pink-200" : "bg-gray-50"
            
      }`}
          >
            List
          </NavLink>
          <NavLink
            to="/order"
            className={({
              isActive,
            }) => `flex border-solid border-2 h-10 w-40 ml-14 mt-5 text-center cursor-pointer pl-5 pt-1 font-semibold ${
              isActive ? "bg-pink-200" : "bg-gray-50"
            
      }`}
          >
            Orders
          </NavLink>
         
        </div>
        <div className="border-l-2 border-gray-200 h-screen ml-6"></div>
      </div>
    </>
  );
}

export default SideBar;
