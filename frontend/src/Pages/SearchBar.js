import React from "react";
import search from "../assets/images/search icon.png";
import Collection from "./Collection";

function SearchBar() {
  return (
    <>
    <section>
    <div className="border-t border-[#ADADAD] ml-32 mr-32 mt-6 "></div>
      <div className="mt-6  flex justify-center items-center relative">
        <input
          className="h-12 w-full ml-96 mr-96 border-solid border-2 border-[#707070] rounded-2xl placeholder:text-lg placeholder:pl-4 placeholder:text-[#707070]"
          type="text"
          placeholder="Search"
        />
        <img className="absolute pl-[500px]" src={search} alt="search-icon" />
      </div>
    </section>
    
    <Collection />
    </>
    
  );
}

export default SearchBar;
