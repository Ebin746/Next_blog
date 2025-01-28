"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { assets } from "../../../../public/assets/assets";

interface BlogData {
  title: string
  author: string
  description: string
  category: string
  author_img: string
}


const Page = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<BlogData|null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(`/api/blog?id=${params.id}`);
      console.log(res)
      setData(res.data.blog);
    } catch (err) {
      console.error("Error fetching blog data:", err);
      setError("Failed to fetch blog data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <h1 className="font-semibold my-10 text-3xl sm:text-5xl mx-auto max-w-[720px] text-center">
        404 - Blog Not Found
      </h1>
    );
  }

  return (
    <>
      <div className="bg-gray-200 sm:px-12 lg:px-28 py-5 px-5">
        <div className="flex justify-between my-1 sm:my-3">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              width={180}
              className="block h-9 sm:w-220 w-[120px]"
              height={10}
              alt="Logo"
            />
          </Link>
          <button className="h-7 flex bg-black text-slate-50 items-center py-5 px-6 gap-2 border border-solid border-black sm:shadow-[-7px_7px_0px_#2b2929]">
            Get Started
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="font-semibold text-3xl sm:text-5xl mx-auto max-w-[720px]">
            {data.title}
          </h1>
          <Image
            src={assets.profile_icon}
            alt="profile_icon"
            className="mx-auto mt-6 border-white rounded-full"
            width={60}
            height={60}
          />
          <p className="max-w-[740px] mx-auto mt-1 text-lg pb-2">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10 border-4 border-white">
        <Image src={data.image} width={1280} height={720} alt="blog image" />
        <h1 className="mx-8 text-[26px] font-semibold mt-6">Introduction:</h1>
        <p className="mx-8 my-4">{data.description}</p>

        {/* Example of dynamic steps (you can replace this with actual steps from your data) */}
        {[1, 2, 3].map((step) => (
          <div key={step} className="mx-8 my-6">
            <h3 className="text-[18px] font-semibold">Step {step}:</h3>
            <p className="my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
          </div>
        ))}

        <div className="my-24 mx-8">
          <p className="my-4 font-semibold">Share this article</p>
          <div className="flex gap-4">
            <Image src={assets.facebook_icon} width={40} alt="Facebook" />
            <Image src={assets.googleplus_icon} width={40} alt="Google Plus" />
            <Image src={assets.twitter_icon} width={40} alt="Twitter" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;