import React from 'react'
import border from "../assets/images/Rectangle 3619.png";
import gridimg1 from "../assets/images/Rectangle 3608.png";
function MyOrders() {
  return (
    <>
      <div className="border-solid  border-[0.5px] ml-32 mr-32 mt-4"></div>
       <div className="flex ml-32">
          <div className="flex  ">
            <div className="mt-14 font-normal text-2xl leading-9 text-[#707070]">
              MY{" "}
              <span className="font-semibold text-[#171717] text-2xl leading-9">
                ORDERS
              </span>{" "}
            </div>
            <img
              className=" h-[2px] w-12 mt-20 pl-1  "
              src={border}
              alt="border-line"
            />
          </div>
          </div>
    <div className="border-solid  border-[0.5px] ml-32 mr-32 mt-4"></div>
    <div className="flex justify-between items-center mr-32 ml-32">
            <div className="flex">
            <img  className="h-32 w-32 mt-4  bg-cover bg-no-repeat bg-center" src={gridimg1} alt="image-cart" />
            <div className="flex flex-col space-y-4 ml-4">
              <div className="mt-4 font-medium  text-[18px] leading-7 text-[#2A2A2A]">Kids Topperde Slim Fit</div>
              <div className=" text-[17px] font-normal text-[#2A2A2A]">$36 <span className="border-solid ml-4 border-2 h-14 bg-[#f8e9e9] w-14">M</span></div>
            </div>
            </div>
            <div>
            <div>order placed</div>
           </div>
           <div>
           <button className="h-8 w-24 border-solid border-2 rounded-lg text-[14px]"> Track Order</button>
           </div>
           </div>
    </>
   
  )
}

export default MyOrders