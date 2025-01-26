"use client"
import React, { useState } from 'react'
import {blog_data } from "../../public/assets/assets"
import Blogitem from "./BlogItem"
const BlogList = () => {
    const [menu,setMenu]=useState("ALL")
  return (
    <div>  
    <div className='flex justify-center gap-6 my-10'>
    <button onClick={()=>setMenu('ALL')} className={menu==="ALL"?"text-white bg-black px-2":""}> ALL </button>
    <button onClick={()=>setMenu('Technology')} className={menu==="Technology"?"text-white bg-black px-2":""}>Technology</button>
    <button onClick={()=>setMenu('Startup')} className={menu==="Startup"?"text-white bg-black px-2":""}>start up</button>
    <button onClick={()=>setMenu('Lifestyle')}className={menu==="Lifestyle"?"text-white bg-black px-2":""}>Life style</button>
    </div>
    <div className='flex flex-wrap justify-around gap-1 mx-1 gap-y-10 mb-10 xl:mb-20'>
   { blog_data.filter((item)=>menu=="ALL"?"true":item.category===menu).map((item,index)=>{
    return <Blogitem  key={index} id={item.id} description={item.description} title={item.title} image={item.image} category={item.category}/>
   }) }
    </div>
    
    </div>
  )
}

export default BlogList