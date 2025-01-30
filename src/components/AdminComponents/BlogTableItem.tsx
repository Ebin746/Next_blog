import React from 'react'
import { assets } from '../../../public/assets/assets'
import Image from 'next/image'
interface BlogData {
    authorImage:string,
     title:string
  author:string
}
const BlogTableItem = ({authorImage,title,author}:BlogData) => {
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
           {"11 Jan 2024"}
        </td>
        
        <td className='px-6 py-4'>
           x
        </td>
    </tr>
  )
}

export default BlogTableItem