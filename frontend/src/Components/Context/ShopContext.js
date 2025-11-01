import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
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



// const data = [
//   {
//     _id: "6683d3d47f779795ecfa98a1",
//     name: "Men Round Neck Pure Cotton T-shirt",
//     description:
//       "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//     price: 80,
//     image: gridimg1,
//     category: "Men",
//     subCategory: "Topwear",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     bestseller: false,
//   },
//   {
//     _id: "6683d3d47f779795ecfa98a2",
//     name: "Men Round Neck Pure Cotton T-shirt",
//     description:
//       "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//     price: 80,
//     image: gridimg2,
//     category: "Men",
//     subCategory: "Topwear",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     bestseller: false,
//   },
//   {
//     _id: "6683d3d47f779795ecfa98a3",
//     name: "Men Round Neck Pure Cotton T-shirt",
//     description:
//       "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//     price: 80,
//     image: gridimg3,
//     category: "Men",
//     subCategory: "Topwear",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     bestseller: false,
//   },
//   {
//     _id: "6683d3d47f779795ecfa98a4",
//     name: "Men Round Neck Pure Cotton T-shirt",
//     description:
//       "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//     price: 80,
//     image: gridimg4,
//     category: "Men",
//     subCategory: "Topwear",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     bestseller: false,
//   },
//   {
//     _id: "6683d3d47f779795ecfa98a5",
//     name: "Men Round Neck Pure Cotton T-shirt",
//     description:
//       "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//     price: 80,
//     image: gridimg5,
//     category: "Men",
//     subCategory: "Topwear",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     bestseller: false,
//   },
//   {
//     _id: "6683d3d47f779795ecfa98a6",
//     name: "Men Round Neck Pure Cotton T-shirt",
//     description:
//       "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//     price: 80,
//     image: gridimg6,
//     category: "Men",
//     subCategory: "Topwear",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     bestseller: false,
//   },
//   {
//     _id: "6683d3d47f779795ecfa98a7",
//     name: "Men Round Neck Pure Cotton T-shirt",
//     description:
//       "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//     price: 80,
//     image: gridimg7,
//     category: "Men",
//     subCategory: "Topwear",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     bestseller: false,
//   },
//   {
//     _id: "6683d3d47f779795ecfa98a8",
//     name: "Men Round Neck Pure Cotton T-shirt",
//     description:
//       "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//     price: 80,
//     image: gridimg8,
//     category: "Men",
//     subCategory: "Topwear",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     bestseller: false,
//   },
//   {
//     _id: "6683d3d47f779795ecfa98a9",
//     name: "Men Round Neck Pure Cotton T-shirt",
//     description:
//       "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//     price: 80,
//     image: gridimg9,
//     category: "Men",
//     subCategory: "Topwear",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     bestseller: false,
//   },
//   {
//     _id: "6683d3d47f779795ecfa98a10",
//     name: "Men Round Neck Pure Cotton T-shirt",
//     description:
//       "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//     price: 80,
//     image: gridimg10,
//     category: "Men",
//     subCategory: "Topwear",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     bestseller: false,
//   },
// ];

export const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  
  const [cartItems, setCartItems] = useState({});
  const backendUrl = process.env.REACT_APP_BACKEND_URL;


  const delivery_fee = 10;
  const[token,setToken] =useState('')

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
  const getProductsData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/product/list"); 
      if(response.data.success){
      console.log(response.data)
      setProducts(response.data.getAllProducts.reverse());
      }else{
        toast.error(response.data.message)

      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } 
  };
  const addToCart = async(itemId, size) => {
    if (!size) {
      toast.error('Select the Size')
      
      console.log("size is not selected");
      return;
    }
   
    let cartData = structuredClone(cartItems)
    if (cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size] +=1;
      }else{
        cartData[itemId][size]=1
      }
    }else{
      cartData[itemId]={}
      cartData[itemId][size] =1;
    }
    setCartItems(cartData)
if(token){
  try{
    await axios.post('http://localhost:8000/cart/add-cart',{itemId,size},{headers:{token}})
    console.log(token)
    toast.success("Product Added To The Cart")
  }catch(error){
    console.log(error)
    toast.error(error.message)
  }
}
  }


 

  const getUserCart= async(token) =>{
    try{
      const response =await axios.post('http://localhost:8000/cart/get-cart',{},{headers:{token}})
      if(response.data.success){
        setCartItems(response.data.cartData)
        
      }

    }catch(error){
      console.log(error)
      toast.error(error.message)
    }

  }


  
const getCartCount =() =>{
  let totalCount=0;
  for(const items in cartItems){
    for(const item in cartItems[items]){
      try{
        if(cartItems[items][item] > 0){
          totalCount +=cartItems[items][item]
        }

      }catch(error){

      }

    }
  }
  return totalCount;

}


const getCartAmount = () => {
  let totalAmount = 0;
  for (const items in cartItems) {
    let itemInfo = products.find((product) => product._id === items);
    if (itemInfo) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          totalAmount += itemInfo.price * cartItems[items][item];
        }
      }
    }
  }
  return totalAmount;
};

const updateQuantity = async (itemId,size,quantity) =>{
  let cartData = structuredClone(cartItems)
  cartData[itemId][size] = quantity;
  setCartItems(cartData)
  if(token){
    try{
      await axios.post('http://localhost:8000/cart/update-cart',{itemId,size,quantity},{headers:{token}})
    }catch(error){
      console.log(error);
      toast.error(error.messsage)

      
    }
  }

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




  //   setCartItems((prevCartItems) => {
  //     const newCartItems = { ...prevCartItems };
  //     if (!newCartItems[productId]) {
  //       newCartItems[productId] = {};
  //     }
  //     if (newCartItems[productId][size]) {
  //       newCartItems[productId] = { ...newCartItems[productId] };
  //       newCartItems[productId][size] += 1;
  //     } else {
  //       newCartItems[productId][size] = 1;
  //     }
  //     return newCartItems;
  //   });
  //   toast.success("Added to cart!", { position: "top-right" });
  // };

  const removeCartItems = (itemId, size) => {
    setCartItems((prevCart) => {
      alert(`Do you want to delete this ${itemId}?`)
      const newCart = { ...prevCart };
      delete newCart[itemId][size];
     

      return newCart;
    });
   
  };

 
  
  

  useEffect(() => {
    console.log(cartItems, "cartitems");
  }, [cartItems]);

  useEffect(() => {
   

    getProductsData();
  }, []);

  useEffect(() => {
    if(!token && localStorage.getItem('token')){
      setToken(localStorage.getItem('token'))
      getUserCart(localStorage.getItem("token"))

    }
    if(token){
      getUserCart(token)
    }
    
  
    
  }, [token])
  

  const value = { products, cartItems, addToCart,removeCartItems,delivery_fee,setCartItems,getCartCount,getCartAmount,updateQuantity,backendUrl,token,setToken};

  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
}
