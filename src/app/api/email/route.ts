import getEmailModel from "@/lib/models/EmailSchema";
import { NextResponse } from "next/server";
// things to done :
// connect one to many connection btw userSchema and emailSchema

export async function POST(request: Request) {
    try {
        const { email, feedback } = await request.json();
        if (!email.trim() || !feedback.trim()) {
            return NextResponse.json({ msg: "email or feedback is missing " }, { status: 401 });
        }
        const Email = await getEmailModel();
        await Email.create({
            email, feedback
        });
        return NextResponse.json({ msg: "successfully created the email" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: "internal error" }, { status: 501 });
    }
}

export async function GET(request: Request) {
    try {
        const Email = await getEmailModel()
        const res = await Email.find().exec();
        return NextResponse.json({ data: res }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to process the blog post" }, { status: 500 });
    }
}