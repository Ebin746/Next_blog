import getUserSchema from "@/lib/models/User";
import { createToken, hashPassword } from "@/lib/utils/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json(); // Use req.json() instead of req.body

    if (!email || !password) {
      return NextResponse.json({ msg: "Email and password are required." }, { status: 400 });
    }

    const User = await getUserSchema();
    
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ msg: "Email already in use." }, { status: 409 });
    }

    // Hash password before saving
    const hashedPassword = await hashPassword(password);

    // Create new user
    const newUser = await User.create({ email, password: hashedPassword });

    // Generate JWT token
    const token = await createToken({ email: newUser.email });

    return NextResponse.json(
      { msg: "User registered successfully.", token, user: { email: newUser.email } },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
  }
}
