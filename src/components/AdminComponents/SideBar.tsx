import React from "react";
import Image from "next/image";
import { assets } from "../../../public/assets/assets";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="flex flex-col bg-slate-50">
      {/* Logo Section */}
      <div className="px-3 py-3 sm:pl-14 border-b border-black shadow-md">
        <Image src={assets.logo} alt="logo" width={120} />
      </div>

      {/* Sidebar Links */}
      <div className="w-28 sm:w-80 h-[100vh] py-12 relative p-3 border-l border-black bg-white shadow-lg rounded-l-lg " >
        <Link
          href="/admin/addblog"
          className="flex items-center gap-3 font-medium px-3 py-3 mb-3 rounded-lg bg-white hover:shadow-[-5px_5px_0px_#000000] hover:bg-gray-100 transition-all duration-300 ease-in-out"
        >
          <Image src={assets.add_icon} alt="Add Blog Icon" width={28} />
          <p>Add blog</p>
        </Link>

        <Link
          href="/admin/bloglist"
          className="flex items-center gap-3 font-medium px-3 py-3 mb-3 rounded-lg bg-white hover:shadow-[-5px_5px_0px_#000000] hover:bg-gray-100 transition-all duration-300 ease-in-out"
        >
          <Image src={assets.blog_icon} alt="Blog List Icon" width={28} />
          <p>Blog list</p>
        </Link>

        <Link
          href={"/admin/subscriptions"}
          className="flex items-center gap-3 font-medium px-3 py-3 mb-3 rounded-lg bg-white hover:shadow-[-5px_5px_0px_#000000] hover:bg-gray-100 transition-all duration-300 ease-in-out"
        >
          <Image src={assets.email_icon} alt="Subscription Icon" width={28} />
          <p>Subscription</p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
