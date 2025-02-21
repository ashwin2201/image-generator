"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/constants'

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
        <div className="flex size-full flex-col gap-4">
            <Link href="/" className="sidebar-logo">
                <Image src="/assets/images/logo-text.png" alt="logo" width={180} height={28}></Image>
            </Link>
            <nav className="sidebar-nav">
              <ul className="sidebar-nav_elements">
                {navLinks.slice(0, 6).map((link) => {
                  const isActive = link.route === pathname;
                  return (
                    <li key={link.route} className={`sidebar-nav_element group ${
                      isActive ? 'bg-purple-700 text-white' : 'text-gray-700'
                    }`}>
                      <Link className="cursor-pointer sidebar-link" href = {link.route}>{link.label}</Link>
                    </li> 
                  ) 
                })
                }
              </ul>
              <ul className="sidebar-nav_elements">
                {navLinks.slice(6).map((link) => {
                  const isActive = link.route === pathname;
                  return (
                    <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-700 text-white' : 'text-gray-700'}`}>
                      <Link className="cursor-pointer sidebar-link" href = {link.route}>{link.label}</Link>
                    </li> 
                  ) 
                })
                }
              </ul>
            </nav>
            
        </div>
    </aside>
  )
}

export default Sidebar