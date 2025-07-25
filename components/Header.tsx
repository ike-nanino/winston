import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import MobileNav from "./MobileNav";
import PhoneTab from "./PhoneTab";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-card-foreground p-4 text-white sticky top-0 left-0 right-0 z-50 h-16 lg:h-20">
      <div className="lg:hidden flex items-center justify-between">
        <MobileNav />
        

        <Image
          src="/images/winston&co.png"
          width={120}
          height={30}
          alt="logo"
          className="object-cover mr-4"
        />

        <PhoneTab />
      </div>
      <div className="lg:flex items-center justify-between hidden ">
        <div className="flex items-center justify-between flex-1 mr-14">

          <div className="flex items-center">

             <Image
            src="/images/winston2i.png"
            width={42}
            height={42}
            alt="logo"
            className="object-cover mr-3"
          />
          <Image
            src="/images/winston&co.png"
            width={160}
            height={42}
            alt="logo"
            className="object-cover mr-16"
          />

          </div>
         

          <div className="hidden lg:flex">
            <Navbar />
          </div>
        </div>

        <div className="bg-madder hidden lg:flex p-2 mr-2 cursor-pointer font-trajanPro text-xs">
          <Link href="/contact">
          
          CONTACT
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;