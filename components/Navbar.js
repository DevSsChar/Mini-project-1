"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRef, useState } from 'react'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setshowdropdown] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <nav className='bg-black text-white flex flex-wrap justify-between px-4 py-3 sm:py-0 sm:h-16 items-center relative'>
      <div>
        <Link className="logo font-bold text-lg cursor-pointer flex justify-center items-center gap-1" href="/"> 
        <img src="/coffee.gif" width={34} alt="" referrerPolicy="no-referrer" />
        <span className="text-sm sm:text-lg">BuyMeATea</span>
        </Link>
      </div>
      
      {/* Mobile menu button */}
      <div className="sm:hidden">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Desktop and Mobile menu content */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:block w-full sm:w-auto mt-2 sm:mt-0`}>
        <div className='relative'>
          {session &&
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <button onClick={() => setshowdropdown(!showdropdown)} onBlur={()=>setTimeout(() => {
                setshowdropdown(false)
              }, 100)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 sm:px-5 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2 sm:mx-4 w-full sm:w-auto justify-center sm:justify-start">
                <span className="truncate max-w-[150px]">Welcome {session.user.email}</span>
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
                
              <div id="dropdown" className={`z-10 absolute left-0 sm:left-[125px] top-full sm:top-auto
                ${showdropdown ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full sm:w-44 dark:bg-gray-700`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                  </li>
                  <li>
                    <Link href={`${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                  </li>
                  <li>
                    <Link href="#" onClick={()=>signOut()} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                  </li>
                </ul>
              </div>
            
              <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 sm:px-5 py-2 text-center w-full sm:w-auto my-2 sm:my-0" onClick={() => { signOut() }}>
                Logout
              </button>
            </div>
          }
          
          {!session &&
            <Link href={"/login"} className="block w-full sm:w-auto">
              <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full sm:w-auto">
                Login
              </button>
            </Link>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar