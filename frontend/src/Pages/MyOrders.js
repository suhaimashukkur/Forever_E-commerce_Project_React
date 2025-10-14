import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { shopContext } from "../Components/Context/ShopContext";
import { toast } from "react-toastify";

function Orders() {
  const [orders, setOrders] = useState([]);
  const { products } = useContext(shopContext);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userid");

  // ✅ Fetch user orders
  const getUserOrders = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/order/get-userorder/${userId}`,
        { headers: { token } }
      );

      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        setOrders([]);
        toast.error("No orders found");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load orders");
    }
  };

  useEffect(() => {
    getUserOrders();
  }, []);

  // 🩶 If no orders
  if (orders.length === 0) {
    return (
      <div className="text-center mt-20 text-gray-600 text-lg">
        No orders yet
      </div>
    );
  }

  // ✅ Main JSX
  return (
    <div className="ml-20 mr-20 mt-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Orders</h2>

      <div className="flex flex-col gap-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="grid grid-cols-3 border border-gray-300 rounded-2xl p-6 shadow-sm"
          >
            {/* 🟢 COLUMN 1: Product Details */}
            <div className="flex flex-col gap-4">
              {order.items.map((itemObj, i) => (
                <div key={i}>
                  {Object.entries(itemObj).map(([productId, sizeObj]) => {
                    const product = products.find((p) => p._id === productId);
                    if (!product) return null;

                    return Object.entries(sizeObj).map(([size, qty]) => {
                      if (qty === 0) return null;
                      return (
                        <div
                          key={productId + size}
                          className="flex gap-4 items-center border-b border-gray-200 pb-3"
                        >
                          <img
                            src={product.image1 || product.image}
                            alt={product.name}
                            className="w-24 h-24 rounded-lg object-cover"
                          />
                          <div>
                            <h3 className="font-medium text-gray-800">
                              {product.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              Price: ₹{product.price}
                            </p>
                            <p className="text-sm text-gray-600">
                              Quantity: {qty}
                            </p>
                            <p className="text-sm text-gray-600">Size: {size}</p>
                          </div>
                        </div>
                      );
                    });
                  })}
                </div>
              ))}
              <p className="font-semibold mt-2 text-gray-800">
                Total: ₹{order.amount}
              </p>
            </div>

            {/* 🟠 COLUMN 2: Order Status */}
            <div className="flex flex-col justify-center items-center text-center">
              <p
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-700"
                    : order.status === "Processing"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {order.status || "Order Placed"}
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Payment: {order.paymentMethod}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(order.date).toLocaleDateString()}
              </p>
            </div>

            {/* 🔵 COLUMN 3: Track Order */}
            <div className="flex justify-center items-center">
              <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
