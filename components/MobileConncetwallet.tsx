'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Button } from '@/components/ui/button'
import { useDisconnect } from 'wagmi'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function MobileConncetwallet() {
  const { disconnect } = useDisconnect()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted
        const connected = ready && account && chain

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button onClick={openConnectModal}>
                     <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.55 16.9375C22.025 17.45 21.725 18.1875 21.8 18.975C21.9125 20.325 23.15 21.3125 24.5 21.3125H26.875V22.8C26.875 25.3875 24.7625 27.5 22.175 27.5H7.825C5.2375 27.5 3.125 25.3875 3.125 22.8V14.3875C3.125 11.8 5.2375 9.6875 7.825 9.6875H22.175C24.7625 9.6875 26.875 11.8 26.875 14.3875V16.1875H24.35C23.65 16.1875 23.0125 16.4625 22.55 16.9375Z" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3.125 15.5125V9.80005C3.125 8.31255 4.0375 6.9875 5.425 6.4625L15.35 2.7125C16.9 2.125 18.5625 3.27504 18.5625 4.93754V9.68752" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M28.1985 17.4627V20.0378C28.1985 20.7253 27.6485 21.2877 26.9485 21.3127H24.4985C23.1485 21.3127 21.911 20.3252 21.7985 18.9752C21.7235 18.1877 22.0235 17.4502 22.5485 16.9377C23.011 16.4627 23.6485 16.1877 24.3485 16.1877H26.9485C27.6485 16.2127 28.1985 16.7752 28.1985 17.4627Z" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.75 15H17.5" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                  </button>
                )
              }

              if (chain.unsupported) {
                return (
                  <Button
                    onClick={openChainModal}
                    className="bg-red-500 hover:bg-red-600 text-white font-medium rounded-full"
                  >
                    Wrong network
                  </Button>
                )
              }

              return (
                <div className="relative">
                  <Button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-green-400 hover:bg-green-500 text-black font-medium rounded-full flex items-center gap-2 max-w-[200px] sm:max-w-none"
                  >
                    <span className="truncate">{account.displayName}</span>
                    <ChevronDown size={16} />
                  </Button>

                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 sm:w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <div className="px-4 py-2 text-sm text-gray-700 border-b">
                        {chain.name}
                      </div>
                      <button
                        onClick={() => {
                          disconnect()
                          setIsOpen(false)
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        Disconnect
                      </button>
                    </div>
                  )}
                </div>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
} 