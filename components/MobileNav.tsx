"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

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

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center" asChild>
        <button
          className="flex justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
            <FontAwesomeIcon icon={faBars} className="text-base font-semibold text-grey-400" />
          
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col bg-white border-none shadow-none w-[280px] h-screen"
      >
        <SheetTitle className="text-madder mx-auto mt-5">
          Wiston & Co.
        </SheetTitle>

        <nav className="flex flex-col justify-center items-center gap-8 my-auto">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname && "text-gold font-semibold"
                } text-xl text-black capitalize hover:text-gold/50 ease-in duration-500`}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            );
          })}

        </nav>
        <div className="flex justify-center items-center mb-8">
          <Link href="/contact">
            <button className="px-4 py-2 bg-madder text-white rounded hover:bg-gold/70 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;