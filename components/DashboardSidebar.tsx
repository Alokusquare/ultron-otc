// "use client"

// import * as React from "react"
// import { LayoutDashboard, RefreshCcw, Truck, Clock, User, Settings } from "lucide-react"
// import { cn } from "@/lib/utils"
// import { usePathname } from "next/navigation"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarMenuButton,
//   SidebarProvider,
// } from "@/components/ui/sidebar"

// interface NavItem {
//   icon: React.ElementType
//   label: string
//   href: string
// }

// const navItems: NavItem[] = [
//   {
//     icon: LayoutDashboard,
//     label: "Dashboard",
//     href: "/dashboard",
//   },
//   {
//     icon: RefreshCcw,
//     label: "Exchange",
//     href: "/exchange",
//   },
//   {
//     icon: Truck,
//     label: "Delivery",
//     href: "/delivery",
//   },
//   {
//     icon: Clock,
//     label: "History",
//     href: "/history",
//   },
//   {
//     icon: User,
//     label: "Profile",
//     href: "/profile",
//   },
//   {
//     icon: Settings,
//     label: "Settings",
//     href: "/settings",
//   },
// ]

// export function DashboardSidebar() {
//   const pathname = usePathname()

//   return (
//     <SidebarProvider>
//       <Sidebar className="fixed left-28 top-[60%] -translate-y-1/2 h-fit w-20 rounded-full border-0 shadow-none bg-transparent">
//         <div className="absolute inset-0 rounded-full bg-[#0f1114] border-0 shadow-[0_0_15px_rgba(72,255,130,0.5)] overflow-hidden">
//           <div className="absolute inset-0  rounded-full border border-[#48ff82]/30"></div>
//         </div>
//         <SidebarContent className="relative z-10 flex flex-col items-center justify-center h-full py-2 gap-2">
//           <SidebarMenu className="flex flex-col items-center gap-4 w-full">
//             {navItems.map((item) => {
//               const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
//               return (
//                 <SidebarMenuItem key={item.label} className="flex justify-center">
//                   <SidebarMenuButton
//                     asChild
//                     className={cn(
//                       "flex flex-col items-center justify-center gap-1 w-16 m-0 p-0 h-16 rounded-full hover:bg-transparent",
//                       isActive ? "text-black" : "text-white hover:text-[#48ff82]",
//                     )}
//                   >
//                     <a href={item.href} className="relative flex flex-col items-center">
//                       {isActive && (
//                         <div className="absolute inset-0 rounded-lg bg-[#48ff82] shadow-[0_0_10px_rgba(72,255,130,0.7)]"></div>
//                       )}
//                       <div
//                         className={cn(
//                           "relative z-10 flex flex-col items-center justify-center gap-1",
//                           isActive ? "text-black" : "text-white",
//                         )}
//                       >
//                         <item.icon className="w-5 h-5" />
//                         <span className="text-[8px] font-medium">{item.label}</span>
//                       </div>
//                     </a>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               )
//             })}
//           </SidebarMenu>
//         </SidebarContent>
//       </Sidebar>
//     </SidebarProvider>
//   )
// }


"use client"

import * as React from "react"
import { LayoutDashboard, RefreshCcw, Truck, Clock, User, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar"

interface NavItem {
  icon: React.ElementType
  label: string
  href: string
}

const navItems: NavItem[] = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: function ExchangeIcon() {
      return (
        <svg width="20" height="20" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.66663 18.4817H13.5" stroke="#F5F5F5" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.07159 14.625H11.095C13.0233 14.625 13.5 15.1017 13.5 17.0083V21.4608C13.5 23.3675 13.0233 23.8442 11.095 23.8442H5.07159C3.14326 23.8442 2.66663 23.3675 2.66663 21.4608V17.0083C2.66663 15.1017 3.14326 14.625 5.07159 14.625Z" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24.3333 16.25C24.3333 20.4425 20.9425 23.8333 16.75 23.8333L17.8875 21.9375" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2.66663 9.75002C2.66663 5.55752 6.05746 2.16669 10.25 2.16669L9.11247 4.06252" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20.5416 11.9167C23.234 11.9167 25.4166 9.73408 25.4166 7.04169C25.4166 4.3493 23.234 2.16669 20.5416 2.16669C17.8492 2.16669 15.6666 4.3493 15.6666 7.04169C15.6666 9.73408 17.8492 11.9167 20.5416 11.9167Z" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    label: "Exchange",
    href: "/exchange",
  },
  {
    icon: Truck,
    label: "Delivery",
    href: "/delivery",
  },
  {
    icon: Clock,
    label: "History",
    href: "/history",
  },
  {
    icon: User,
    label: "Profile",
    href: "/profile",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar className="fixed left-28 top-[60%] responsive_sidebar -translate-y-1/2 h-fit w-20 rounded-full border-0 shadow-none bg-transparent">
          <div className="absolute inset-0 rounded-full bg-[#0f1114] border-0 shadow-[0_0_15px_rgba(72,255,130,0.5)] overflow-hidden">
            <div className="absolute inset-0 rounded-full border border-[#48ff82]/30"></div>
          </div>
          <SidebarContent className="relative z-10 flex flex-col items-center justify-center h-full py-2 gap-2">
            <SidebarMenu className="flex flex-col items-center gap-4 w-full">
              {navItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
                return (
                  <SidebarMenuItem key={item.label} className="flex justify-center">
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "flex flex-col items-center justify-center gap-1 w-16 m-0 p-0 h-16 rounded-full hover:bg-transparent",
                        isActive ? "text-black" : "text-white hover:text-[#48ff82]",
                      )}
                    >
                      <a href={item.href} className="relative flex flex-col items-center">
                        {isActive && (
                          <div className="absolute inset-0 rounded-lg bg-[#48ff82] shadow-[0_0_10px_rgba(72,255,130,0.7)]"></div>
                        )}
                        <div
                          className={cn(
                            "relative z-10 flex flex-col items-center justify-center gap-1",
                            isActive ? "text-black" : "text-white",
                          )}
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="text-[8px] font-medium">{item.label}</span>
                        </div>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#2a3042]">
        <div className="relative w-full h-16">
          <div className="flex justify-around items-center h-full px-2">
            {navItems.slice(0, 5).map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "flex flex-col items-center justify-center gap-1 w-full h-full",
                    isActive ? "text-black" : "text-white hover:text-[#48ff82]",
                  )}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-[#152438]"></div>
                  )}
                  <div
                    className={cn(
                      "relative z-10 flex flex-col items-center justify-center gap-1",
                      isActive ? "text-[#3EFF8B]" : "text-white",
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className={`text-[8px] font-medium ${isActive ? "text-[#3EFF8B]" : "text-white"}`}>{item.label}</span>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}