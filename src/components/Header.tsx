"use client"
import React from 'react'


import Image from 'next/image'

const Header = () => {
  console.log("Header rendered");
  return (
    <div className="py-5 px-5 lg:px-17 sm:p-15 w-full ">
    <div className="flex justify-between  ">

      <Image src="/assets/logo.png" width={180} className='block h-9 sm:w-220 w-[120px]' height={10} alt="Logo" />
      <button className='h-7 flex bg-black text-slate-50 items-center py-5 px-6 gap-2 border border-solid border-black shadow-[-7px_7px_0px_#2b2929]'>Get Started</button>
    </div>
    <div className="text-center my-8  py-2">
      <h1 className='font-bold lg:text-3xl sm:text-2xl'>Latest blog</h1>
      <p className='my-2 max-w-[750px] sm:text-base text-xs m-auto ' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam sit laudantium debitis quasi molestiae assumenda aliquam quos, aliquid dicta ut doloribus recusandae minima quis ducimus soluta in officiis architecto amet?</p>
      <form action="" className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto border border-black shadow-[-7px_7px_0px_#2b2828]'>
        <input  type="email" placeholder='@gmail.com' className=' sm:mx-3 border-solide outline-none ' />
        <button type='submit'  className='hover:bg-black hover:text-white sm:px-5 py-3  border-r-2'>Subscribe</button>

        
      </form>
    </div>
 </div>
  )
}

export default Header