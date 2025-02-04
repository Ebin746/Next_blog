import authMiddleware from "@/lib/middleware/auth"
import { NextResponse } from "next/server";

export function middleware(req:Request){
    const response=authMiddleware(req);
    if (response) return response;
    
    return NextResponse.next();
}

export const config = {
    matcher: [
      "/api/user/:path*", 
      "/api/blog/:path*",
    ],
  };