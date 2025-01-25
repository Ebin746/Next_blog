import Image from "next/image";
import React from "react";
import { assets } from "../../public/assets/assets";
const BlogItem = (
  {
    title,
  description,
  image,

  category,

}
) => {
  return (
    <div className="max-w-[270px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_1px_#000000]">
      <Image
        src={image}
        width={400}
        height={400}
        className="border border-solid"
        alt={title}
      />
      <p className="ml-3 mt-5 bg-black text-sm w-fit px-1 tracking-tighter text-gray-50">
        {category}
      </p>
      <div className="p-5">
        <h3 className="mb-3 tracking-tight text-lg font-medium text-gray-900  ">
          {title}
        </h3>
        <p className="mb-3 tracking-tight text-sm ">
          {description}
        </p>
        <div className="inline-flex items-center text-center py-2 font-semibold">
          read more <Image src={assets.arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
