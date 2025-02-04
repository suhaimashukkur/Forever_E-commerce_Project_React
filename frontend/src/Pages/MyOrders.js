import React, { useContext } from "react";
import border from "../assets/images/Rectangle 3619.png";
import gridimg1 from "../assets/images/Rectangle 3608.png";
import "../Components/HomeBanner/HomeBanner.css";
import { shopContext } from "../Components/Context/ShopContext";
function MyOrders() {
  const { products, cartData, cartItems } = useContext(shopContext);
  return (
    <>
      <div className="border-solid  border-length ml-32 mr-32 mt-4"></div>
      <div className="flex ml-32">
        <div className="flex  ">
          <div className="mt-14 font-normal text-2xl leading-9 text-[#707070]">
            MY{" "}
            <span className="font-semibold text-[#171717] text-2xl leading-9">
              ORDERS
            </span>{" "}
          </div>
          <img
            className=" h-0.5 w-12 mt-20 pl-1  "
            src={border}
            alt="border-line"
          />
        </div>
      </div>

      {cartData.map((item) => (
        <div>
          <div className="border-solid  border-length ml-32 mr-32 mt-4"></div>

          <div className="flex justify-between items-center mr-32 ml-32">
            <div className="flex">
              <img
                className="h-28 w-28 mt-4  bg-cover bg-no-repeat bg-center"
                src={item.image}
                alt="image-cart"
              />
              <div className="flex flex-col space-y-0.5 ml-4">
                <div className="mt-4 font-medium  text-base leading-7 text-[#2A2A2A]">
                  {item.name}
                </div>
                <div className="flex">
                  <div className=" text-base font-normal text-[#2A2A2A]">
                    ${item.price}{" "}
                    </div>
                    <div className="ml-3 font-normal">Quantity:{item.quantity}
                  </div>
                  <div className="border-solid border-2 w-8 h-8 text-center justify-center items-center  bg-slate-100 ml-4">
                    {item.size}
                  </div>
                </div>
                <div>Date:</div>
                <div>Payment:</div>
              </div>
            </div>
            <div>
              <div>order placed</div>
            </div>
            <div>
              <button className="h-8 w-24 border-solid border-2 rounded-lg text-sm">
                {" "}
                Track Order
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default MyOrders;
