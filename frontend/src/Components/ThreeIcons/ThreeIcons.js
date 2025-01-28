import React from "react";
import img1 from "../../assets/images/Vector (6).png";
import img2 from "../../assets/images/Group.png";
import img3 from "../../assets/images/support_img (1).png";

function ThreeIcons() {
  let threeIcons = [
    {
      image: img1,
      title: "Easy Exchange Policy",
      subtitle: "We offer hassle exchange policy",
    },
    {
      image: img2,
      title: "7 Days Return Policy",
      subtitle: "We provide 7 days return policy",
    },
    {
      image: img3,
      title: "Best Customer Support",
      subtitle: "We provide 24/7 customer support",
    },
  ];
  return (
    <div className="flex justify-between items-center ml-48 mt-32 mr-48  ">
      {threeIcons.map((i) => (
        <>
          <div className="flex flex-col items-center space-y-2 ">
            <img  src={i.image} alt="img-icons"/>
          
              <div className="text-sm leading-5 font-semibold text-center text-[#373737]">{i.title}</div>
              <div className="text-sm leading-5 font-normal text-center text-[#898989]">{i.subtitle}</div>
         
          </div>
        </>
      ))}
    </div>
  );
}

export default ThreeIcons;
