import React from "react";
import { useContext } from "react";

import { Link } from "react-router-dom";

// Border line image
import border from "../../assets/images/Rectangle 3619.png";
import { shopContext } from "../ShopContext";

function FeaturedCollections({ title1, title2 ,limit,hideDescription}) {
  // Product List
  const { products } = useContext(shopContext);

  // Check if it’s a Best Seller Collection
  // const isBestSeller = title1 === "Best" && title2 === "Seller-";
  const displayedCollections = limit ? products.slice(0, limit) : products;

  return (
    <section className="mt-20 sm:ml-12 sm:mr-32 lg:ml-40 lg:mr-40">
      {/* Title Section */}
      <div className="flex items-center justify-center text-center mb-8">
        <h2 className="text-[#707070] sm:text-xl lg:text-4xl font-semibold leading-10">
          {title1}
          <span className="text-[#171717] font-semibold sm:xl lg:text-4xl leading-9">
            {" "}
            {title2}
          </span>
        </h2>
        <img
          className="h-[2px] w-12 mt-4 pl-1"
          src={border}
          alt="border-line"
        />
      </div>

      {/* Subtitle */}
      {!hideDescription && (
      <p className="text-center leading-5 sm:text-base lg:text-lg font-normal text-[#868686] mb-7 ">
        Explore our latest collection of stylish and affordable outfits for
        every occasion.
      </p>
      )}
      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-7">
        {displayedCollections.map((item) => (
          <div key={item.id}>
            <Link to={`/product/${item.id}`}>
              <img
                className="cursor-pointer transition ease-in-out hover:scale-105"
                src={item.image}
                alt={item.title}
              />
              <h3 className="font-medium text-[#494949] sm:text-[12px] lg:text-xs mt-5 mb-2">
                {item.title}
              </h3>
              <p className="font-medium text-[#494949] text-xs">
                {item.subtitle}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedCollections;
