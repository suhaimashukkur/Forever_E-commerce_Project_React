import React from "react";

import gridimg1 from "../../assets/images/Rectangle 3608.png";
import gridimg2 from "../../assets/images/Rectangle 3609.png";
import gridimg3 from "../../assets/images/Rectangle 3611.png";
import gridimg4 from "../../assets/images/Rectangle 3613.png";
import gridimg5 from "../../assets/images/Rectangle 3615.png";
import gridimg6 from "../../assets/images/Rectangle 3616.png";
import gridimg7 from "../../assets/images/Rectangle 3617.png";
import gridimg8 from "../../assets/images/Rectangle 3619.png";
import gridimg9 from "../../assets/images/Rectangle 3634.png";
import gridimg10 from "../../assets/images/Rectangle 3635.png";
import border from "../../assets/images/Rectangle 3619.png";
import { useNavigate } from "react-router-dom";
import Product from "../../Pages/Product";

function FeaturedCollections({ title1, title2 }) {
    const navigate= useNavigate();
   
  let latestCollections = [
    {
        _id:1,
      image: gridimg1,
      title: "Women Round Neck Cotton Top",
      subtitle: "$149",
    },
    {
        _id:2,
      image: gridimg2,
      title: "Women Round Neck Cotton Top",
      subtitle: "$149",
    },
    {
        _id:3,
      image: gridimg3,
      title: "Women Round Neck Cotton Top",
      subtitle: "$149",
    },
    {
        _id:4,
      image: gridimg4,
      title: "Women Round Neck Cotton Top",
      subtitle: "$149",
    },
    {
        _id:5,
      image: gridimg5,
      title: "Women Round Neck Cotton Top",
      subtitle: "$149",
    },
    {
        _id:6,
      image: gridimg6,
      title: "Women Round Neck Cotton Top",
      subtitle: "$149",
    },
    {
        _id:7,
      image: gridimg7,
      title: "Women Round Neck Cotton Top",
      subtitle: "$149",
    },
    {
        _id:8,
      image: gridimg8,
      title: "Women Round Neck Cotton Top",
      subtitle: "$149",
    },
    {
        _id:9,
      image: gridimg9,
      title: "Women Round Neck Cotton Top",
      subtitle: "$149",
    },
    {
        _id:10,
      image: gridimg10,
      title: "Women Round Neck Cotton Top",
      subtitle: "$149",
    },
  ];
  const handleOnClick = (_id) =>{
    navigate(`/product/${_id}`)
}
  const isBestSeller = title1 === "Best" && title2 === "Seller-";
  const displayedCollections = isBestSeller
    ? latestCollections.slice(0, 5)
    : latestCollections;
  return (
    <section>
      
      <div className="mt-20 sm:ml-12 sm:mr-32 lg:ml-40 lg:mr-40">
        <div className="flex text-center items-center justify-center">
        <div className="text-center  sm:text-xl lg:text-4xl font-semibold leading-10 text-[#707070] ">
          {title1}
          <span className='"font-semibold text-[#171717] sm:xl lg:text-4xl leading-9'>
            {" "}
            {title2}
          </span>
          </div>
          <img
                      className=" h-[2px] w-12 mt-4 pl-1  "
                      src={border}
                      alt="border-line"
                    />
                
          
        </div>
        <div className="text-center leading-5 sm:text-base lg:text-lg font-normal text-[#868686] mb-12 mt-5">
          Lorem ipsum asnf drukk ldungvjf mkdjfndn mndjf mkfhgfm mgfjhgmfng
          nbvhf fgjgh
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-7 ">
          {displayedCollections.map((item) => (
            <>
              <div>
              <div key={item._id}>
                <img className="cursor-pointer" onClick={() =>handleOnClick(item._id)} src={item.image} alt={item.title} />

                <div className="font-medium leading-4 text-[#494949] sm:text-[12px] lg:text-xs mt-5 mb-2">
                  {item.title}
                </div>
                <div className="font-medium leading-4 text-[#494949] text-xs ">
                  {item.subtitle}
                </div>
              </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCollections;
