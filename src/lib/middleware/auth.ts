import { verifyToken } from "../utils/auth";
import { NextRequest, NextResponse } from "next/server";

export default function authMiddleware(req: NextRequest) {
    try {
        const authHeader = req.headers.get("Authorization");

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return NextResponse.json({ msg: "Unauthorized" }, { status: 401 });
        }

        const token = authHeader.split(" ")[1];
        const decoded = verifyToken(token);

        if (!decoded) {
            return NextResponse.json({ msg: "Invalid or expired token" }, { status: 403 });
        }

        // Token is valid, allow request to proceed
        return false;
    } catch (error) {
        console.error("Middleware Error:", error);
        return NextResponse.json({ msg: "Unauthorized" }, { status: 401 });
    }
}
