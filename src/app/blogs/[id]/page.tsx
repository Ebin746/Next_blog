"use client";
import React, { useEffect, useState } from "react";
import { blog_data,assets } from "../../../../public/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Page = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<any | null>(null);

  const fetchData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (blog_data[i].id === Number(params.id)) {
        setData(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if(!data ){
    return   <h1 className="font-semibold my-10 text-3xl sm:text-5xl mx-auto max-w-[720px]">
404
</h1>
  }
  return ( data &&
<>
<div className="bg-gray-200 sm:px-12 lg:px-28 py-5 px-5">
     <div className="flex justify-between my-1 sm:my-3 ">
        <Link href="/">  <Image src="/assets/logo.png" width={180} className='block h-9 sm:w-220 w-[120px]' height={10} alt="Logo" /></Link>
          <button className='h-7 flex bg-black text-slate-50 items-center py-5 px-6 gap-2 border border-solid border-black sm:shadow-[-7px_7px_0px_#2b2929]'>Get Started</button>
        </div>
        <div className=" text-center my-24">
            <h1 className="font-semibold text-3xl sm:text-5xl mx-auto max-w-[720px]">
                ajasjd akjsdajhda sdjhasjda dlashd
            </h1>
            <Image src={data.author_img} alt="profile_icon" className="mx-auto mt-6 border-white rounded-full " width={60} height={60}/>
            <p className="max-w-[740px] mx-auto mt-1 text-lg pb-2">{data.author}</p>
        </div>
  </div>
  <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10 border-4 border-white">
            <Image src={data.image} width={1280} height={720} alt="image"/>
            <h1 className="mx-8 text-[26px] font-semibold ">
              introduction:
            </h1>
            <p>{data.description}</p>
            <h3 className="my-5 text-[18px] font-semibold">Step 1:</h3>
            <p className="my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut cumque sapiente et quo eos est pariatur unde dolores dolore quae veniam non delectus omnis, laborum molestiae architecto. Similique, cupiditate tempora? </p>
            <p className="my-3"> here wew areasdas ar adjaposduad amhdauhda </p>
            
            <h3 className="my-5 text-[18px] font-semibold">Step 1:</h3>
            <p className="my-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, pariatur repellat. Laboriosam cumque, beatae ratione amet voluptas, quas molestias ad expedita voluptatem doloribus nemo eos earum accusantium, mollitia vel quam? </p>
            <p className="my-3"> here wew arear adjaposduad amhdauhda </p>
            
            <h3 className="my-5 text-[18px] font-semibold">Step 1:</h3>
            <p className="my-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis perferendis est sint accusamus temporibus aperiam nemo distinctio fugit quas. Qui architecto et doloremque quibusdam expedita reprehenderit, rem ducimus nulla eum! </p>
            <p className="my-3"> here wew arear adjaposduad amhdauhda </p>
             <div className="my-24">
             <p className="my-4 font font-semibold">Share this article</p>
               <div className='flex '>
                   <Image src={assets.facebook_icon} width={40} alt="icon"/>
                   <Image src={assets.googleplus_icon} width={40} alt="icon"/>
                   <Image src={assets.twitter_icon} width={40} alt="icon"/>
                   </div>
             </div>
        </div>
</>
  );
};

export default Page;
