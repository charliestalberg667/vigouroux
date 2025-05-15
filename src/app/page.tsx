"use client";
import React from "react";
import { useLanguage } from "@/components/language-provider";
import ServiceCard from "@/components/service-card";
import Image from "next/image";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Footer from "@/components/footer";

export default function Home() {
  const { language } = useLanguage();

  const content = {
    fr: {
      hero: {
        title: "Votre expert en toiture",
        subtitle: "Depuis 50 ans, nous assurons la qualité et la durabilité de votre toit",
        cta: "Demander un devis",
      },
      services: {
        title: "Nos Services",
        subtitle: "Des solutions adaptées à vos besoins",
        items: [
          {
            title: "Toiture",
            description: "Installation, réparation et entretien de toitures pour tous types de bâtiments. Nous utilisons des matériaux de haute qualité pour garantir la durabilité et l'esthétique de votre toit.",
            image: "/images/metre.png",
            alt: "Toiture",
            buttonText: "En savoir plus",
            quality: "100",
          },
          {
            title: "Gouttières",
            description: "Installation et maintenance de systèmes de gouttières efficaces pour protéger votre propriété contre les dommages causés par l'eau. Solutions sur mesure pour une gestion optimale des eaux pluviales.",
            image: "/images/vicer.png",
            alt: "Gouttières",
            buttonText: "En savoir plus",
          },
          {
            title: "Pose de panneaux solaires",
            description: "Installation professionnelle de panneaux solaires pour une énergie renouvelable et économique. Optimisez votre consommation énergétique et réduisez votre empreinte carbone avec nos solutions sur mesure.",
            image: "/images/solar-panel-installation.jpg",
            alt: "Panneaux solaires",
            buttonText: "En savoir plus",
          },
          {
            title: "Isolation",
            description: "Solutions d'isolation thermique et acoustique pour améliorer le confort et l'efficacité énergétique de votre maison. Réduisez vos factures d'énergie tout en augmentant votre confort.",
            image: "/images/isolation.png",
            alt: "Isolation",
            buttonText: "En savoir plus",
          },
        ],
      },
      contact: {
        title: "Contactez-nous",
        subtitle: "Nous sommes là pour vous aider",
        form: {
          name: "Nom",
          email: "Email",
          phone: "Téléphone",
          message: "Message",
          submit: "Envoyer",
        },
      },
    },
    nl: {
      hero: {
        title: "Uw dakbedekkingsexpert",
        subtitle: "Al 50 jaar zorgen wij voor kwaliteit en duurzaamheid van uw dak",
        cta: "Offerte aanvragen",
      },
      services: {
        title: "Onze Diensten",
        subtitle: "Oplossingen op maat van uw behoeften",
        items: [
          {
            title: "Dakbedekking",
            description: "Installatie, reparatie en onderhoud van daken voor alle soorten gebouwen. We gebruiken hoogwaardige materialen om de duurzaamheid en esthetiek van uw dak te garanderen.",
            image: "/images/roof-installation.jpg",
            alt: "Dakbedekking",
            buttonText: "Meer weten",
          },
          {
            title: "Dakgoten",
            description: "Installatie en onderhoud van efficiënte dakgootsystemen om uw eigendom te beschermen tegen waterschade. Op maat gemaakte oplossingen voor optimaal regenwaterbeheer.",
            image: "/images/solar-panel-installation.jpg",
            alt: "Dakgoten",
            buttonText: "Meer weten",
          },
          {
            title: "Zonnepanelen installatie",
            description: "Professionele installatie van zonnepanelen voor hernieuwbare en economische energie. Optimaliseer uw energieverbruik en verlaag uw ecologische voetafdruk met onze op maat gemaakte oplossingen.",
            image: "/images/solar-panel-installation.jpg",
            alt: "Zonnepanelen",
            buttonText: "Meer weten",
          },
          {
            title: "Isolatie",
            description: "Thermische en akoestische isolatieoplossingen om het comfort en de energie-efficiëntie van uw huis te verbeteren. Verlaag uw energierekening terwijl u uw comfort verhoogt.",
            image: "/images/insulation1.jpg",
            alt: "Isolatie",
            buttonText: "Meer weten",
          },
        ],
      },
      contact: {
        title: "Contacteer ons",
        subtitle: "We staan voor u klaar",
        form: {
          name: "Naam",
          email: "E-mail",
          phone: "Telefoon",
          message: "Bericht",
          submit: "Versturen",
        },
      },
    },
  };

  const { hero, services, contact } = content[language];

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/fond.png"
              alt="Hero"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="relative z-10 text-center justify-center text-white px-4 max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-8">
              <Image
                src={language === 'fr' ? '/images/depuis50ans.png' : '/images/sinds50jaar.png'}
                alt={language === 'fr' ? 'depuis 50 ans' : 'sinds 50 jaar'}
                width={220}
                height={80}
                className="mb-[12vh]"
                priority
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {hero.subtitle}
            </p>
            <div className="flex justify-center w-full">
              <button
                className="group inline-flex items-center gap-2 bg-[#FF6F3C]/20 hover:bg-[#FF6F3C]/20 text-white px-6 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 shadow-md font-semibold"
                onClick={() => {
                  const section = document.getElementById('services');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {language === 'fr' ? 'En savoir plus' : 'Meer weten'}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5v14M12 19l-7-7m7 7l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gradient-to-b from-white to-[#F7F7FA]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#FF6F3C] to-[#FF8F5C] bg-clip-text text-transparent">
                {services.title}
              </h2>
              <p className="text-xl text-gray-600">{services.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 gap-12">
              <ServiceCard
                image={services.items[0].image}
                alt={services.items[0].alt}
                title={services.items[0].title}
                description={services.items[0].description}
                buttonText={services.items[0].buttonText}
                buttonLink="/service1"
              />
              <ServiceCard
                image={services.items[3].image}
                alt={services.items[3].alt}
                title={services.items[3].title}
                description={services.items[3].description}
                buttonText={services.items[3].buttonText}
                buttonLink="/service2"
              />
              <ServiceCard
                image={services.items[2].image}
                alt={services.items[2].alt}
                title={services.items[2].title}
                description={services.items[2].description}
                buttonText={services.items[2].buttonText}
                buttonLink="/service3"
              />

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-b from-[#F7F7FA] to-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#FF6F3C] to-[#FF8F5C] bg-clip-text text-transparent">
                {contact.title}
              </h2>
              <p className="text-xl text-gray-600">{contact.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center gap-4 group">
                  <div className="p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">
                    <MdEmail className="text-[#FF6F3C] text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600 group-hover:text-[#FF6F3C] transition-colors duration-300 ease-in-out">vigouroux.geoffray@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">
                    <MdPhone className="text-[#FF6F3C] text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Téléphone</h3>
                    <p className="text-gray-600 group-hover:text-[#FF6F3C] transition-colors duration-300 ease-in-out">+32 476 68 20 36</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">
                    <MdLocationOn className="text-[#FF6F3C] text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Adresse</h3>
                    <p className="text-gray-600 group-hover:text-[#FF6F3C] transition-colors duration-300 ease-in-out">Maasdai 167, 1502 Halle, Belgique</p>
                  </div>
                </div>
              </div>
              <form className="space-y-6 bg-white p-8 rounded-2xl shadow-sm">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:border-[#FF6F3C] focus:ring-1 focus:ring-[#FF6F3C]/20 outline-none transition-all duration-300 ease-in-out"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:border-[#FF6F3C] focus:ring-1 focus:ring-[#FF6F3C]/20 outline-none transition-all duration-300 ease-in-out"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:border-[#FF6F3C] focus:ring-1 focus:ring-[#FF6F3C]/20 outline-none transition-all duration-300 ease-in-out"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:border-[#FF6F3C] focus:ring-1 focus:ring-[#FF6F3C]/20 outline-none transition-all duration-300 ease-in-out"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FF6F3C] text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-[#FF8F5C] transition-colors duration-300 ease-in-out"
                >
                  {contact.form.submit}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}