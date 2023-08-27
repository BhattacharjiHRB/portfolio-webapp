"use client"

import React from "react";
import Link from "next/link";


export default function Navbar() {
    return(
       <header className="flex flex-col relative w-full h-48 bg-gradient-to-r from-emerald-700 to-gray-950">
          <div className="flex flex-col justify-between h-full p-8  z-10">
              <nav className="flex flex-row gap-5 text-right justify-end items-end">
               
                    <Link
                        href=""
                        className='px-5 py-2 hover:text-red-700 '> About Me 
                    </Link>
                    <Link
                        href="#skill"
                        className='px-5 py-2 hover:text-red-700 '> Skills 
                    </Link>
                    <Link
                        href=""
                        className='px-5 py-2 hover:text-red-700 '> My Projects
                    </Link>
                    <Link
                        href={'/contactme'}
                        className='px-5 py-2 hover:text-red-700 '> Contact Me 
                    </Link>
              
              </nav>
              <Link href={'/'}>
                    <h1 className="text text-black font-dislay font-semibold tracking-wide px-3"> HRBNeo </h1>
              </Link>
          </div>
       </header>
    )
}