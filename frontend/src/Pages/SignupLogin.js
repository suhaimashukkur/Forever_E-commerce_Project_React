import React, { useState } from "react";
import border from "../assets/images/Rectangle 3619.png";
import '../Components/HomeBanner/HomeBanner.css'

function SignupLogin() {
  const [isLogin, setIsLogin] = useState(true);
  const handleToggle = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <>
    <div className="border-solid  border-length ml-32 mr-32 mt-4"></div>
      <div className="flex justify-center items-center">
        <h2 className="text-center text-4xl leading-8 font-medium text-[#414141] mt-36">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <img
          className=" h-0.5 w-12 mt-40 pl-1  "
          src={border}
          alt="border-line"
        />
      </div>

      <div className="flex justify-center items-center mt-10">
        <form className="flex flex-col  gap-6">
          {isLogin ? (
            ""
          ) : (
            <label className="w-96">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full h-12 border-2 border-[#707070] pl-3 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
            />
          </label>
          )
          }

          <label className="w-96   ">
            <input type="email" name="email" placeholder="Email" required className="pl-3  w-full h-12 border-solid border-2 border-[#707070]  rounded-md focus:outline-none focus:ring  focus:ring-gray-400" />
          </label>
          <label className="w-96  ">
            <input 
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full h-12 border-solid border-2 border-[#707070]  rounded-md focus:outline-none focus:ring  focus:ring-gray-400 pl-3  "
            />
          
            
          </label>
          <div className="flex justify-between">
            <div className="text-[#414141] cursor-pointer">
              Forgot your password?
            </div>
            <div
              className="text-[#414141] cursor-pointer"
              onClick={handleToggle}
            >
              {isLogin ? "Create account" : "Login Here"}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="  cursor-pointer border-solid border-2 border-[#707070] h-12 w-32 pt-2 pr-2 pl-2 pb-2 flex align-center justify-center rounded-md bg-[#171717] text-[white]"
              onSubmit={handleToggle}
            >
              {isLogin ? "Login" : "Sign Up"}
              
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignupLogin;
