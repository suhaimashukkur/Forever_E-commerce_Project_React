import React from "react";
import border from "../assets/images/Rectangle 3619.png";

import search from "../assets/images/search icon.png";
import { Link } from "react-router-dom";
import '../Components/HomeBanner/HomeBanner.css'
import Product from "./Product";
import { shopContext } from "../Components/ShopContext";
import { useContext } from "react";
function Collection({ showSearchbar, setShowSearchbar }) {
  const {products} =useContext(shopContext)
  console.log("collection",products)
 
  return (
    <>
   
      {showSearchbar && (
        <div className="bg-gray-100 ml-32 mr-32">
          <div className="border-t border-[#ADADAD] mt-6 "></div>
          <div className="mt-6 flex justify-center items-center relative">
            {/* Search Box and Icon Container */}
            <div className="relative flex items-center w-full mr-40 ml-40">
              {/* Search Input */}
              <input
                className="h-12 w-full border-none pl-5 border-2 border-[#707070] rounded-3xl placeholder:text-lg  placeholder:text-[#707070] border:none "
                type="text"
                placeholder="Search"
              />

              {/* Search Icon */}
              <img
                className="absolute right-8 h-6 w-6 cursor-pointer"
                src={search}
                alt="search-icon"
              />
            </div>

            {/* Close Button placed outside, but near the search box */}
            <div
              className="cursor-pointer absolute text-xl font-normal h-6 w-6 flex justify-center items-center close-button"
              onClick={() => setShowSearchbar(false)}
            >
              X
            </div>
          </div>
          {/* Gray Border between the search section and other content */}
          <div className="border-t border-[#D3D3D3] mt-6 "></div>
        </div>
      )}

      <section>
        <div className="flex">
          <div className="flex flex-col">
            <div className="ml-32 text-2xl leading-7 text-[#343434] mt-28 ">
              Filters
            </div>
            <div className="border-solid border-2 w-52 h-40 ml-32 mt-4 ">
              <div className="font-normal text-lg pl-3 leading-5 text-[#212121] mt-2">
                CATEGORIES
              </div>
              <div className="space-y-2 flex flex-col">
                <label>
                  <input
                    type="checkbox"
                    className="h-3 w-3 rectangle mt-5 ml-5 text-sm leading-5 font-light text-[#272727]"
                  />{" "}
                  Men
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="h-3 w-3 rectangle  ml-5 text-sm leading-5 font-light text-[#272727]"
                  />{" "}
                  Women
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="h-3 w-3 rectangle ml-5 text-sm leading-5 font-light text-[#272727]"
                  />{" "}
                  Kids
                </label>
              </div>
            </div>
            <div className="border-solid border-2 w-[215px] h-40 ml-32 mt-6 ">
              <div className="font-normal text-lg pl-3 leading-5 text-[#212121] mt-2">
                TYPE
              </div>
              <div className="space-y-2 flex flex-col">
                <label>
                  <input
                    type="checkbox"
                    className="h-3 w-3 rectangle mt-5 ml-5 text-sm leading-5 font-light text-[#272727]"
                  />{" "}
                  Topwear
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="h-3 w-3 rectangle  ml-5 text-sm leading-5 font-light text-[#272727]"
                  />{" "}
                  Bottomwear
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="h-3 w-3 rectangle ml-5 text-sm leading-5 font-light text-[#272727]"
                  />{" "}
                  Winterwear
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex ml-10">
              <div className="mt-20  font-semibold text-4xl leading-10 text-[#707070] flex">
                All
                <span className=" font-semibold text-4xl leading-10 text-[#171717] pl-2">
                  COLLECTIONS
                </span>
                <img
                  className="h-0.5 w-12 mt-6 ml-2 "
                  src={border}
                  alt="img-border"
                />
              </div>
              <div className="border-solid border-2 w-[180px] h-11 mt-20 ml-[320px] pl-3 pt-2 border-black ">
                <select className="font-normal text-lg text-center border-none outline-none">
                  <option value="low">Sort by: Relevent </option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-7 mt-8 ml-10 mr-32">
              {products.map((i) => (
                <>
                  <div>
                    <div key={i.id}>
                    <Link to={`/product/${i.id}`}>
                    <img className="transition ease-in-out hover:scale-105" src={i.image} alt="grid-img" />
                    </Link>

                    <div className="font-medium leading-4 text-[#494949] text-xs mt-5 mb-2">
                      {i.title}
                    </div>
                    <div className="font-medium leading-4 text-[#494949] text-xs ">
                      {i.subtitle}
                    </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Collection;
