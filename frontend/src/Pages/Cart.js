import React, { useContext, useState, useEffect } from "react";
import border from "../assets/images/Rectangle 3147.png";
import { Link } from "react-router-dom";
import { shopContext } from "../Components/Context/ShopContext";

function Cart() {
  const { cartItems, products, removeCartItems, getCartAmount, updateQuantity, delivery_fee } = useContext(shopContext);
  const [cartData, setCartData] = useState([]);
  const subTotal = getCartAmount();
  const shippingFee = subTotal > 0 ? delivery_fee : 0;
  const total = subTotal + shippingFee;

  useEffect(() => {
    let temp = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          temp.push({ _id: items, size: item, quantity: cartItems[items][item] });
        }
      }
    }
    setCartData(temp);
  }, [cartItems]);

  return (
    <section className="px-4 md:px-24">
      {/* Cart Header */}
      <div className="border-solid border-length mt-6"></div>
      <div className="flex">
        <div className="mt-14 font-normal text-3xl leading-9 text-[#707070]">
          YOUR <span className="font-semibold text-[#171717] text-3xl leading-9">CART</span>
        </div>
        <img className="h-0.5 w-12 mt-20 pl-1" src={border} alt="border-line" />
      </div>
      <div className="border-solid border-length mt-6"></div>

      {/* Empty Cart Message */}
      {cartData?.length === 0 ? (
        <p className="text-center pt-10 text-red-600 text-3xl font-bold">Your Cart Is Empty!!!!</p>
      ) : (
        <>
          {cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);
            return (
              <div key={`${item._id}-${item.size}`} className="flex items-center justify-between border-b py-4">
                {/* Product Details Section */}
                <div className="flex items-center w-1/3">
                  <img className="h-32 w-32 object-cover" src={productData?.image[0]} alt={productData?.name} />
                  <div className="flex flex-col space-y-2 ml-4">
                    <div className="font-medium text-[18px] text-[#2A2A2A]">{productData?.name}</div>
                    <div className="text-lg font-normal text-[#2A2A2A]">${productData?.price}</div>
                    <div className="border-solid border-2 w-8 h-8 flex items-center justify-center bg-slate-100">{item.size}</div>
                  </div>
                </div>

                {/* Quantity Section */}
                <div className="w-1/3 flex justify-center">
                  <input
                    type="number"
                    value={item.quantity}
                    min={1}
                    max={100}
                    className="w-16 h-10 text-center border border-gray-300 rounded-md"
                    onChange={(e) => e.target.value === '' || e.target.value === "0" ? null : updateQuantity(item._id, item.size, Number(e.target.value))}
                  />
                </div>

                {/* Delete Button Section */}
                <div className="w-1/3 flex justify-end">
                  <button
                    className="h-10 w-24 border-solid border-2 bg-red-500 rounded-lg text-white"
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            );
          })}

          {/* Cart Totals Section */}
          <div className="flex justify-end mt-12">
            <div className="w-1/3 space-y-4">
              <div className="text-2xl font-semibold">CART TOTALS</div>
              <div className="border-solid border-[0.5px]"></div>
              <div>Subtotal <span className="float-right">${subTotal}</span></div>
              <div className="border-solid border-[0.5px]"></div>
              <div>Shipping Fee <span className="float-right">${shippingFee}</span></div>
              <div className="border-solid border-[0.5px]"></div>
              <div className="font-semibold text-xl">Total <span className="float-right">${total}</span></div>

              <Link to="/place-order">
                <button className="border-solid border-2 h-12 w-60 bg-black text-white self-center mt-8 ml-36">PROCEED TO CHECKOUT</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;
