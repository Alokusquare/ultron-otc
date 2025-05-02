"use client"

import Layout from "@/components/layout"
import { useState } from "react"
export default function Profile() {

  return (
    <Layout>
    <div className="min-h-screen text-white">
      <div className="flex justify-around">
        <main className="w-full  p-4 text-white ml-auto" style={{ maxWidth: "1200px" }}>
            <h1 className="text-2xl font-bold mb-6">Profile Overview</h1>
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left column */}
                <div className="md:col-span-2 space-y-6">
                {/* Profile Info */}
                <section className="rounded-2xl p-6 flex items-center justify-between profile_user" 
                    style={{ background: "linear-gradient(180deg, #11151A 0%, #202D41 100%), linear-gradient(0deg, rgba(245, 245, 245, 0.05), rgba(245, 245, 245, 0.05))" }}>
                    <div className="flex gap-4 items-center mb-6 relative">
                        <div className="bg-[#20262E] rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold border border-white-500">
                            P
                        </div>
                        <button className="text-sm border border-gray-500 rounded px-3 py-1 absolute -bottom-7 m-0">Upload</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm text-gray-400">Full Name</label>
                            <div className="bg-[#20262E] rounded px-3 py-2 flex justify-between items-center border border-white-500">
                                <input type="text" placeholder="Prime Paul" className="bg-transparent outline-none shadow-none" />
                            <button>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M9 11l3.536 3.536M14.121 9.879l-3.535 3.536M19.071 4.929a2.828 2.828 0 0 1 0 4l-9.193 9.193a2 2 0 0 1-1.414.586H5v-3.464a2 2 0 0 1 .586-1.414l9.193-9.193a2.828 2.828 0 0 1 4 0z" /></svg>
                            </button>
                            </div>
                        </div>
                        <div>
                            <label className="text-sm text-gray-400">Username</label>
                            <div className="bg-[#20262E] rounded px-3 py-2 flex justify-between items-center border border-white-500">
                            <input type="text" placeholder="Prime" className="bg-transparent outline-none shadow-none" />
                            <button>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M9 11l3.536 3.536M14.121 9.879l-3.535 3.536M19.071 4.929a2.828 2.828 0 0 1 0 4l-9.193 9.193a2 2 0 0 1-1.414.586H5v-3.464a2 2 0 0 1 .586-1.414l9.193-9.193a2.828 2.828 0 0 1 4 0z" /></svg>
                            </button>
                            </div>
                        </div>
                        <div>
                            <label className="text-sm text-gray-400">Email Address</label>
                            <div className="bg-[#20262E] rounded px-3 py-2 flex justify-between items-center border border-white-500">
                            <input type="text" placeholder="prime@gmail.com" className="bg-transparent outline-none shadow-none" />
                            <button>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M9 11l3.536 3.536M14.121 9.879l-3.535 3.536M19.071 4.929a2.828 2.828 0 0 1 0 4l-9.193 9.193a2 2 0 0 1-1.414.586H5v-3.464a2 2 0 0 1 .586-1.414l9.193-9.193a2.828 2.828 0 0 1 4 0z" /></svg>
                            </button>
                            </div>
                        </div>
                        <div>
                            <label className="text-sm text-gray-400">Phone number</label>
                            <div className="bg-[#20262E] rounded px-3 py-2 flex justify-between items-center border border-white-500">
                            <input type="text" placeholder="987345****" className="bg-transparent outline-none shadow-none" />
                            <button>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M9 11l3.536 3.536M14.121 9.879l-3.535 3.536M19.071 4.929a2.828 2.828 0 0 1 0 4l-9.193 9.193a2 2 0 0 1-1.414.586H5v-3.464a2 2 0 0 1 .586-1.414l9.193-9.193a2.828 2.828 0 0 1 4 0z" /></svg>
                            </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Preferences */}
                <section className="rounded-2xl p-6 space-y-4" 
                                    style={{ background: "linear-gradient(180deg, #11151A 0%, #202D41 100%), linear-gradient(0deg, rgba(245, 245, 245, 0.05), rgba(245, 245, 245, 0.05))" }}>

                
                    <h2 className="text-xl font-semibold mb-2">Preference</h2>
                    <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm font-medium">Account Settings</p>
                        <p className="text-xs text-gray-400">Currency, language, time zone</p>
                    </div>
                    <button>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M9 11l3.536 3.536M14.121 9.879l-3.535 3.536M19.071 4.929a2.828 2.828 0 0 1 0 4l-9.193 9.193a2 2 0 0 1-1.414.586H5v-3.464a2 2 0 0 1 .586-1.414l9.193-9.193a2.828 2.828 0 0 1 4 0z" /></svg>
                    </button>
                    </div>
                    <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm font-medium">Notifications</p>
                        <p className="text-xs text-gray-400">Manage your alert preferences</p>
                    </div>
                    <button>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M9 11l3.536 3.536M14.121 9.879l-3.535 3.536M19.071 4.929a2.828 2.828 0 0 1 0 4l-9.193 9.193a2 2 0 0 1-1.414.586H5v-3.464a2 2 0 0 1 .586-1.414l9.193-9.193a2.828 2.828 0 0 1 4 0z" /></svg>
                    </button>
                    </div>
                </section>

                {/* Security Settings */}
                <section className=" rounded-2xl p-6 space-y-4"                    style={{ background: "linear-gradient(180deg, #11151A 0%, #202D41 100%), linear-gradient(0deg, rgba(245, 245, 245, 0.05), rgba(245, 245, 245, 0.05))" }}>

                    <h2 className="text-xl font-semibold mb-2">Security Settings</h2>
                    <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm font-medium">Two-Factor Authentication</p>
                        <p className="text-xs text-green-400">Enabled</p>
                    </div>
                    <button className="bg-[#2E944D] px-3 py-1 rounded text-sm">Manage</button>
                    </div>
                    <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm font-medium">Password</p>
                        <p className="text-xs text-gray-400">Last changed 30 days ago</p>
                    </div>
                    <button>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M9 11l3.536 3.536M14.121 9.879l-3.535 3.536M19.071 4.929a2.828 2.828 0 0 1 0 4l-9.193 9.193a2 2 0 0 1-1.414.586H5v-3.464a2 2 0 0 1 .586-1.414l9.193-9.193a2.828 2.828 0 0 1 4 0z" /></svg>
                    </button>
                    </div>
                </section>
                </div>

                {/* Right column */}
                <div className="space-y-6">
                {/* Linked Accounts */}
                <section className=" rounded-2xl p-6 space-y-4"                    style={{ background: "linear-gradient(180deg, #11151A 0%, #202D41 100%), linear-gradient(0deg, rgba(245, 245, 245, 0.05), rgba(245, 245, 245, 0.05))" }}>

                    <h2 className="text-xl font-semibold mb-2">Linked Accounts</h2>
                    <div className="space-y-2">
                    {['Bank Accounts', 'Meta Mask', 'Crypto wallet'].map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                        <span>{item}</span>
                        <div className="flex gap-2">
                            <button>+</button>
                            <button>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M9 11l3.536 3.536M14.121 9.879l-3.535 3.536M19.071 4.929a2.828 2.828 0 0 1 0 4l-9.193 9.193a2 2 0 0 1-1.414.586H5v-3.464a2 2 0 0 1 .586-1.414l9.193-9.193a2.828 2.828 0 0 1 4 0z" /></svg>
                            </button>
                        </div>
                        </div>
                    ))}
                    </div>
                </section>

                {/* Delivery Details */}
                <section className=" rounded-2xl p-6 space-y-4"                    style={{ background: "linear-gradient(180deg, #11151A 0%, #202D41 100%), linear-gradient(0deg, rgba(245, 245, 245, 0.05), rgba(245, 245, 245, 0.05))" }}>

                    <h2 className="text-xl font-semibold mb-2">Delivery details</h2>
                    <div className="space-y-3">
                    <div>
                        <p className="text-xs text-gray-400">Preferred cash pick up method</p>
                        <div className="flex justify-between items-center">
                        <span className="text-green-400">Bank transfer</span>
                        <button>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M9 11l3.536 3.536M14.121 9.879l-3.535 3.536M19.071 4.929a2.828 2.828 0 0 1 0 4l-9.193 9.193a2 2 0 0 1-1.414.586H5v-3.464a2 2 0 0 1 .586-1.414l9.193-9.193a2.828 2.828 0 0 1 4 0z" /></svg>
                        </button>
                        </div>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400">Preferred cash conversion currency</p>
                        <div className="flex justify-between items-center">
                        <span className="text-green-400">AED</span>
                        <button>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M9 11l3.536 3.536M14.121 9.879l-3.535 3.536M19.071 4.929a2.828 2.828 0 0 1 0 4l-9.193 9.193a2 2 0 0 1-1.414.586H5v-3.464a2 2 0 0 1 .586-1.414l9.193-9.193a2.828 2.828 0 0 1 4 0z" /></svg>
                        </button>
                        </div>
                    </div>
                    </div>
                </section>

                {/* Save & Support Buttons */}
                <div className="flex justify-between items-center mt-4">
                    <button className="bg-[#5DF3A9] text-black px-6 py-2 rounded-full font-medium">Save Changes</button>
                    
                </div>
                </div>
            </div>
        </main>
      </div>

      
    </div>
    </Layout>
  )
}
