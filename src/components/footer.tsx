"use client";
import React from "react";
import { useLanguage } from "@/components/language-provider";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      copyright: "Vigouroux. Tous droits réservés.",
      conditions: "Conditions générales de vente",
      privacy: "Politique de confidentialité",
      contact: "Contactez-nous",
    },
    nl: {
      copyright: "Vigouroux. Alle rechten voorbehouden.",
      conditions: "Algemene Verkoopsvoorwaarden",
      privacy: "Privacybeleid",
      contact: "Contacteer ons",
    },
  };

  const { copyright, conditions, privacy, contact } = content[language];

  return (
    <footer className="w-full bg-gradient-to-b from-[#F7F7FA] to-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FF6F3C] to-[#FF8F5C] bg-clip-text text-transparent">{contact}</h3>
            <div className="flex flex-col gap-6 text-[#232B3E]">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-white shadow-md group-hover:shadow-lg transition-all duration-300 ease-in-out">
                  <MdEmail className="text-[#FF6F3C] text-2xl" />
                </div>
                <span className="group-hover:text-[#FF6F3C] transition-colors duration-300 ease-in-out">vigouroux.geoffray@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-white shadow-md group-hover:shadow-lg transition-all duration-300 ease-in-out">
                  <MdPhone className="text-[#FF6F3C] text-2xl" />
                </div>
                <span className="group-hover:text-[#FF6F3C] transition-colors duration-300 ease-in-out">+32 476 68 20 36</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-white shadow-md group-hover:shadow-lg transition-all duration-300 ease-in-out">
                  <MdLocationOn className="text-[#FF6F3C] text-2xl" />
                </div>
                <span className="group-hover:text-[#FF6F3C] transition-colors duration-300 ease-in-out">Maasdai 167, 1502 Halle, Belgique</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FF6F3C] to-[#FF8F5C] bg-clip-text text-transparent">
              {language === 'fr' ? 'Liens utiles' : 'Handige links'}
            </h3>
            <nav className="flex flex-col gap-4">
              <a href="/conditions" className="text-[#232B3E] hover:text-[#FF6F3C] transition-colors duration-300 ease-in-out">
                {conditions}
              </a>
              <a href="/policy" className="text-[#232B3E] hover:text-[#FF6F3C] transition-colors duration-300 ease-in-out">
                {privacy}
              </a>
            </nav>
          </div>
        </div>
        <div className="border-t border-[#E5E7EB] pt-8">
          <p className="text-center text-[#232B3E]">
            &copy; {new Date().getFullYear()} {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;