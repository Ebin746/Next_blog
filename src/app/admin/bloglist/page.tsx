"use client"
import BlogTableItem from '@/components/AdminComponents/BlogTableItem'
import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { toast } from 'react-toastify'
interface BlogData {
  title: string
  author: string
  description: string
  category: string
  author_img: string
  date:string
  _id:string
}
const Page = () => {
  const [blog,setBlog]=useState<BlogData []|null>(null)
  const fetchData=async ()=>{
    try {
      const res=await axios.get("/api/blog");
  setBlog(res.data.blogs);
    } catch (error) {
      toast.error("failed to fetch");
      console.log(error);
    }
  }
  useEffect(()=>{
 fetchData();
  },[])
  return (
    <div className='flex-1 pt-5 py-5 sm:pt-10 sm:pl-14'> 
    <h1>All blogs</h1>
   {blog &&  <div className="realtive h-[80vh] max-w-[850px] ">
     <table className='w-full text-sm text-gray-500'>
      <thead className='text-sm text text-left uppercase  bg-gray-50 '>
        <tr>
          <th scope='col' className='hidden sm:table-cell px-6 py-3'> Author</th>
          <th scope='col' className=' px-6 py-3'> blog name</th>
          <th scope='col' className=' px-6 py-3'> date</th>
          <th scope='col' className=' px-6 py-3'> action</th>
        </tr>
      </thead>
      <tbody>
     {blog?.map((item,index)=><BlogTableItem id={item._id} key={index} date={item.date} title={item.title} authorImage={item.author_img} author={item.author}/>)}
      </tbody>
     </table>
    </div>}
    </div>
  )
}

export default Page