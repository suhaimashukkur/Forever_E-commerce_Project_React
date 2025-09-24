import React, { useContext, useState } from "react";
import border from "../assets/images/Rectangle 3619.png";
import { Link } from "react-router-dom";

import "../Components/HomeBanner/HomeBanner.css";
import { shopContext } from "../Components/Context/ShopContext";
import { toast } from "react-toastify";

function Delivery() {
  const { getCartAmount, delivery_fee, getCartCount } = useContext(shopContext);
  const [selectPayment, setSelectPayment] = useState("");
  const[fname,setFname] =useState('')
  const[lname,setLname] =useState('')
  const[email,setEmail] =useState('')
  const[street,setStreet]=useState('')
  const[city,setCity] =useState('')
  const[state,setState] =useState('')
  const[zipCode,setZipCode] =useState("")
  const[country,setCountry] =useState('')
  const[phone,setPhone] =useState('')


  const subTotal = getCartAmount();
  const shippingFee = subTotal > 0 ? delivery_fee : 0;
  const total = subTotal + shippingFee;

 

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
                  placeholder="First Name"
                  className="pl-3 pt-1 w-full h-full"
                  name="fname"
                  value={fname}
                  onChange={(e)=>setFname(e.target.value)}
                  required
                />
              </label>

              <label className=" border-solid border-2 h-10 w-64 border-[#707070]">
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lname}
                  onChange={(e) =>setLname(e.target.value)}
                  className="pl-3 pt-1 w-full h-full"
                  required
                  name="lname"
                />
              </label>
            </div>
            <label className=" border-solid border-2 h-10 delivery-input border-[#707070]">
              <input
                type="email"
                placeholder="Email"
                value={email}
                  onChange={(e) =>setEmail(e.target.value)}
                className="pl-3 pt-1 w-full h-full"
                name="email"
                required
              />
            </label>
            <label className=" border-solid border-2 h-10 delivery-input border-[#707070]">
              <input
                type="text"
                placeholder="Street"
                className="pl-3 pt-1 w-full h-full"
                name="street"
                value={street}
                  onChange={(e) =>setStreet(e.target.value)}
                required
              />
            </label>
            <div className="flex gap-2">
              <label className=" border-solid border-2 h-10 w-64 border-[#707070]">
                <input
                  type="text"
                  name="city"
                  required
                  value={city}
                  onChange={(e) =>setCity(e.target.value)}
                  placeholder="City"
                  className="pl-3 pt-1 w-full h-full"
                />
              </label>
              <label className=" border-solid border-2 h-10 w-64 border-[#707070]">
                <input
                  type="text"
                  name="state"
                  required
                  placeholder="State"
                  value={state}
                  onChange={(e) =>setState(e.target.value)}
                  className="pl-3 pt-1 w-full h-full"
                />
              </label>
            </div>
            <div className="flex gap-2">
              <label className=" border-solid border-2 h-10 w-64 border-[#707070]">
                <input
                  type="number"
                  name="zipcode"
                  required
                  placeholder="Zip Code"
                  value={zipCode}
                  onChange={(e) =>setZipCode(e.target.value)}
                  className="pl-3 pt-1 w-full h-full"
                />
              </label>
              <label className=" border-solid border-2 h-10 w-64 border-[#707070]">
                <input
                  type="text"
                  name="country"
                  required
                  placeholder="Country"
                  value={country}
                  onChange={(e) =>setCountry(e.target.value)}
                  className="pl-3 pt-1 w-full h-full"
                />
              </label>
            </div>
            <label className=" border-solid border-2 h-10 delivery-input border-[#707070]">
              <input
                type="number"
                required
                name="phone"
                value={phone}
                  onChange={(e) =>setPhone(e.target.value)}
                placeholder="Phone Number"
                className="pl-3 pt-1 w-full h-full"
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
          <div className="ml-28 ">
            Subtotal <div className="float-right mr-32">${subTotal}</div>
          </div>
          <div className="border-solid border-[0.5px] ml-28 mr-32"></div>
          <div className="ml-28">
            Shipping Fee<div className="float-right mr-32">${shippingFee}</div>
          </div>
          <div className="border-solid border-length ml-28 mr-32"></div>
          <div className="ml-28 font-semibold text-xl">
            Total <div className="float-right mr-32">${total}</div>
          </div>

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
            <div className="border-solid border-2 h-10 w-36 border-[#707070]  pl-2  pt-1 text-[13px]">
              <input className="pt-1" type="radio" value="Stripe" name="payment" onChange={(e)=>setSelectPayment(e.target.value)}/> Stripe
            </div>
            <div className="border-solid border-2 h-10 w-36 border-[#707070]  pl-2 pt-1 text-[13px]">
              {" "}
              <input className="pt-1" type="radio" value="Razorpay" name="payment" onChange={(e)=>setSelectPayment(e.target.value)}/> Razorpay
            </div>
            <div className="border-solid border-2 h-10 w-36 border-[#707070]   pl-2 pt-1 text-[13px]">
              <input className="pt-1" type="radio" value="COD" name="payment" onChange={(e)=>setSelectPayment(e.target.value)} /> Cash On Delivery
            </div>
          </div>
          <Link to={selectPayment?"/orders":"" }  >
            <button className={`border-solid border-2 h-12 w-60 mt-8 bg-black text-white ml-80 ${selectPayment?"bg-black":"bg-gray-500 cursor-not-allowed"}`} disabled={!selectPayment} >
              PLACE ORDER
            </button>
          </Link>
        </div>
      </div>
      
    </section>
  );
}

export default Delivery;
