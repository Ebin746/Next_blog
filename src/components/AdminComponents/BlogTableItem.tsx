import React from 'react'
import { assets } from '../../../public/assets/assets'
import Image from 'next/image'
import { toast } from 'react-toastify'
import axios from 'axios'
interface BlogData {
    authorImage:string,
     title:string
  author:string
  date:string
  id:string
}
const BlogTableItem = ({id,authorImage,title,author,date,}:BlogData) => {
   
    const  dates=new Date(date)
    const deleteBlog=async()=>{
      try {
         await axios.delete(`/api/blog?id=${id}`)
         toast.success("successfully deleted");
      } catch (error) {
         console.error(error);
         toast.error("failed to delete");
      }
    }
  return (
    <tr className='bg-white border-b'>
        <th scope='row' className='px-2 gap-6 flex py-3 sm:pl-12 '>
           <Image src={authorImage?authorImage:assets.profile_icon} alt="profile" width={40} height={30} className='border rounded-3xl'/>
           {author?author:"no name"}
        </th>
        <td className='px-6 py-4'>
           {title?title:"no tiile"}
        </td>
        
        <td className='px-6 py-4'>
           {dates?dates.toLocaleDateString():"dd-mm-yyyy"}
        </td>
        
        <td className='px-6 py-4 ' onClick={()=>{deleteBlog()}}>
           delete
        </td>
    </tr>
  )
}

export default BlogTableItem