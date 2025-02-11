"use client";
import Image from 'next/image';
import { useState } from 'react';
import { assets } from '../../../../public/assets/assets';
import axiosInstance from '@/lib/config/axiosInstance'; // Adjust the import path as needed
import { toast } from 'react-toastify';

// Define the type for the `data` state
interface BlogData {
  title: string;
  author: string;
  description: string;
  category: string;
  author_img: string;
}

const Page = () => {
  const [image, setImage] = useState<File | null>(null);
  const [data, setData] = useState<BlogData>({
    title: "",
    author: "steve",
    description: "",
    category: "Startup", // Default category
    author_img: "/assets/profile_icon.png"
  });

  // Handle input and textarea changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", typeof data);
    
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("author_img", data.author_img);
    if (image) {
      formData.append("image", image);
    }

    try {
      const res = await axiosInstance.post("/api/admin", formData);
      if (res.data.success) {
        toast.success(res.data.msg);
      }
      console.log(res)// Reset the form data after a successful submission
      setData({
        title: "",
        author: "steve",
        description: "",
        category: "Startup",
        author_img: "/assets/profile_icon.png"
      });
    } catch (error) {
      toast.error("Failed to add blog post.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='pt-5 px-5 sm:pt-12 sm:pl-16 max-w-4xl mx-auto'>
      {/* Upload Image Section */}
      <div className='mb-8'>
        <p className='text-xl font-semibold text-gray-700 mb-3'>Upload Image</p>
        <label htmlFor='file-upload' className='cursor-pointer'>
          <div className='flex items-center justify-center w-48 h-32 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-all'>
            <Image
              className='object-cover'
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="icon"
              height={70}
              width={140}
            />
          </div>
        </label>
        <input
          id='file-upload'
          type='file'
          onChange={handleImageChange}
          className='hidden'
        />
      </div>

      {/* Blog Title Section */}
      <div className='mb-8'>
        <p className='text-xl font-semibold text-gray-700 mb-3'>Blog Title</p>
        <input
          className='w-full sm:w-[500px] px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all'
          placeholder='Enter your blog title...'
          type='text'
          name="title"
          value={data.title}
          onChange={handleChange}
          required
        />
      </div>

      {/* Blog Description Section */}
      <div className='mb-8'>
        <p className='text-xl font-semibold text-gray-700 mb-3'>Blog Description</p>
        <textarea
          className='w-full sm:w-[500px] px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all'
          placeholder='Write your blog description...'
          rows={5}
          name='description'
          value={data.description}
          onChange={handleChange}
          required
        />
      </div>

      {/* Category Section */}
      <div className='mb-8'>
        <p className='text-xl font-semibold text-gray-700 mb-3'>Category</p>
        <select
          name='category'
          value={data.category}
          onChange={handleChange}
          className='w-48 px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all text-gray-700'
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className='bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-gray-600'
      >
        Add Blog
      </button>
    </form>
  );
};

export default Page;
