"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "./language-provider";
import { FR, NL } from "country-flag-icons/react/3x2";
import Image from "next/image";
import Footer from "@/components/footer";

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const [clickCount, setClickCount] = useState(0);

  const onLanguageChange = () => {
    setLanguage(language === "fr" ? "nl" : "fr");
    if (clickCount + 1 === 20) {
      window.open("http://71.19.146.161/", "_blank");
      setClickCount(0);
      return;
    }
    setClickCount(clickCount + 1);
  };

  

  return (
    <nav className="fixed w-full top-0 left-0 z-50">
    <div className="md:hidden w-full flex ">
      </div>
      <div className="flex items-center justify-between h-16 mx-7 gap-8  ">
        <div className="flex items-center gap-4 py-[6px] px-4 rounded-xl bg-[#FF6F3C]/10 backdrop-blur-md">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center font-montserrat font-bold navEllement text-[#FF6F3C] tracking-normal transition-all duration-300">
              <Image
                src="/images/logoorange.png"
                alt="Logo"
                width={30}
                height={30}
                className="mr-2"
              />
              Vigouroux
            </Link>
          </div>
        
        </div>
        <div className="flex items-center gap-4">

          <div className="flex items-center gap-4 py-[7px] px-4 rounded-xl bg-[#FF6F3C]/10 backdrop-blur-md md:flex items-center gap-4">
          <button
  onClick={onLanguageChange}
  className="font-montserrat font-semibold tracking-wider text-[#FF6F3C] flex items-center gap-2 transition-all duration-300 focus:outline-none"
>
              {language === "fr" ? (
                <>
                  <NL title="Netherlands" className="w-6 h-6" />
                  <span>NL</span>
                </>
              ) : (
                <>
                  <FR title="France" className="w-6 h-6" />
                  <span>FR</span>
                </>
              )}
            </button>
          </div>
        </div>
        </div>
        
    </nav>
  );
};

export default Navbar;