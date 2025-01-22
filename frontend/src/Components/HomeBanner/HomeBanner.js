import React from 'react'
import imgbanner from '../../assets/images/file 1 (1).png'
import border from '../../assets/images/Rectangle 3147.png'

function HomeBanner() {
  return (
   <div className='flex border-solid border-2 ml-32 mr-32 mt-7  ' >
    <div className='flex-col ml-28 mt-40'>
      <div className='flex'>
      <img className=' h-[2px] w-12 mt-2 ' src={border} alt="border-line" />
        <div className='text-base font-medium leading-5 text-[#414141] pl-2'>OUR BESTSELLERS</div></div>
        <div className=' text-5xl leading-10 font-normal text-[#414141] mt-3.5 mr-32 '><pre>Latest Arrivals</pre></div>
        <div className='flex'>
        
        <div className=' mt-3.5 font-medium text-base text-[#414141] mb-30 ' >SHOP NOW</div>
        <img className=' h-[2px] w-12 mt-6 pl-2 ' src={border} alt="border-line" />
        </div>
    </div>
    <div className="flex-1 bg-[#FFDAD6]"> {/* Flex container for proper alignment */}
        <img
          className="w-full h-full object-cover"
          src={imgbanner}
          alt="homebanner-img"
        />
      </div>
   </div>
  )
}

export default HomeBanner