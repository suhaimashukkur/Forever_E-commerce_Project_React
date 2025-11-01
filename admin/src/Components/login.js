import React, { useState } from "react";
import { toast } from "react-toastify";
import { backend_url } from "../App";
import axios from "axios";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
        console.log(backend_url)
      const response = await axios.post(backend_url + "/user/admin", {
        email,
        password,
        
      });
      console.log(response)
     

      if (response.data.success) {
        console.log(response.data.token)
        setToken(response.data.token);
        toast.success("Login Successful"); 
       
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="w-96 p-8 shadow-lg bg-white rounded-lg flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
      <form onSubmit={onSubmitHandler} className="w-full flex flex-col gap-4 items-center">
        <div className="w-full flex flex-col items-center">
          <label className="font-semibold self-start">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded text-center"
          />
        </div>
        <div className="w-full flex flex-col items-center">
          <label className="font-semibold self-start">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded text-center"
          />
        </div>
       
        <button type="submit" className="bg-black text-white p-2 rounded w-full">
          Login
        </button>
       
      </form>
    </div>
  </div>
  
  )
}
   

export default Login;
