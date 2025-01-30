import React, { useState } from "react";
import gridimg1 from "../assets/images/Rectangle 3608.png";
import gridimg2 from "../assets/images/Rectangle 3609.png";
import gridimg3 from "../assets/images/Rectangle 3611.png";
import gridimg4 from "../assets/images/Rectangle 3613.png";
import gridimg5 from "../assets/images/Rectangle 3615.png";
import gridimg6 from "../assets/images/Rectangle 3616.png";
import gridimg7 from "../assets/images/Rectangle 3617.png";
import gridimg8 from "../assets/images/Rectangle 3619.png";
import gridimg9 from "../assets/images/Rectangle 3634.png";
import gridimg10 from "../assets/images/Rectangle 3635.png";

export const shopContext = React.createContext();
const data  = [
  { id:"1",image: gridimg1, title: "Women Round Neck Cotton Top", subtitle: "$149" },
  { id:"2", image: gridimg2, title: "Women Round Neck Cotton Top", subtitle: "$149" },
  { id:"3", image: gridimg3, title: "Women Round Neck Cotton Top", subtitle: "$600" },
  { id:"4", image: gridimg4, title: "Women Round Neck Cotton Top", subtitle: "$149" },
  { id:"5", image: gridimg5, title: "Men Round Neck Cotton Top", subtitle: "$200" },
  { id:"6", image: gridimg6, title: "Kids Round Neck Cotton Top", subtitle: "$14" },
  { id:"7", image: gridimg7, title: "Women Round Neck Cotton Top", subtitle: "$149" },
  { id:"8", image: gridimg8, title: "Women Round Neck Cotton Top", subtitle: "$149" },
  { id:"9", image: gridimg9, title: "Women Round Neck Cotton Top", subtitle: "$149" },
  { id:"10", image: gridimg10, title: "Kids Bottom", subtitle: "$149" },
  { id:"11", image: gridimg9, title: "Women Round Neck Cotton Top", subtitle: "$149" },
  { id:"12", image: gridimg10, title: "Men Bottom", subtitle: "$1500" },
];


export const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);

  const value = {products}
  return (

    <shopContext.Provider value={value}>{children}</shopContext.Provider>
  );
};
