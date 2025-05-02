import Image from 'next/image';
import React, { ReactNode } from 'react';
import logo from "@/public/images/logo.svg"

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col  bg-grid-pattern">
      {/* Header with Logo */}
      <header className="p-4 md:px-8 md:py-6">
        <div className="flex items-center">
           <Image src={logo} alt="Logo" className="h-16 w-auto" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-start md:flex-row">
        {/* Left Side - Promotional Content */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-8 text-green-400">
          <div className="md:mt-[5rem]">
            <h1 className="text-3xl md:text-[36px] font-medium mb-4 text-center leading-[3rem]">Midnight Cash for Your Crypto. <br /> No Questions Asked.</h1>
            
            <div className="space-y-6 flex justify-center flex-col mt-8 md:mt-[7rem] text-white items-center">
              <div className="flex items-center space-x-3 ">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-lg">Military-Grade Security</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-lg">Lightning-Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-lg">Multiple Crypto System</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Auth Form */}
        <div className="flex-1 flex items-center mb-5 w-full justify-center px-6 py-8">
          <div className="w-full md:max-w-md max-w-full  custom-radial-gradient border border-green-400 rounded-xl p-6 md:p-8" style={{ maxWidth: '500px' }}>
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
