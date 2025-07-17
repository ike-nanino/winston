"use client"

import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation"




const links = [
    {
        name: 'HOME',
        path: '/',
    },
    {
        name: 'ABOUT',
        path: '/about',
    },
    {
        name: 'PRACTICE AREAS',
        path: '/practice-areas',
    },
    {
        name: 'ATTORNEYS',
        path: '/attorneys',
    },
    {
        name: 'PERSPECTIVES',
        path: '/perspectives',
    }, 
    
]



function Navbar() {
    const pathname = usePathname();
  return (
   <nav className="flex gap-8 text-xl">
    
    {
        links.map((link, index) => {
        return (
            <Link 
            key={index} 
            href={link.path}
            className={`${link.path === pathname && 'text-madder font-trajanPro font-regular text-sm'} capitalize hover:text-madder font-trajanPro text-xs ease-in duration-500`}
            prefetch={true}
            >{link.name}</Link>
        )
  
    })
   }</nav>
  )
}

export default Navbar