"use client";

import { useState } from "react";
import Image from 'next/image';

import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import Link from "next/link";




export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <> <div className="p-5">
        <div className="flex justify-between  ">
    
    <Link href="/"><Image src="/assets/logo.png" width={180} className='block h-9 sm:w-220 w-[120px]' height={10} alt="Logo" /></Link>
    <button className='h-7 flex bg-black text-slate-50 items-center py-5 px-6 gap-2 border border-solid border-black shadow-[-7px_7px_0px_#2b2929]'>Get Started</button>
  </div>
        </div>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600">
          <div
              className="bg-white p-8 rounded-xl shadow-xl w-96 transition-all duration-500 transform"
          >
              <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                  {isLogin ? "Login" : "Sign Up"}
              </h2>

              <div className={`transition-opacity duration-500 ${isLogin ? "opacity-100" : "opacity-0 hidden"}`}>
                  {isLogin && <Login />}
              </div>

              <div className={`transition-opacity duration-500 ${!isLogin ? "opacity-100" : "opacity-0 hidden"}`}>
                  {!isLogin && <Signup />}
              </div>

              <div className="mt-4 text-center">
                  <p className="text-gray-600 text-sm">
                      {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                      <button
                          className="text-indigo-500 hover:text-indigo-600 font-medium transition-all"
                          onClick={() => setIsLogin(!isLogin)}
                      >
                          {isLogin ? "Sign Up" : "Login"}
                      </button>
                  </p>
              </div>
          </div>
      </div></>
  );
}
