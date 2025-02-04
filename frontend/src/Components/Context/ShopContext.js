import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gridimg1 from "../../assets/images/Rectangle 3608.png";
import gridimg2 from "../../assets/images/Rectangle 3609.png";
import gridimg3 from "../../assets/images/Rectangle 3611.png";
import gridimg4 from "../../assets/images/Rectangle 3613.png";
import gridimg5 from "../../assets/images/Rectangle 3615.png";
import gridimg6 from "../../assets/images/Rectangle 3616.png";
import gridimg7 from "../../assets/images/Rectangle 3617.png";
import gridimg8 from "../../assets/images/Rectangle 3619.png";
import gridimg9 from "../../assets/images/Rectangle 3634.png";
import gridimg10 from "../../assets/images/Rectangle 3635.png";

export const shopContext = React.createContext();
const data = [
  {
    _id: "6683d3d47f779795ecfa98a1",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 80,
    image: gridimg1,
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestseller: false,
  },
  {
    _id: "6683d3d47f779795ecfa98a2",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 80,
    image: gridimg2,
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestseller: false,
  },
  {
    _id: "6683d3d47f779795ecfa98a3",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 80,
    image: gridimg3,
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestseller: false,
  },
  {
    _id: "6683d3d47f779795ecfa98a4",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 80,
    image: gridimg4,
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestseller: false,
  },
  {
    _id: "6683d3d47f779795ecfa98a5",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 80,
    image: gridimg5,
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestseller: false,
  },
  {
    _id: "6683d3d47f779795ecfa98a6",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 80,
    image: gridimg6,
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestseller: false,
  },
  {
    _id: "6683d3d47f779795ecfa98a7",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 80,
    image: gridimg7,
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestseller: false,
  },
  {
    _id: "6683d3d47f779795ecfa98a8",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 80,
    image: gridimg8,
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestseller: false,
  },
  {
    _id: "6683d3d47f779795ecfa98a9",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 80,
    image: gridimg9,
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestseller: false,
  },
  {
    _id: "6683d3d47f779795ecfa98a10",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 80,
    image: gridimg10,
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestseller: false,
  },
];

export const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [cartItems, setCartItems] = useState({});

  // const addToCart = (productId,size) =>{

  //   if(!size){
  //     console.log("size is not selected")
  //     return;
  //   }
  //   let cartData = cartItems;
  //   if(cartData[productId]){
  //     if(cartData[productId][size]){
  //       cartData[productId][size] +=1;
  //     }else{
  //       cartData[productId][size]=1
  //     }

  //   }
  //   else{
  //     cartData[productId]={}
  //     cartData[productId][size]=1
  //   }
  //   console.log(cartData)
  //   setCartItems(cartData)
  //      }

  const addToCart = (productId, size) => {
    if (!size) {
      
      console.log("size is not selected");
      return;
    }

    // setCartItems((prevCartItems) => {
    //   const newCartItems = { ...prevCartItems };

    //   if (newCartItems[productId]) {
    //     newCartItems[productId] = { ...newCartItems[productId] };
    //     newCartItems[productId][size] = (newCartItems[productId][size] || 0) + 1;
    //   } else {
    //     newCartItems[productId] = { [size]: 1 };
    //   }

    //   return newCartItems; // This will trigger a re-render
    // });

    setCartItems((prevCartItems) => {
      const newCartItems = { ...prevCartItems };
      if (!newCartItems[productId]) {
        newCartItems[productId] = {};
      }
      if (newCartItems[productId][size]) {
        newCartItems[productId] = { ...newCartItems[productId] };
        newCartItems[productId][size] += 1;
      } else {
        newCartItems[productId][size] = 1;
      }
      return newCartItems;
    });
    toast.success("Added to cart!", { position: "top-right" });
  };

  const removeCartItems = (productId, size) => {
    setCartItems((prevCart) => {
      alert(`Do you want to delete this ${productId}?`)
      const newCart = { ...prevCart };
      delete newCart[productId][size];
     

      return newCart;
    });
   
  };

   const cartData = [];
  
     products.forEach((item) => {
      if (cartItems[item._id]) {
        Object.keys(cartItems[item._id]).forEach((size) => {
          cartData.push({
            ...item,
            size,
            quantity: cartItems[item._id][size],
          });
        });
      }
    });
    const subTotal = cartData.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const shippingFee = subTotal > 0 ? 10 : 0;
    const total = subTotal + shippingFee;

  useEffect(() => {
    console.log(cartItems, "cartitems");
  }, [cartItems]);
  const value = { products, cartItems, addToCart, removeCartItems ,total,subTotal,cartData,shippingFee};

  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
};
