'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Globe } from 'lucide-react';
import AuthLayout from '../../components/AuthLayout';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { ConnectWallet } from '@/components/ConnectWallet';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const connectWallet = async (type: 'walletconnect' | 'coinbase') => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            1: 'https://mainnet.infura.io/v3/YOUR_INFURA_ID',
          },
        },
      },
      coinbasewallet: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            1: 'https://mainnet.infura.io/v3/YOUR_INFURA_ID',
          },
          appName: 'YourAppName',
        },
      },
    };

    const web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions,
    });

    try {
      const instance = await web3Modal.connectTo(
        type === 'walletconnect' ? 'walletconnect' : 'coinbasewallet'
      );
      const ethersProvider = new ethers.providers.Web3Provider(instance);
      const signer = ethersProvider.getSigner();
      const address = await signer.getAddress();
      console.log(`Connected with ${type}:`, address);
    } catch (error) {
      console.error(`Error connecting with ${type}:`, error);
    }
  };

  return (
    <AuthLayout>
      <div className="space-y-6">
        <h2 className="text-xl text-white font-medium text-center">Sign Up with :</h2>

        <div className="grid grid-cols-3 gap-2">
          <ConnectWallet />
          <button
            onClick={() => connectWallet('walletconnect')}
            className="flex items-center justify-center bg-[#FFFFFF14] hover:bg-green-950 text-sm text-white rounded-md py-2 px-3 transition-colors"
          >
            <img src="/images/wallet.png" alt="WalletConnect" className="w-5 h-5 mr-0" />
            <span>Walletconnect</span>
          </button>
          <button
            onClick={() => connectWallet('coinbase')}
            className="flex items-center gap-2 justify-center bg-[#FFFFFF14] hover:bg-green-950 text-sm text-white rounded-md py-2 px-3 transition-colors"
          >
            <img src="/images/coinbase.png" alt="Coinbase" className="w-5 h-5 " />
            <span>Coinbase</span>
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-green-950/80 text-gray-400">Or</span>
          </div>
        </div>

        {/* FORM START */}
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* First Name */}
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-white">First Name</label>
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="w-full bg-[#FFFFFF14] text-sm text-gray-300 rounded-md p-2 pl-10 focus:ring-1 focus:ring-green-400 focus:outline-none"
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-white">Last Name</label>
              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="w-full bg-[#FFFFFF14] text-sm text-gray-300 rounded-md p-2 pl-10 focus:ring-1 focus:ring-green-400 focus:outline-none"
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Username */}
          <div className="space-y-2">
            <label htmlFor="username" className="block text-white">Username</label>
            <div className="relative">
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="w-full bg-[#FFFFFF14] text-sm text-gray-300 rounded-md p-2 pl-10 focus:ring-1 focus:ring-green-400 focus:outline-none"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-white">Email</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full bg-[#FFFFFF14] text-sm text-gray-300 rounded-md p-2 pl-10 focus:ring-1 focus:ring-green-400 focus:outline-none"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-white">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                className="w-full bg-[#FFFFFF14] text-sm text-gray-300 rounded-md p-2 pl-10 focus:ring-1 focus:ring-green-400 focus:outline-none"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <p className="text-xs text-gray-400">Minimum length is 8 characters.</p>
          </div>

          {/* Terms */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agree"
              className="w-4 h-4 bg-[#FFFFFF14] border-1 border-[#FFFFFF0F] rounded border-gray-600 focus:ring-0 text-green-400"
            />
            <label htmlFor="agree" className="ml-2 text-xs text-gray-400">By creating an account, you agree to the Terms of Service.</label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-400 hover:bg-green-500 text-sm text-gray-900 font-medium rounded-lg p-2 transition-colors"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-sm text-white">
          <span>Already have an account? </span>
          <Link href="/login" className="text-green-400">Login</Link>
        </div>

        <div className="flex justify-center space-x-4 text-xs text-gray-400 mt-4">
          <a href="#" className="hover:text-white">Terms</a>
          <span>•</span>
          <a href="#" className="hover:text-white">Privacy</a>
          <span>•</span>
          <a href="#" className="hover:text-white">Docs</a>
          <span>•</span>
          <a href="#" className="hover:text-white">Help</a>
        </div>

        <div className="flex justify-center items-center text-xs text-gray-400">
          <Globe size={16} className="mr-2" />
          <span>English</span>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </div>
      </div>
    </AuthLayout>
  );
}
