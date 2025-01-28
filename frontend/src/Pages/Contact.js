import React from "react";
import EmailLabel from "../Components/EmailLabel/EmailLabel";
import border from "../assets/images/Rectangle 3619.png";
import contactImg from "../assets/images/contact_img.png";

function Contact() {
  return (
    <section >
      <div className="border-solid  border-[0.5px] ml-32 mr-32 mt-4"></div>
      <div className="flex  justify-center items-center">
        <div className="mt-14 font-normal text-3xl leading-9 text-[#707070]">
          CONTACT{" "}
          <span className="font-semibold text-[#171717] text-3xl leading-9">
            US
          </span>{" "}
        </div>
        <img
          className=" h-[2px] w-12 mt-14 pl-1  "
          src={border}
          alt="border-line"
        />
      </div>
      
      <div className="flex  items-center justify-center gap-16 pt-20">
        <div
          className="h-[496px] w-[486px]  bg-cover bg-center"
          style={{ backgroundImage: `url(${contactImg})` }}
        ></div>
        <div>
          <div className="font-semibold text-2xl leading-7  text-[#4E4E4E] ">
            OUR STORE
          </div>
          <div className="leading-8 text-sm font-normal text-[#6D6D6D] pt-6">
            54709 Willms Station Suite 350,
            <div className="leading-8 text-lg font-normal text-[#6D6D6D] ">
              Washington, USA
            </div>{" "}
          </div>
          <div className="leading-8 text-sm font-normal text-[#6D6D6D]">
            Tel: (415) 555-0132
          </div>
          <div className="leading-8 text-sm font-normal text-[#6D6D6D]">
            Email: greatstackdev@gmail.com
          </div>

          <h3 className="leading-8 text-2xl font-normal text-[#4E4E4E] mt-6">
            CAREERS AT FOREVER
          </h3>
          <div className="leading-8 text-sm font-normal text-[#6D6D6D] pt-3">
            Learn more about our teams and job openings.
          </div>
          <button className="h-14 border-solid border-2 w-[150px] mt-6 border-[black]">
            Explore Jobs
          </button>
        </div>
      </div>
      <EmailLabel />
    </section>
  );
}

export default Contact;
