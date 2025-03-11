import React from 'react'
import logo from '../assets/images/logo.png'


function Header() {
  return (
     <>
        <div className='flex justify-between mr-8'>
            <img className="h-12 w-40 mt-5 ml-14" src={logo} alt="Logo-image" />
             
             <button className='border-solid border-2 h-10 w-36 rounded-2xl bg-slate-500 text-white mt-5 '>LOGOUT</button>
             </div>
             <div className="border-t border-[#e0dcdc] mt-2  "></div>
            
             </>
    
  )
}

export default Header