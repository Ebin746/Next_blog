import getBlogModel from "@/lib/models/BlogModel";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";



export async function GET(request:Request) {
   try {
    const Blog = await getBlogModel();
    const blogs = await Blog.find()
    return NextResponse.json({blogs},{status:200})
   } catch (error) {
    console.error("Error processing POST request:", error);
        return NextResponse.json(
            { error: "Failed to process the blog post" },
            { status: 500 }
        );

   }
}

export async function POST(request:Request) {
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
            return NextResponse.json({ error: "Title, description, and author are required" },
                { status: 400 })
        }
        const Blog = await getBlogModel();
        const res = await Blog.create(blogData);
        console.log("blog added", res)
        return NextResponse.json({ success: true, msg: "successfuly blog added" }, { status: 200 })
    } catch (error) {
        console.error("Error processing POST request:", error);
        return NextResponse.json(
            { error: "Failed to process the blog post" },
            { status: 500 }
        );

    }
}