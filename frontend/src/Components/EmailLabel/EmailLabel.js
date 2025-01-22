import React from "react";

function EmailLabel() {
  return (
    <div className="mt-24 flex flex-col justify-center items-center">
      <div className="text-center text-3xl leading-10 font-medium text-[#373737] mb-5">
        Subscribe now & get 20% off
      </div>
      <div className="text-center text-lg leading-5 font-normal text-[#9A9A9A]">
        Lorem ipsum contebbt jhfy sjdueg hgfyhfbh mdfdjgh mnfjghn mngjfgbf
        mngjfbgn
      </div>
      <div className="flex w-[724px] h-14 border-solid border-2 border-gray-300 mt-11">
        <input
          className="flex-grow pl-4 text-sm outline-none"
          type="email"
          name="email"
          placeholder="Enter your email id"
        />
        <button className="bg-[#000000] text-[#FFFFFF] font-normal text-lg leading-5 w-40 h-full">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
}

export default EmailLabel;
