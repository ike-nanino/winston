import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import MobileNav from "./MobileNav";
import PhoneTab from "./PhoneTab";

function Header() {
  return (
    <header className="bg-card-foreground text-white p-4 sticky top-0 left-0 right-0 z-50 h-16 lg:h-20">
      <div className="lg:hidden flex items-center justify-between">
        <MobileNav />

        <Image
          src="/images/winston&co.png"
          width={120}
          height={120}
          alt="logo"
          className="object-cover mr-4"
        />

        <PhoneTab />
      </div>
      <div className="lg:flex items-center justify-between hidden ">
        <div className="flex items-center justify-center">
          <Image
            src="/images/winston&co.png"
            width={160}
            height={160}
            alt="logo"
            className="object-cover mr-16"
          />

          <div className="hidden lg:flex">
            <Navbar />
          </div>
        </div>

        <div className="bg-madder hidden lg:flex p-2 mr-2 cursor-pointer font-trajanPro text-xs">
          CONTACT
        </div>
      </div>
    </header>
  );
}

export default Header;