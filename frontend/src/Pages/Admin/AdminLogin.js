import React from 'react'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
  const navigate=useNavigate()
  const handleAdminHome=()=>{
    navigate('/admin-home')
  }
  return (
    <div className='flex  space-y-4 flex-col mt-28 border-solid border-2 h-[350px] w-96 ml-[450px] bg-white-200 rounded-2xl'>
      <h2 className='text-3xl leading-7 font-bold text-black text-center mt-12'>Admin Panel</h2>
      <form className=''>
        <label className='ml-5 text-lg font-medium leading-7'>Email</label>
        <input  type='email' name="email" required placeholder='Email' className='border-solid border-2 h-10 w-80 ml-7 mt-3 rounded-lg  pl-3' />
        <label className='ml-5 text-lg font-medium leading-7'>Password</label>
        <input type='number' required name="password" placeholder='email'className='border-solid border-2 h-10 w-80 ml-7 mt-3 rounded-lg  pl-3' />
     <button className='border-solid border-2 h-12 w-80 ml-7 mt-7 rounded-lg  pl-3 bg-black text-white' onClick={handleAdminHome}>Login</button>
     
      </form>
    </div>
  )
}

export default AdminLogin