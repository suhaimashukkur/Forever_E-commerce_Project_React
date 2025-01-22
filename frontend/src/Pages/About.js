import React from "react";
import EmailLabel from "../Components/EmailLabel/EmailLabel";
import border from "../assets/images/Rectangle 3147.png";
import aboutImg from "../assets/images/about_img.png";

function About() {
  return (
    <>
      <section>
        <div className="flex  justify-center items-center">
          <div className="mt-14 font-normal text-3xl leading-9 text-[#707070]">
            ABOUT{" "}
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
        <div className="flex justify-between gap-28">
          <div>
            <img
              className="h-[496px] w-[486px] mt-11 ml-32"
              src={aboutImg}
              alt="about-img"
            />
          </div>
          <div className="ml-28 mt-11 mr-32 text-[14px] font-normal leading-8 w-[714px] h-[664px] ">
            <p className="pt-6 ">
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
              <p className="pt-6 pb-6">
                Since our inception, we've worked tirelessly to curate a diverse
                selection of high-quality products that cater to every taste and
                preference. From fashion and beauty to electronics and home
                essentials, we offer an extensive collection sourced from
                trusted brands and suppliers.
              </p>
              <b>Our Mission</b>
              <p className="pt-6">
                Our mission at Forever is to empower customers with choice,
                convenience, and confidence. We're dedicated to providing a
                seamless shopping experience that exceeds expectations, from
                browsing and ordering to delivery and beyond.
              </p>
            </p>{" "}
          </div>
        </div>
        <div>
        <div className="ml-32 mr-32 mb-56">
  <div className=" font-semibold text-3xl leading-8 text-[#171717] mb-10">WHY <span className=" font-semibold text-3xl leading-8 text-[#707070]">CHOOSE US</span></div>
  <table className="border-solid border-2 border-[#ABABAB] w-full h-[385px] ">
    <tbody>
      <tr className="border-solid border-2 w-1/3" >
        <td className="border border-[#ABABAB] text-center"><h6 className="text-lg font-normal leading-5 text-[#2A2A2A] mb-8">QUALITY ASSURENCE</h6><p className="font-normal font-lg leading-8 text-[#6D6D6D]">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p></td>
        <td className="border border-[#ABABAB] text-center"><h6 className="text-lg font-normal leading-5 text-[#2A2A2A] mb-8">QUALITY ASSURENCE</h6><p className="font-normal font-lg leading-8 text-[#6D6D6D]">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p></td>
        <td className="border border-[#ABABAB] text-center"><h6 className="text-lg font-normal leading-5 text-[#2A2A2A] mb-8">QUALITY ASSURENCE</h6><p className="font-normal font-lg leading-8 text-[#6D6D6D]">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p></td>
      </tr>
    </tbody>
  </table>
</div>

          {/* <div className="border-solid border-2  border-[#ABABAB]  h-[385px] ml-32 mr-32 "></div> */}
        </div>
      </section>
      <EmailLabel />
    </>
  );
}

export default About;
