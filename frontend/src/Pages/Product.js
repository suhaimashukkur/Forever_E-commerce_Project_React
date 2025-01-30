import React, { useContext } from "react";

import image2 from "../assets/images/star_icon.png";

import border from "../assets/images/Rectangle 3147.png";
import { Link, useParams } from "react-router-dom";
import { shopContext } from "../Components/ShopContext";
import FeaturedCollections from "../Components/FeaturedCollections/FeaturedCollections";

function Product() {
  const { products } = useContext(shopContext);
  console.log("products", products);
  
  const { id } = useParams();
  const productData = products.find((item) => (item.id === id));
  console.log("productData", productData);

  return (
     
    <>
      <div className="border-solid  border-length ml-32 mr-32 mt-4"></div>
      <div className="flex ml-32 gap-3">
        <div className="flex flex-col mt-12 gap-3">
          <img
            className="w-44 "
            src={productData.image}
            alt={productData.title}
          />
        </div>
        <div className="mt-12 ">
          <img
            className="product-img "
            src={productData.image}
            alt={productData.title}
          />
        </div>
        <div className="mr-32 flex flex-col space-y-4 ml-8">
          <div className="text-2xl font-medium leading-10 text-[#3D3D3D] mt-12">
            {productData.title}
          </div>

          <div className="flex gap-2">
            <img className="h-5 w-5" src={image2} alt="start" />
            <img className="h-5 w-5" src={image2} alt="start" />
            <img className="h-5 w-5" src={image2} alt="start" />
            <img className="h-5 w-5" src={image2} alt="start" />
            <img className="h-5 w-5" src={image2} alt="start" />
          </div>
          <div className="font-medium text-2xl leading-10 text-[#2A2A2A]">
            {productData.subtitle}
          </div>
          <div className="mr-32 font-normal text-m leading-7 text-[#555555]">
            A lightweight, usually knitted, pullover shirt, close-fitting and
            with a round neckline and short sleeves, worn as an undershirt or
            outer garment.
          </div>
          <div className="font-medium text-lg">Select Size</div>
          <div className="flex gap-4">
            <div className="border-solid border-2 w-10 h-10 text-center justify-center items-center pt-1 bg-gray-100">
              S
            </div>
            <div className="border-solid border-2 w-10 h-10 text-center justify-center items-center pt-1 bg-gray-100">
              M
            </div>
            <div className="border-solid border-2 w-10 h-10 text-center justify-center items-center pt-1 bg-gray-100">
              L
            </div>
            <div className="border-solid border-2 w-12 h-10 text-center justify-center items-center pt-1 bg-gray-100">
              XL
            </div>
            <div className="border-solid border-2 w-14 h-10 text-center justify-center items-center pt-1 bg-slate-100">
              XXL
            </div>
          </div>
          <Link to={'/cart'}>
            <button className="border-solid border-2 bg-[black] h-12 w-44 mt-2 text-white">
              ADD TO CART
            </button>
          </Link>
          <div className="border-solid  border-length  mt-6"></div>
          <p className="font-normal text-sm leading-7 text-[#555555]">
            100% Original product.<br></br>
            Cash on delivery is available on this product.<br></br>
            Easy return and exchange policy within 7 days.
          </p>
        </div>
      </div>
      <div className="flex flex-col ml-32 mt-36 mr-32">
        <div className="flex items-center">
          <div className=" text-center border-solid border-2 h-12 w-36 pt-4 ">
            Descriptions
          </div>
          <div className=" border-solid border-2 h-12 w-36 pt-4 text-center ">
            Reviews
          </div>
        </div>
        <div className="border-solid border-2 w-full h-60  ">
          <p className="py-2 px-4 font-normal leading-7 text-sm text-[#555555]">
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p className="py-2 px-4 pt-6 font-normal leading-7 text-sm text-[#555555]">
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
     
    
    <FeaturedCollections title1="RELATED" title2="PRODUCTS" limit={5} hideDescription={true}      />
    
    </>
  
  );
}

export default Product;
