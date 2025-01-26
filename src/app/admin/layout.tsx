import SideBar from "@/components/AdminComponents/SideBar";
import React, { ReactNode } from "react";
import { assets } from "../../../public/assets/assets";
import Image from "next/image";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="flex flex-col w-full">
          {/* Header Section */}
          <div className="flex items-center justify-between w-full py-4 px-6 border-b border-gray-300">
            <h3 className="text-xl font-semibold text-gray-800">Admin Panel</h3>
            <div className="flex items-center gap-3">
              <Image src={assets.profile_icon} alt="Profile Icon" width={48} height={48} />
              {/* Add more profile information or actions here if needed */}
            </div>
          </div>
          {/* Content Area */}
          <div className="px-6 py-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default layout;
