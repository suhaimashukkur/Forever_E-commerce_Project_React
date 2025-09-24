import React, { useState, useContext } from "react";
import border from "../assets/images/Rectangle 3619.png";
import search from "../assets/images/search icon.png";
import { Link } from "react-router-dom";
import { shopContext } from "../Components/Context/ShopContext";

function Collection({ showSearchbar, setShowSearchbar }) {
  const { products } = useContext(shopContext);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const[sortOrder,setSortOrder] = useState("relevant")

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category]
    );
  };

  const handleTypeChange = (subCategory) => {
    setSelectedTypes((prev) =>
      prev.includes(subCategory) ? prev.filter((item) => item !== subCategory) : [...prev, subCategory]
    );
  };
  const handleSortChange =(e) =>{
    setSortOrder(e.target.value)
  }

  const filteredProducts = products.filter((product) => {
    console.log("Product subCategory:", product.subCategory); // Debugging

    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.subCategory);

    return categoryMatch && typeMatch;
  });


  //sorting logic
  let sortedProducts = [...filteredProducts]
  if(sortOrder === "high"){
     sortedProducts.sort((a,b) => b.price - a.price)
  }else if(sortOrder === "low"){
    sortedProducts.sort((a,b) => a.price - b.price)
  }
  
  return (
    <>
         <div className="border-solid border-length ml-24 mr-24 mt-5 bg-gray-100  ">
         
      
      {showSearchbar && (
        <div className=" ml-24 mr-24">
          <div className="mt-6 flex justify-center items-center relative ">
            <div className="relative flex items-center w-full mx-40 ">
              <input
                className="h-12 w-full border-2 border-[#707070] rounded-3xl pl-5 placeholder:text-lg placeholder:text-[#707070]"
                type="text"
                placeholder="Search"
              />
              <img className="absolute right-8 h-6 w-6 cursor-pointer" src={search} alt="search-icon" />
            </div>
            <div className="cursor-pointer  text-xl font-normal h-6 w-6 flex justify-center items-center close-button"
              onClick={() => setShowSearchbar(false)}>
              X
            </div>
          </div>
       
      <div className="border-solid border-length ml-18 mr-18 mt-5 "></div>
      </div>
      )}
      </div>
      <section className="flex">
        <div className="w-1/4 ml-24 mt-10">
          <h2 className="text-xl text-[#343434] mb-4">Filters</h2>
          <div className="border border-gray-300 p-4 mb-6 w-52 h-36 mt-7">
            <h3 className="font-semibold text-sm text-[#212121]">CATEGORIES</h3>
            <div className="space-y-2 mt-2">
              {["Men", "Women", "Kids"].map((category) => (
                <label key={category} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="h-3 w-3"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  <span className="text-sm text-[#272727]">{category}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="border border-gray-300 p-4 w-52 h-36">
            <h3 className="font-semibold text-sm text-[#212121]">TYPE</h3>
            <div className="space-y-2 mt-2">
              {["Top", "Bottom", "Winter"].map((subCategory) => (
                <label key={subCategory} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="h-3 w-3"
                    checked={selectedTypes.includes(subCategory)}
                    onChange={() => handleTypeChange(subCategory)}
                  />
                  <span className="text-sm text-[#272727]">{subCategory}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="w-3/4 mt-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-[#707070]">
              All <span className="text-[#171717]">COLLECTIONS</span>
              <img className="inline-block ml-2 h-0.5 w-12" src={border} alt="img-border" />
            </h1>
            <div className="border border-black px-4 py-2 mr-24">
              <select className="text-lg border-none outline-none" onChange={handleSortChange} value={sortOrder}>
                <option value="relevant">Sort by: Relevant</option>
                <option value="high">Price: High to Low</option>
                <option value="low">Price: Low to High</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5 mr-24 mt-5">
            {sortedProducts.length === 0 ? (
              <p>No products available</p>
            ) : (
              sortedProducts.map((i) => (
                <div key={i.id}>
                  <Link to={`/product/${i._id}`}>
                    <img className="transition ease-in-out hover:scale-105 w-56 h-56" src={i.image} alt={i.name} />
                  </Link>
                  <p className="text-sm font-medium text-[#494949] mt-2">{i.name}</p>
                  <p className="text-sm font-medium text-[#494949] mt-2">${i.price}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Collection;
