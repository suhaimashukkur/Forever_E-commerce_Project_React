import React from "react";
import border from "../assets/images/Rectangle 3619.png";
import { useNavigate } from "react-router-dom";
import '../Components/HomeBanner/HomeBanner.css'

function Delivery() {
  const navigate= useNavigate()
  const handlePlaceOrder=() =>{
    navigate('/orders')

  }
  return (
    <section>
     <div className="border-solid   ml-32 mr-32 mt-2 border-length"></div>
        <div className="flex ml-32">
      <div className="flex  ">
        <div className="mt-14 font-normal text-2xl leading-9 text-[#707070]">
          DELIVERY{" "}
          <span className="font-semibold text-[#171717] text-2xl leading-9">
            INFORMATION
          </span>{" "}
        </div>
        <img
          className=" h-0.5 w-12 mt-20 pl-1  "
          src={border}
          alt="border-line"
        />
      </div>
      </div>
      <div className="flex">
        <form>
          <div className="flex flex-col space-y-4 ml-32 mt-20 ">
            <div className="flex gap-2">
              <label className=" border-solid border-2 h-10 w-64 border-[#707070] ">
                <input
                  type="text"
                  placeholder="First Name" className="pl-3 pt-1"
                  name="fname"
                  required
                />
              </label>

              <label className=" border-solid border-2 h-10 w-64 border-[#707070]">
                <input
                  type="text"
                  placeholder="Last Name" className="pl-3 pt-1"
                  required
                  name="lname"
                />
              </label>
            </div>
            <label className=" border-solid border-2 h-10 delivery-input border-[#707070]">
              <input type="email" placeholder="Email" className="pl-3 pt-1" name="email" required />
            </label>
            <label className=" border-solid border-2 h-10 delivery-input border-[#707070]">
              <input type="text" placeholder="Street" className="pl-3 pt-1" name="street" required />
            </label>
            <div className="flex gap-2">
            <label className=" border-solid border-2 h-10 w-64 border-[#707070]">
              <input type="text" name="city" required placeholder="City" className="pl-3 pt-1" />
            </label>
            <label className=" border-solid border-2 h-10 w-64 border-[#707070]">
              <input type="text" name="state" required placeholder="State" className="pl-3 pt-1" />
            </label>
            </div>
            <div className="flex gap-2">
            <label className=" border-solid border-2 h-10 w-64 border-[#707070]">
              <input
                type="number"
                name="zipcode"
                required
                placeholder="Zip Code" className="pl-3 pt-1"
              />
            </label>
            <label className=" border-solid border-2 h-10 w-64 border-[#707070]">
              <input
                type="text"
                name="country"
                required
                placeholder="Country" className="pl-3 pt-1"
              />
            </label>
            </div>
            <label className=" border-solid border-2 h-10 delivery-input border-[#707070]">
              <input
                type="number"
                required
                name="phone"
                placeholder="Phone Number" className="pl-3 pt-1"
              />
            </label>
          </div>
        </form>
         <div className="flex flex-col  space-y-4">
                <div className="flex  ml-28 mr-96">
                        <div className="mt-8 font-normal text-2xl leading-9 text-[#707070]">
                          CART{" "}
                          <span className="font-semibold text-[#171717] text-2xl leading-9">
                            TOTALS
                          </span>{" "}
                        </div>
                        <img
                          className=" h-0.5 w-12 mt-14 pl-1  "
                          src={border}
                          alt="border-line"
                        />
                      </div>
                <div className="ml-28 ">Subtotal <div className="float-right mr-32">$0.00</div></div>
                <div className="border-solid border-[0.5px] ml-28 mr-32"></div>
                <div className="ml-28">Shipping Fee<div className="float-right mr-32">$0.00</div></div>
                <div className="border-solid border-length ml-28 mr-32"></div>
                <div className="ml-28 font-semibold text-xl">Total <div className="float-right mr-32">$0.00</div></div>
               
               <div className="flex  ml-28 ">
                       <div className="mt-7 font-normal text-lg leading-9 text-[#707070]">
                         PAYMENT{" "}
                         <span className="font-semibold text-[#171717] text-lg leading-9">
                           METHOD
                         </span>{" "}
                       </div>
                       <img
                         className=" h-0.5 w-12 mt-12 pl-1"
                         src={border}
                         alt="border-line"
                       />
                     </div>
                     <div className="flex ml-28 gap-2 mr-32">
                        <div className="border-solid border-2 h-10 w-36 border-[#707070]  pl-2  pt-1 text-[13px]"><input className="pt-1" type="checkbox" /> Stripe</div>
                        <div className="border-solid border-2 h-10 w-36 border-[#707070]  pl-2 pt-1 text-[13px]"> <input className="pt-1"  type="checkbox" />    Razorpay</div>
                        <div className="border-solid border-2 h-10 w-36 border-[#707070]   pl-2 pt-1 text-[13px]"><input className="pt-1"  type="checkbox" />   Cash On Delivery</div>

                     </div>
                  <button className="border-solid border-2 h-12 w-60 mt-8 bg-black text-white ml-80 " onClick={handlePlaceOrder}>PLACE ORDER</button>
  
           </div>
              

         </div>
    </section>
  );
}

export default Delivery;
