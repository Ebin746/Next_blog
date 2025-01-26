import React from 'react'
import Image from 'next/image'
import { assets } from '../../../public/assets/assets'
const SideBar = () => {
  return (
    <div className='flex flex-col bg-slate-50'>
        <div className="px-3 py-3 sm:pl-14 border border-black">
        <Image src={assets.logo} alt="logo" width={120} />
        </div>
        <div className="w-28 sm:w-80 h-[100vh] relative border border-black">
            <div className="flex items-center border border-black gap-3 font-medium px-3 py-3 bg-white shadow-[-5px_5px_0px_#000000]">
                <Image src={assets.add_icon} alt="logo" width={28} /> <p>Add blog</p>
            </div>
        </div>
    </div>
  )
}

export default SideBar