"use client"

import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image src="/logo.png" height={5} width={5} alt="logo"></Image>
      </Link>

      <nav className="flex gap-2">
        <Sheet>
          <SheetTrigger>
            <FontAwesomeIcon height={20} width={20} icon={faBars} />
          </SheetTrigger>
          <SheetContent className="sheet-content sm:w-64">
            <>
              <h1>Logo</h1>
              <ul className="header-nav_elements">
                {navLinks.map((link) => {
                  const isActive = link.route === pathname;
                  return (
                    <li key={link.route} className={`sidebar-nav_element group ${
                      isActive ? 'bg-purple-700 text-white' : 'text-gray-700'
                    }`}>
                      <Link className="sidebar-link cursor-pointer" href = {link.route}>{link.label}</Link>
                    </li> 
                  ) 
                })
                }
              </ul>
            </>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

export default MobileNav