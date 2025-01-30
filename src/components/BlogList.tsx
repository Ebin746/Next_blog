"use client"
import React, { useEffect, useState } from 'react'

import Blogitem from "./BlogItem"
import axios from 'axios'
// Define the type for the `data` state
interface BlogData {
  title: string
  author: string
  description: string
  category: string
  author_img: string
  _id: string
  image:string
}
const BlogList = () => {
    const [menu,setMenu]=useState("ALL")
    const [blogs,setBlogs]=useState<BlogData[]>([])

    const fetchBlogs=async ()=>{
    try {
      const res=await axios.get("/api/blog");
      setBlogs(res.data.blogs);
      console.log(res.data.blogs);
      console.log(blogs)
    } catch (error) {
      console.error("error",error);
    }
    }
    useEffect(()=>{
  fetchBlogs()
    },[])
  return (
    <div>  
    <div className='flex justify-center gap-6 my-10'>
    <button onClick={()=>setMenu('ALL')} className={menu==="ALL"?"text-white bg-black px-2":""}> ALL </button>
    <button onClick={()=>setMenu('Technology')} className={menu==="Technology"?"text-white bg-black px-2":""}>Technology</button>
    <button onClick={()=>setMenu('Startup')} className={menu==="Startup"?"text-white bg-black px-2":""}>start up</button>
    <button onClick={()=>setMenu('Lifestyle')}className={menu==="Lifestyle"?"text-white bg-black px-2":""}>Life style</button>
    </div>
    <div className='flex flex-wrap justify-around gap-1 mx-1 gap-y-10 mb-10 xl:mb-20'>
   {blogs && blogs.filter((item)=>menu=="ALL"?true:item.category===menu).map((item,index)=>{
    return <Blogitem  key={index} id={item._id} description={item.description} title={item.title} image={item.image} category={item.category}/>
   }) }
    </div>
    
    </div>
  )
}

export default BlogList