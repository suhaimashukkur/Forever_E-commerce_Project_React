import React from "react";
import border from "../assets/images/Rectangle 3147.png";

function Cart() {
  return (
    <section>
      <div className="flex  ml-32 ">
        <div className="mt-14 font-normal text-3xl leading-9 text-[#707070]">
          YOUR{" "}
          <span className="font-semibold text-[#171717] text-3xl leading-9">
            CART
          </span>{" "}
        </div>
        <img
          className=" h-[2px] w-12 mt-20 pl-1  "
          src={border}
          alt="border-line"
        />
      </div>
      <div className="flex flex-col ml-[500px] space-y-4">
        <div className="flex  ml-32  mr-96">
          <div className="mt-32 font-normal text-2xl leading-9 text-[#707070]">
            CART{" "}
            <span className="font-semibold text-[#171717] text-2xl leading-9">
              TOTALS
            </span>{" "}
          </div>
          <img
            className=" h-[2px] w-12 mt-36 pl-1  "
            src={border}
            alt="border-line"
          />
        </div>
        <div className="ml-32 ">Subtotal <div className="float-right mr-32">$0.00</div></div>
        <div className="border-solid border-[0.5px] ml-32 mr-32"></div>
        <div className="ml-32">Shipping Fee<div className="float-right mr-32">$0.00</div></div>
        <div className="border-solid border-[0.5px] ml-32 mr-32"></div>
        <div className="ml-32 font-semibold text-xl">Total <div className="float-right mr-32">$0.00</div></div>

       
<button style={{marginTop:"30px"}}className="border-solid border-2 h-12 w-60  bg-black text-white ml-[485px] ">PROCEED TO CHECKOUT</button>
      </div>
      
    </section>
  );
}

export default Cart;
