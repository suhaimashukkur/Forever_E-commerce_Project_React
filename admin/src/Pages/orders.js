import {useEffect, useState} from 'react'
import axios from 'axios'
import { backend_url } from "../App";

const Orders =() => {
  const[orders,setOrders]=useState('')
  useEffect(  () => {

   const  fetchProducts= async ()=>{
     try{
      const response= await axios.get(backend_url + "/order/list-order")
      console.log(response,"order-list")
      if(response.data.success)
      setOrders(response.data.orders)

    }catch(err){
console.log(err.message)
    }
 
   }
  fetchProducts()
    
  }, [])
  

  return (
    <div>orders</div>

  )
}

export default Orders