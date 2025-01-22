import React from "react";
import img from "../../assets/images/InsiderStats.png";

function Footer() {
  return (
    <>
    <div className="ml-32 flex items-start justify-between  mr-32">
      <div className="mt-64  flex-col w-1/2">
        <img src={img} alt="logo-footer" />
        <div className="text-lg font-normal leading-7 mt-6">
        Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>
      </div>
      <div className="mt-72 flex flex-col space-y-3">
        <div className="text-xl font-semibold leading-7 text-[#5A5A5A] mb-4">
          COMPANY
        </div>
        <div className="font-normal text-lg leading-7 text-[#595959]">Home</div>
        <div className="font-normal text-lg leading-7 text-[#595959]">About Us</div>
        <div className="font-normal text-lg leading-7 text-[#595959]">Delivery</div>
        <div className="font-normal text-lg leading-7 text-[#595959]">
          Privacy Policy
        </div>
      </div>
      <div className="mt-72 flex flex-col space-y-3">
        <div className="text-xl font-semibold leading-7 text-[#5A5A5A] mb-4">
          GET IN TOUCH
        </div>
        <div className="font-normal text-lg leading-7 text-[#595959]">
          +91 234 345 4523
        </div>
        <div className="font-normal text-lg leading-7 text-[#595959]">
          Grtech@gmail.com
        </div>
      </div>
    </div>
    <div className='mt-24 border-t border-[#BDBDBD] ml-32 mr-32 '>
    <div className='mt-7 text-center font-normal text-lg leading-7 text-[#565656] mb-10'>CopyRight 2024 @ Great Stack.dev -All Right Reserved.</div>
</div>
     </>
  );
}

export default Footer;
