"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "@/components/language-provider";
import Footer from "@/components/footer";
import React from "react";
import Image from "next/image";
import ServiceCard from "@/components/service-card";
import Navbar from "@/components/navbar";

interface Content {
  header1: string;
  header2: string;
  learnMore: string;
  ourServices: string;
  descriptionRoofing: string;
  descriptionRenovation: string;
  available: string;
  roofingPrice: string;
  renovationPrice: string;
  service: string;
  professional: string;
}

const translations = {
  fr: {
    heroHeadline: "Votre spécialiste de la toiture en Belgique",
    heroCta: "demander un devis gratuit",
    servicesTitle: "Nos services :",
    service1Title: "Votre toit de A à Z",
    service1Desc: "nous nous occupons de tout votre toit de A à Z que ce soit toiture, isolation, zinguerie et peut être même panneaux solaire",
    service2Title: "pose de panneaux solaire",
    service2Desc: "nous nous occupons de placer vos panneaux solaires et de les brancher à votre onduleur dans l'objectif de rentabiliser votre toit",
    service3Title: "Isolation de la toiture",
    service3Desc: "nous plaçons l'isolation dans votre toiture pour limiter la dissipation de la chaleur",
    learnMore: "En savoir plus",
    contactInfoTitle: "Informations de contact",
    contactEmail: "vigouroux.geoffray@gmail.com",
    contactPhone: "+32 476 68 20 36",
    contactAddress: "Maasdai 167, 1502 Halle, Belgique",
    contactFormTitle: "Contact",
    formName: "Nom",
    formEmail: "Email",
    formMessage: "Message",
    formSend: "Envoyer",
  },
  nl: {
    heroHeadline: "Uw dakspecialist in België",
    heroCta: "gratis offerte aanvragen",
    servicesTitle: "Onze diensten:",
    service1Title: "Uw dak van A tot Z",
    service1Desc: "wij zorgen voor uw hele dak van A tot Z, inclusief dakbedekking, isolatie, zinkwerk en eventueel zelfs zonnepanelen",
    service2Title: "plaatsing van zonnepanelen",
    service2Desc: "wij plaatsen uw zonnepanelen en sluiten ze aan op uw omvormer om uw dak rendabel te maken",
    service3Title: "Dakisolatie",
    service3Desc: "wij plaatsen isolatie in uw dak om warmteverlies te beperken",
    learnMore: "Meer weten",
    contactInfoTitle: "Contactinformatie",
    contactEmail: "vigouroux.geoffray@gmail.com",
    contactPhone: "+32 476 68 20 36",
    contactAddress: "Maasdai 167, 1502 Halle, België",
    contactFormTitle: "Contact",
    formName: "Naam",
    formEmail: "E-mail",
    formMessage: "Bericht",
    formSend: "Verzenden",
  },
};

