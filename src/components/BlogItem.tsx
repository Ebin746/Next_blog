import Image from "next/image";
import React from "react";
import { assets } from "../../public/assets/assets";
import Link from "next/link";
const BlogItem = (
  {
    title,
    description,
    image,
    id,
    category,

  }:{
    title: string;
  description: string;
  image: string;
  id: string;
  category: string;
  }
) => {
  console.log(`/${image}`)
  return (
    <div className="max-w-[270px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_1px_#000000]">
      <Link href={`/blogs/${id}`}>
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
            read more <Image src={assets.arrow} width={20} height={10} alt="arrow" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;
