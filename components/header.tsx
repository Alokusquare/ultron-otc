import Image from "next/image";
import logo from '../public/images/logo.png';
import { ConnectWallet } from "./ConnectWallet";
import { DashConncetwallet } from "./dashConncetwallet";
import { MobileConncetwallet } from "./MobileConncetwallet";

export default function Header() {
  return (
    <header className="p-4 border-b border-[#2a3042]">
      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between m-6">
        <div className="flex items-center gap-4 w-3/4">
          <Image src={logo} alt="Logo" width={100} height={40} />

          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-gray-400"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <input
              type="search"
              className="block w-full p-3 pl-10 text-sm text-white border rounded-full bg-[#1e2330] border-[#2a3042] focus:ring-[#22c55e] focus:border-[#22c55e] focus:outline-none"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span>Hi, Prime</span>
          <DashConncetwallet/>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col gap-4 items-start ">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="Logo" width={80} height={32} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white text-sm">Hi, Prime</span>
            <MobileConncetwallet/>
          </div>
        </div>

        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-gray-400"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <input
            type="search"
            className="block w-full p-3 pl-10 text-sm text-white border rounded-full bg-[#1e2330] border-[#2a3042] focus:ring-[#22c55e] focus:border-[#22c55e] focus:outline-none"
            placeholder="Search"
          />
        </div>
      </div>
    </header>
  );
}
