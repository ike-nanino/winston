"use client";


import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;



function PhoneTab() {
  const [isOpen, setIsOpen] = useState(false);


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
            <FontAwesomeIcon icon={faPhone} className="text-base font-semibold text-grey-400" />
          
        </button>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="flex flex-col  border-none shadow-none w-screen h-36"
      >
        <SheetTitle className="sr-only">
          
        </SheetTitle>

        <div className="flex flex-col justify-center text-madder items-center mt-15 gap-8 text-gold font-semibold " onClick={handleLinkClick}>
        <a href="tel:+19292667028">(929) 266 7028</a>
        </div>

    
      </SheetContent>
    </Sheet>
  );
}

export default PhoneTab;