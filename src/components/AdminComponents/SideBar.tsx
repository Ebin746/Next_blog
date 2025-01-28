import React from "react";
import Image from "next/image";
import { assets } from "../../../public/assets/assets";
import Link from "next/link";

const SideBar = () => {


  return (
    <div className="flex flex-col bg-slate-200 min-h-screen">
      {/* Logo Section */}
      <div className="px-6 py-6 sm:pl-14 shadow-md bg-white">
        <Image src={assets.logo} alt="logo" width={140} />
      </div>

      {/* Sidebar Links */}
      <div className="w-28 sm:w-64 py-8 p-3 border-l border-gray-200 bg-white shadow-lg rounded-l-lg flex-1">
        <Link
          href="/admin/addblog"
          className="flex items-center gap-4 font-medium px-4 py-3 mb-3 rounded-lg bg-white hover:bg-gray-50 hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <Image src={assets.add_icon} alt="Add Blog Icon" width={28} height={28} />
          <p className="hidden sm:block text-gray-700">Add Blog</p>
        </Link>

        <Link
          href="/admin/bloglist"
          className="flex items-center gap-4 font-medium px-4 py-3 mb-3 rounded-lg bg-white hover:bg-gray-50 hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <Image src={assets.blog_icon} alt="Blog List Icon" width={28} height={28} />
          <p className="hidden sm:block text-gray-700">Blog List</p>
        </Link>

        <Link
          href="/admin/subscriptions"
          className="flex items-center gap-4 font-medium px-4 py-3 mb-3 rounded-lg bg-white hover:bg-gray-50 hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <Image src={assets.email_icon} alt="Subscription Icon" width={28} height={28} />
          <p className="hidden sm:block text-gray-700">Subscriptions</p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;