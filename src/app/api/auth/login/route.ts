import getUserSchema from "@/lib/models/User";
import { createToken, comparePassword } from "@/lib/utils/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ msg: "Email and password are required." }, { status: 400 });
        }

        const User = await getUserSchema();

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ msg: "Invalid email or password." }, { status: 401 });
        }

        // Check password validity
        const isValidPassword = await comparePassword(password, user.password);
        if (!isValidPassword) {
            return NextResponse.json({ msg: "Invalid email or password." }, { status: 401 });
        }

        // Generate JWT token
        const token = createToken({ email: user.email });

        return NextResponse.json(
            { msg: "Login successful.", token, user: { email: user.email } },
            { status: 200 }
        );
    } catch (error) {
        console.error("Login Error:", error);
        return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
    }
}
