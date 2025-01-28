import React from "react";
import gridimg1 from "../assets/images/Rectangle 3608.png";
import gridimg2 from "../assets/images/Rectangle 3609.png";
import gridimg3 from "../assets/images/Rectangle 3611.png";
import gridimg4 from "../assets/images/Rectangle 3613.png";
import gridimg5 from "../assets/images/Rectangle 3615.png";
import gridimg6 from "../assets/images/Rectangle 3616.png";
import gridimg7 from "../assets/images/Rectangle 3617.png";
import gridimg8 from "../assets/images/Rectangle 3619.png";
import gridimg9 from "../assets/images/Rectangle 3634.png";
import gridimg10 from "../assets/images/Rectangle 3635.png";

import image1 from "../assets/images/Rectangle 3611.png";
import image2 from "../assets/images/star_icon.png";

import border from "../assets/images/Rectangle 3147.png";
import { useNavigate } from "react-router-dom";


function Product() {
  const navigate=useNavigate();
  const handleAddToCart=()=>{
    navigate('/cart')
  }
  const Products = [
    {
      "_id": "1",
      "name": "Men Round Neck Pure Cotton T-shirt",
      "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      "price": 80,
      "image": [ image1,image2],
      "category": "Men",
      "subCategory": "Topwear",
      "sizes": ["S", "M", "L","XL","XXL" ],
      "bestseller":false,
  },
  {
    "_id": "2",
    "name": "Men Round Neck Pure Cotton T-shirt",
    "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    "price": 80,
    "image": [ image1,image2],
    "category": "Men",
    "subCategory": "Topwear",
    "sizes": ["S", "M", "L","XL","XXL" ],
    "bestseller":false,
},
{
  "_id": "3",
  "name": "Kids Round Neck Pure Cotton T-shirt",
  "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
  "price": 80,
  "image": [ image1,image2],
  "category": "Men",
  "subCategory": "Topwear",
  "sizes": ["S", "M", "L","XL","XXL" ],
  "bestseller":true,
},
{
  "_id": "4",
  "name": "Men Round Neck Pure Cotton T-shirt",
  "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
  "price": 80,
  "image": [ image1,image2],
  "category": "Men",
  "subCategory": "Topwear",
  "sizes": ["S", "M", "L","XL","XXL" ],
  "bestseller":false,
},
{
  "_id": "5",
  "name": "Women Round Neck Pure Cotton T-shirt",
  "description": "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
  "price": 80,
  "image": [ image1,image2],
  "category": "Men",
  "subCategory": "Topwear",
  "sizes": ["S", "M", "L","XL","XXL" ],
  "bestseller":false,
}
  ]
  return (
   
    <>
    <div className="border-solid  border-[0.5px] ml-32 mr-32 mt-4"></div>
      <div className="flex ml-32 gap-3">
        <div className="flex flex-col mt-12 gap-[14px]">
          <img
            className="w-[180px] "
            src={image1}
            alt="product-image"
          />
         
        </div>
        <div className="mt-12 ">
          <img
            className="w-[891px] "
            src={image1}
            alt="product-image"
          />
        </div>
        <div className="mr-32 flex flex-col space-y-4 ml-8">
          <div className="text-2xl font-medium leading-10 text-[#3D3D3D] mt-12">
            Men Rounded Neck Pure Cotton T-shirt
          </div>

          <div className="flex gap-[5px]">
            <img className="h-5 w-5" src={image2} alt="start" />
            <img className="h-5 w-5" src={image2} alt="start" />
            <img className="h-5 w-5" src={image2} alt="start" />
            <img className="h-5 w-5" src={image2} alt="start" />
            <img className="h-5 w-5" src={image2} alt="start" />
          </div>
          <div className="font-medium text-[24px] leading-10 text-[#2A2A2A]">
            $149
          </div>
          <div className="mr-32 font-normal text-m leading-7 text-[#555555]">
            A lightweight, usually knitted, pullover shirt, close-fitting and
            with a round neckline and short sleeves, worn as an undershirt or
            outer garment.
          </div>
          <div className="font-medium text-lg">Select Size</div>
          <div className="flex gap-[18px]">
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
          <button className="border-solid border-2 bg-[black] h-12 w-44 mt-2 text-white" onClick={handleAddToCart}>
            ADD TO CART
          </button>
          <div className="border-solid  border-[0.5px]  mt-6"></div>
          <p className="font-normal text-[16px] leading-7 text-[#555555]">
            100% Original product.<br></br>
            Cash on delivery is available on this product.<br></br>
            Easy return and exchange policy within 7 days.
          </p>
        </div>
      </div>
      <div className="flex flex-col ml-32 mt-[151px] mr-32">
        <div className="flex items-center">
          <div className=" text-center border-solid border-2 h-12 w-36 pt-4 ">
            Descriptions
          </div>
          <div className=" border-solid border-2 h-12 w-36 pt-4 text-center ">
            Reviews
          </div>
        </div>
        <div className="border-solid border-2 w-full h-60  ">
          <p className="py-2 px-4 font-normal leading-7 text-[14px] text-[#555555]">
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p className="py-2 px-4 pt-6 font-normal leading-7 text-[14px] text-[#555555]">
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      <div className="flex  justify-center items-center">
                <div className="mt-14 font-normal text-3xl leading-9 text-[#707070]">
                  RELATED{" "}
                  <span className="font-semibold text-[#171717] text-3xl leading-9">
                    PRODUCTS
                  </span>{" "}
                </div>
                <img
                  className=" h-[2px] w-12 mt-14 pl-1  "
                  src={border}
                  alt="border-line"
                />
              </div>
      
      
    </>
  );
}

export default Product;
