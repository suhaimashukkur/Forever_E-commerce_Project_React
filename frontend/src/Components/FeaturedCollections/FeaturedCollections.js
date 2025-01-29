import React from "react";
import { useNavigate } from "react-router-dom";

// Import product images
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

// Border line image
import border from "../../assets/images/Rectangle 3619.png";

function FeaturedCollections({ title1, title2 }) {
  const navigate = useNavigate();

  // Product List
  const latestCollections = [
    { id: 1, image: gridimg1, title: "Women Round Neck Cotton Top", subtitle: "$149" },
    { id: 2, image: gridimg2, title: "Women Round Neck Cotton Top", subtitle: "$149" },
    { id: 3, image: gridimg3, title: "Women Round Neck Cotton Top", subtitle: "$149" },
    { id: 4, image: gridimg4, title: "Women Round Neck Cotton Top", subtitle: "$149" },
    { id: 5, image: gridimg5, title: "Women Round Neck Cotton Top", subtitle: "$149" },
    { id: 6, image: gridimg6, title: "Women Round Neck Cotton Top", subtitle: "$149" },
    { id: 7, image: gridimg7, title: "Women Round Neck Cotton Top", subtitle: "$149" },
    { id: 8, image: gridimg8, title: "Women Round Neck Cotton Top", subtitle: "$149" },
    { id: 9, image: gridimg9, title: "Women Round Neck Cotton Top", subtitle: "$149" },
    { id: 10, image: gridimg10, title: "Women Round Neck Cotton Top", subtitle: "$149" },
  ];

  // Handle Click Event
  const handleOnClick = (item) => {
    navigate(`/product/${item.id}`, { state: { i: item } });
  };

  // Check if it’s a Best Seller Collection
  const isBestSeller = title1 === "Best" && title2 === "Seller-";
  const displayedCollections = isBestSeller ? latestCollections.slice(0, 5) : latestCollections;

  return (
    <section className="mt-20 sm:ml-12 sm:mr-32 lg:ml-40 lg:mr-40">
      {/* Title Section */}
      <div className="flex items-center justify-center text-center">
        <h2 className="text-[#707070] sm:text-xl lg:text-4xl font-semibold leading-10">
          {title1}
          <span className="text-[#171717] font-semibold sm:xl lg:text-4xl leading-9"> {title2}</span>
        </h2>
        <img className="h-[2px] w-12 mt-4 pl-1" src={border} alt="border-line" />
      </div>

      {/* Subtitle */}
      <p className="text-center leading-5 sm:text-base lg:text-lg font-normal text-[#868686] mb-12 mt-5">
        Explore our latest collection of stylish and affordable outfits for every occasion.
      </p>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-7">
        {displayedCollections.map((item) => (
          <div key={item.id}>
            <img
              className="cursor-pointer transition ease-in-out hover:scale-105"
              onClick={() => handleOnClick(item)}
              src={item.image}
              alt={item.title}
            />
            <h3 className="font-medium text-[#494949] sm:text-[12px] lg:text-xs mt-5 mb-2">{item.title}</h3>
            <p className="font-medium text-[#494949] text-xs">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedCollections;
