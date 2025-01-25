import React from 'react'
import {assets} from "../../public/assets/assets"
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='py-6  flex justify-around items-center flex-col gap-2  sm:gap-0 sm:flex-row bg-black text-white'>
        <Image src={assets.logo_light} alt="logo" width={120} />
        <p className='text-sm '>ALL rights revserved @BlogPost</p>
        <div className='flex '>
        <Image src={assets.facebook_icon} width={40} alt="icon"/>
        <Image src={assets.googleplus_icon} width={40} alt="icon"/>
        <Image src={assets.twitter_icon} width={40} alt="icon"/>
        </div>
    </div>
  )
}

export default Footer