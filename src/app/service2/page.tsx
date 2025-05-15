"use client";
import { useLanguage } from "@/components/language-provider";
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaPhone, FaMapMarkerAlt, FaAt } from "react-icons/fa";

export default function Service2Page() {
  const { language } = useLanguage();
  const content = {
    fr: {
      title: "Gouttières",
      desc: "Nous assurons l'installation et la maintenance de systèmes de gouttières efficaces pour protéger votre propriété contre les dommages causés par l'eau. Nos solutions sur mesure garantissent une gestion optimale des eaux pluviales et une longévité accrue de votre toiture.",
      back: "Retour aux services",
      image: "/images/vicer.png",
      form: {
        title: "demande de devis gratuit :",
        name: "nom",
        firstname: "prénom",
        email: "Email",
        phone: "nr de téléphone",
        address: "adresse",
        send: "terminer",
      },
    },
    nl: {
      title: "Dakgoten",
      desc: "Wij zorgen voor de installatie en het onderhoud van efficiënte dakgootsystemen om uw eigendom te beschermen tegen waterschade. Onze oplossingen op maat zorgen voor een optimale afvoer van regenwater en een langere levensduur van uw dak.",
      back: "Terug naar diensten",
      image: "/images/solar-panel-installation.jpg",
      form: {
        title: "gratis offerte aanvragen :",
        name: "naam",
        firstname: "voornaam",
        email: "E-mail",
        phone: "telefoonnummer",
        address: "adres",
        send: "voltooien",
      },
    },
  };
  const t = content[language];
  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <Image src={t.image} alt={t.title} width={320} height={180} className="rounded-lg mb-8 object-cover w-full h-48" />
        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#FF6F3C] to-[#FF8F5C] bg-clip-text text-transparent text-center">{t.title}</h1>
        <p className="text-gray-700 text-lg mb-8 text-justify">{t.desc}</p>
        <Link href="/#services" className="self-center mb-16">
          <button className="group inline-flex items-center gap-2 bg-[#FF6F3C]/20 hover:bg-[#FF6F3C]/20 text-white px-6 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 shadow-md font-semibold">
            {t.back}
          </button>
        </Link>
        <div className="w-full">
          <div className="bg-white border border-gray-100 rounded-lg p-8 md:p-12 flex flex-col w-full">
            <h2 className="text-2xl font-semibold mb-8 text-gray-800">{t.form.title}</h2>
            <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={e => e.preventDefault()}>
              <div className="flex flex-col gap-4">
                <label className="text-gray-700 text-base mb-1">{t.form.name}</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF6F3C] text-lg" />
                  <input className="pl-10 pr-4 py-3 rounded-lg w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 outline-none focus:border-[#FF6F3C] focus:ring-1 focus:ring-[#FF6F3C]/20" placeholder={t.form.name} required />
                </div>
                <label className="text-gray-700 text-base mb-1">{t.form.firstname}</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF6F3C] text-lg" />
                  <input className="pl-10 pr-4 py-3 rounded-lg w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 outline-none focus:border-[#FF6F3C] focus:ring-1 focus:ring-[#FF6F3C]/20" placeholder={t.form.firstname} required />
                </div>
                <label className="text-gray-700 text-base mb-1">{t.form.email}</label>
                <div className="relative">
                  <FaAt className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF6F3C] text-lg" />
                  <input className="pl-10 pr-4 py-3 rounded-lg w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 outline-none focus:border-[#FF6F3C] focus:ring-1 focus:ring-[#FF6F3C]/20" placeholder={t.form.email} type="email" required />
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-end">
                <label className="text-gray-700 text-base mb-1">{t.form.phone}</label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF6F3C] text-lg" />
                  <input className="pl-10 pr-4 py-3 rounded-lg w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 outline-none focus:border-[#FF6F3C] focus:ring-1 focus:ring-[#FF6F3C]/20" placeholder={t.form.phone} required />
                </div>
                <label className="text-gray-700 text-base mb-1">{t.form.address}</label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF6F3C] text-lg" />
                  <input className="pl-10 pr-4 py-3 rounded-lg w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 outline-none focus:border-[#FF6F3C] focus:ring-1 focus:ring-[#FF6F3C]/20" placeholder={t.form.address} required />
                </div>
                <button type="submit" className="mt-6 w-full flex items-center justify-center gap-2 bg-[#FF6F3C] text-white text-lg font-semibold rounded-lg py-3 transition-all duration-300 hover:bg-[#FF8F5C]">
                  {t.form.send}
                  <svg width="32" height="20" viewBox="0 0 46 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.8462H45.5M45.5 13.8462C38.9733 13.5897 25.9198 10.4615 25.9198 0M45.5 13.8462C38.9733 14.1026 25.9198 16.9231 25.9198 26.1538" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 