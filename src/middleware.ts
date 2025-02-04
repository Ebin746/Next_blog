import authMiddleware from "@/lib/middleware/auth";
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log("Middleware triggered");

  const response = authMiddleware(req);
  
  if (response) {
    console.log("Unauthorized response sent from middleware");
    return response;
  }

  console.log("Token is valid, continuing request flow");
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // Apply middleware only to routes under `/user`
};