function HomeDesktop({ content }: { content: Content }) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-white min-h-screen w-full">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-white" style={{backgroundImage: 'url(/images/fond1.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 flex flex-col items-center w-full pt-24 pb-16">
          <div className="flex flex-col items-center mb-8">
            <div className="flex flex-col items-center mb-4">
              <Image
                src={language === 'fr' ? '/images/depuis50ans.png' : '/images/sinds50jaar.png'}
                alt={language === 'fr' ? 'depuis 50 ans' : 'sinds 50 jaar'}
                width={320}
                height={240}
                className="mb-24"
                priority
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-center leading-tight mb-6">
              {language === 'fr' ? (
                <>
                  Votre spécialiste de la toiture<br />en Belgique
                </>
              ) : (
                <>
                  Uw dakspecialist<br />in België
                </>
              )}
            </h1>
            <a href="#contact" className="mt-4">
              <button className="font-montserrat p-[6px] rounded-xl text-lg font-semibold tracking-wider text-[#FF6F3C] px-2 flex items-center gap-2 bg-transparent border-none hover:text-[#3A506B] focus:outline-none bg-gray backdrop-blur-md">
                {t.heroCta}
                <svg width="32" height="20" viewBox="0 0 46 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 13.8462H45.5M45.5 13.8462C38.9733 13.5897 25.9198 10.4615 25.9198 0M45.5 13.8462C38.9733 14.1026 25.9198 16.9231 25.9198 26.1538" stroke="#FF6F3C" strokeWidth="2" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 px-2 md:px-0 bg-[#F7F7FA]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-[#FF6F3C] mb-12">{t.servicesTitle}</h2>
          <ServiceCard
            image="/images/roof-installation.jpg"
            alt={t.service1Title}
            title={t.service1Title}
            description={t.service1Desc}
            buttonText={t.learnMore}
            scrollTarget="service-1"
            buttonClassName="font-montserrat text-lg font-semibold tracking-wider text-[#FF6F3C] bg-gray backdrop-blur-md rounded-xl p-[6px] px-2 flex items-center gap-2 hover:text-[#3A506B] transition-colors duration-200"
          />
          <ServiceCard
            image="/images/solar-panel-installation.jpg"
            alt={t.service2Title}
            title={t.service2Title}
            description={t.service2Desc}
            buttonText={t.learnMore}
            scrollTarget="service-2"
            buttonClassName="font-montserrat text-lg font-semibold tracking-wider text-[#FF6F3C] bg-gray backdrop-blur-md rounded-xl p-[6px] px-2 flex items-center gap-2 hover:text-[#3A506B] transition-colors duration-200"
          />
          <ServiceCard
            image="/images/insulation1.jpg"
            alt={t.service3Title}
            title={t.service3Title}
            description={t.service3Desc}
            buttonText={t.learnMore}
            scrollTarget="service-3"
            buttonClassName="font-montserrat text-lg font-semibold tracking-wider text-[#FF6F3C] bg-gray backdrop-blur-md rounded-xl p-[6px] px-2 flex items-center gap-2 hover:text-[#3A506B] transition-colors duration-200"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-16 bg-[#F7F7FA]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-white rounded-md p-8 text-[#232B3E] flex flex-col justify-center min-h-[320px] border border-[#E5E7EB]">
            <h3 className="text-2xl font-bold mb-4">{t.contactInfoTitle}</h3>
            <div className="flex flex-col gap-4 text-lg">
              <span>{t.contactEmail}</span>
              <span>{t.contactPhone}</span>
              <span>{t.contactAddress}</span>
            </div>
          </div>
          <form className="flex-1 bg-white rounded-md p-8 flex flex-col gap-4 min-h-[320px] border border-[#E5E7EB]" onSubmit={e => e.preventDefault()}>
            <h3 className="text-2xl font-bold text-[#232B3E] mb-4">{t.contactFormTitle}</h3>
            <input className="rounded px-4 py-3 text-black placeholder-gray-500 border border-[#E5E7EB]" placeholder={t.formName} required />
            <input className="rounded px-4 py-3 text-black placeholder-gray-500 border border-[#E5E7EB]" placeholder={t.formEmail} type="email" required />
            <textarea className="rounded px-4 py-3 text-black placeholder-gray-500 border border-[#E5E7EB]" placeholder={t.formMessage} rows={4} required />
            <button type="submit" className="font-montserrat text-lg font-semibold tracking-wider text-[#FF6F3C] bg-gray backdrop-blur-md rounded-xl p-[6px] px-2 flex items-center gap-2 mt-2 self-end hover:text-[#3A506B] transition-colors duration-200">
              {t.formSend}
              <svg width="24" height="16" viewBox="0 0 46 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 13.8462H45.5M45.5 13.8462C38.9733 13.5897 25.9198 10.4615 25.9198 0M45.5 13.8462C38.9733 14.1026 25.9198 16.9231 25.9198 26.1538" stroke="#FF6F3C" strokeWidth="2" />
              </svg>
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function HomeMobile({ content }: { content: Content }) {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Section 1 */}
      <section className="h-screen w-full snap-start relative">
        <div className="absolute bottom-[22vh] left-[5vw] text-white text-[5vh] z-10">
          <h2>{content.header1}</h2>
          <h2>{content.header2}</h2>
          <a href="#services">
            <button className="text-[2vh]">
              <div className="flex flex-row items-center bg-white/80 gap-4 p-3 rounded-[5px]">
                <p className="text-[#4018FF] font-[montserrat] font-semibold">{content.learnMore}</p>
                <svg width="30" height="23" viewBox="0 0 46 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 13.8462H45.5M45.5 13.8462C38.9733 13.5897 25.9198 10.4615 25.9198 0M45.5 13.8462C38.9733 14.1026 25.9198 16.9231 25.9198 26.1538" stroke="#4018FF" strokeWidth="2" />
                </svg>
              </div>
            </button>
          </a>
        </div>
        <Image
          src="/images/fond.png"
          alt="fond"
          fill
          priority
          className="object-cover"
        />
      </section>

      {/* New Services Section */}
      <section id="services" className="w-full px-2 py-10 bg-[#0A0A0A]">
        <h2 className="text-3xl font-bold text-[#A259FF] mb-8">Nos services :</h2>
        <ServiceCard
          image="/images/roofing1.jpg"
          alt="Travaux de toiture"
          title="Votre toit de A à Z"
          description="nous nous occupons de tout votre toit de A à Z que ce soit toiture, isolation, zinguerie et peut être même panneaux solaire"
          buttonText="En savoir plus"
        />
        <ServiceCard
          image="/images/solar1.jpg"
          alt="Pose de panneaux solaires"
          title="pose de panneaux solaire"
          description="nous nous occupons de placer vos panneaux solaires et de les brancher à votre onduleur dans l'objectif de rentabiliser votre toit"
          buttonText="En savoir plus"
        />
        <ServiceCard
          image="/images/insulation1.jpg"
          alt="Isolation de la toiture"
          title="Isolation de la toiture"
          description="nous plaçons l'isolation dans votre toiture pour limiter la dissipation de la chaleur"
          buttonText="En savoir plus"
        />
      </section>

      {/* Footer */}
      <section className="snap-start w-full">
        <Footer />
      </section>
    </div>
  );
}

export default function Home() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const t = translations[language];

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1100);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const content: Record<string, Content> = {
    fr: {
      header1: "Votre toit.",
      header2: "Notre expertise.",
      learnMore: "découvrir nos services",
      ourServices: "nos services de toiture",
      descriptionRoofing: "Installation complète de toiture - qualité professionnelle et",
      descriptionRenovation: "Rénovation complète de toiture - expertise garantie et",
      available: "disponible",
      service: "service",
      professional: "professionnel",
      roofingPrice: "Sur devis",
      renovationPrice: "Sur devis",
    },
    nl: {
      header1: "Uw dak.",
      header2: "Onze expertise.",
      learnMore: "ontdek onze diensten",
      ourServices: "onze dakbedekking diensten",
      descriptionRoofing: "Complete dakbedekking installatie - professionele kwaliteit en",
      descriptionRenovation: "Complete dakrenovatie - gegarandeerde expertise en",
      available: "beschikbaar",
      service: "dienst",
      professional: "professioneel",
      roofingPrice: "Op offerte",
      renovationPrice: "Op offerte",
    },
  };

  if (!mounted) return null;
  const currentContent = content[language] || content.fr;

  return isDesktop ? <HomeDesktop content={currentContent} /> : <HomeMobile content={currentContent} />;
}