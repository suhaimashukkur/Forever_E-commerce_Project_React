import React from "react";
import border from "../assets/images/Rectangle 3147.png";
import gridimg1 from "../assets/images/Rectangle 3608.png";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const handleProceedToCheckout=() =>{
navigate('/place-order')
  }
  return (
    <section>
      <div className="border-solid  border-[0.5px] ml-32 mr-32 mt-4"></div>
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
      <div className="border-solid  border-[0.5px] ml-32 mr-32  mt-6"></div>
      <div className="flex justify-between items-center mr-32 ml-32">
        <div className="flex">
        <img  className="h-32 w-32 mt-4  bg-cover bg-no-repeat bg-center" src={gridimg1} alt="image-cart" />
        <div className="flex flex-col space-y-4 ml-4">
          <div className="mt-4 font-medium  text-[18px] leading-7 text-[#2A2A2A]">Kids Topperde Slim Fit</div>
          <div className=" text-[17px] font-normal text-[#2A2A2A]">$36 <span className="border-solid ml-4 border-2 h-14 bg-[#f8e9e9] w-14">M</span></div>
        </div>
        </div>
        <div>
        <input type="number" name="number" min="1" max="100" />
       </div>
       <div>
       <button className="h-8 w-24 border-solid border-2 bg-red-500 rounded-lg text-white"> DELETE</button>
       </div>
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

       
<button style={{marginTop:"30px"}} className="border-solid border-2 h-12 w-60  bg-black text-white ml-[485px] " onClick={handleProceedToCheckout} >PROCEED TO CHECKOUT</button>
      </div>
      
    </section>
  );
}

export default Cart;
