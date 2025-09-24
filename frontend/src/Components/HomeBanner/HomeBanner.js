import React from "react";
import imgbanner from "../../assets/images/file 1 (1).png";
import border from "../../assets/images/Rectangle 3147.png";
import './HomeBanner.css'

function HomeBanner() {
  return (
    <div className="flex sm:flex-col lg:flex-row border-solid border-2 sm:ml-12 sm:mr-12 lg:ml-24 lg:mr-24 mt-7  ">
      <div className=" flex flex-col   w-1/2 justify-center items-center">
      
        <div className="flex ">
          <img className=" h-0.5 w-12 mt-3 " src={border} alt="border-line" />
          <div className=" lg:text-base font-medium leading-5 text-[#414141] pl-2">
            OUR BESTSELLERS
          </div>
        </div>
        <div className=" sm:text-3xl lg:text-5xl leading-10 font-normal text-[#414141] mt-3.5  ">
          <pre>Latest Arrivals</pre>
        </div>
        <div className="flex">
          <div className=" mt-3.5 font-medium sm:text-[12px] lg:text-base text-[#414141] mb-30 ">
            SHOP NOW
          </div>
          <img
            className=" h-0.5 w-12 mt-7 pl-2 "
            src={border}
            alt="border-line"
          />
        </div>
        
      </div>
      <div className=" bg-[#FFDAD6]"> {/* Flex container for proper alignment */}
        <img
          className="w-full  object-cover img-height"
          src={imgbanner}
          alt="homebanner-img"
        />
      
      </div>
    </div>
  );
}

export default HomeBanner;
