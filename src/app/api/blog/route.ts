import getBlogModel from "@/lib/models/BlogModel";
import { unlink } from "fs";

import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const blogId = url.searchParams.get("id");
        console.log("blog Id",blogId)
        const Blog = await getBlogModel();

        if (blogId) {
            // Fetch a single blog by ID
            const blog = await Blog.findById(blogId);
         
            if (!blog) {
                return NextResponse.json({ status: 404, message: "Blog not found" });
            }
            return NextResponse.json({ status: 200, blog });
        } else {
            // Fetch all blogs
            const blogs = await Blog.find();
            return NextResponse.json({ status: 200, blogs });
        }
    } catch (error) {
        console.error("Error processing GET request:", error);
        return NextResponse.json({ status: 500, message: "Internal Server Error" });
    }
}

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const timeStamp = Date.now();
        const image = formData.get("image");

        if (!image || !(image instanceof File)) {
            return NextResponse.json(
                { error: "Image file is required" },
                { status: 400 }
            );
        }

        const imageBytes = await image.arrayBuffer();
        const imageBuffer = Buffer.from(imageBytes);
        const path = `./public/${timeStamp}_${image.name}`;
        await writeFile(path, imageBuffer);
        const imageUrl = `/${timeStamp}_${image.name}`;
        console.log(imageUrl);

        const blogData = {
            title: formData.get("title")?.toString() || "",
            description: formData.get("description")?.toString() || "",
            category: formData.get("category")?.toString() || "",
            author: formData.get("author")?.toString() || "",
            image: imageUrl,
            authorImg: formData.get("authorImg")?.toString() || "",
        };

        if (!blogData.title || !blogData.description || !blogData.author) {
            return NextResponse.json(
                { error: "Title, description, and author are required" },
                { status: 400 }
            );
        }

        const Blog = await getBlogModel();
        const res = await Blog.create(blogData);
        console.log("blog added", res);
        return NextResponse.json({ success: true, msg: "Successfully added blog" }, { status: 200 });
    } catch (error) {
        console.error("Error processing POST request:", error);
        return NextResponse.json(
            { error: "Failed to process the blog post" },
            { status: 500 }
        );
    }
}

export async function DELETE(request:Request) {
    try {
        const url=new URL(request.url)
        const blogId = url.searchParams.get("id");
        const Blog=await getBlogModel();
        const blog=await Blog.findById(blogId)
        unlink(`../../public/${blog?.image}`, (err) => {
            if (err) {
                console.error("Failed to delete image:", err);
                return NextResponse.json({ error: "Failed to delete image" }, { status: 500 });
            }
        });
        await Blog.findByIdAndDelete(blogId)
        return NextResponse.json({ msg:"successfully deleted" }, { status: 201 });


    } catch (error) {
        console.error(error);
        return NextResponse.json({error:"internal error"},{status:500})
    }
}