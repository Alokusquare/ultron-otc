"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import AuthLayout from '../../components/AuthLayout';
import { Globe } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <AuthLayout>
      <div className="space-y-6 ">
        <h2 className="text-xl text-white font-medium text-center">Login with:</h2>
        
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-white">Username or email</label>
            <div className="relative">
              <input
                type="text"
                id="email"
                placeholder="Username or email"
                className="w-full bg-[#FFFFFF14] border-1 border-[#FFFFFF0F] text-sm  text-gray-300 rounded-md p-2 pl-10 focus:ring-1 focus:ring-green-400 focus:outline-none"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="block text-white">Password</label>
              <a href="#" className="text-green-400 text-sm">Forgot Password?</a>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                className="w-full bg-[#FFFFFF14] border-1 border-[#FFFFFF0F]  text-gray-300 text-sm rounded-lg p-2 pl-10 focus:ring-1 focus:ring-green-400 focus:outline-none"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <button
                type="button"
                className="absolute right-3 top-3.5 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 bg-[#FFFFFF14] border-1 border-[#FFFFFF0F]  rounded border-gray-600 focus:ring-0 text-green-400"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-white">Remember Me</label>
          </div>
          
          <button
            type="submit"
            className="w-full bg-green-400 hover:bg-green-500 text-gray-900 font-medium rounded-md p-3 transition-colors"
          >
            Log In
          </button>
        </form>
        
        <div className="text-center text-sm text-white">
          <span>Do not have an account? </span>
          <Link href="/signup" className="text-green-400">Sign Up</Link>
        </div>
        
        <div className="flex justify-center space-x-4 text-xs text-gray-400 mt-4">
          <a href="#" className="hover:text-white">Terms</a>
          <span>•</span>
          <a href="#" className="hover:text-white">Privacy</a>
          <span>•</span>
          <a href="#" className="hover:text-white">Docs</a>
          <span>•</span>
          <a href="#" className="hover:text-white">Helps</a>
        </div>
        
        <div className="flex justify-center items-center text-xs text-gray-400">
          <Globe size={16} className="mr-2" />
          <span>English</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </div>
      </div>
    </AuthLayout>
  );
}
