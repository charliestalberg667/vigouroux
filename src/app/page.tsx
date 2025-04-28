"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "@/components/language-provider";
import Footer from "@/components/footer";
import React from "react";
import Image from "next/image";

interface Content {
  header1: string;
  header2: string;
  learnMore: string;
  ourKits: string;
  description440: string;
  description800: string;
  inStock: string;
  price440: string;
  price800: string;
  kit: string;
  solar: string;
}

function HomeDesktop({ content }: { content: Content }) {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Section 1 */}
      <section className="h-screen w-full snap-start relative">
        <div className="absolute bottom-[22vh] left-[5vw] text-white text-7xl z-10">
          <h2>{content.header1}</h2>
          <h2>{content.header2}</h2>
          <a href="#plugplay">
            <button className="text-xl">
              <div className="flex flex-row items-center bg-white/80 gap-4 px-4 py-3 rounded-[5px]">
                <p className="mb-1 text-[#4018FF] font-[montserrat] font-semibold">{content.learnMore}</p>
                <svg width="46" height="27" viewBox="0 0 46 27" fill="none" xmlns="http://www.w3.org/2000/svg">
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

      {/* Section 2 */}
      <section id="plugplay" className="h-screen w-full snap-start flex flex-col justify-between">
        <div></div>
  <h3 className="text-[2rem] relative w-[43.75vh] left-[3.125vh] text-[#4018FF] font-semibold">{content.ourKits}</h3>
  <div className="relative w-full flex flex-row justify-between items-center">
    <div></div>

    {/* Kit 1 */}
    <div className=" h-full w-[60vh] bg-white flex flex-col justify-between p-[4vh] gap-[4vh] rounded-[1.5vh]">
      <div className="flex flex-row h-[30vh] w-full justify-between">
        <div className=" flex flex-col justify-between">
          <Image src="/images/belgium.png" alt="belgium" width={60} height={60} />
          <h3 className="text-[2.5rem] font-[montserrat] font-semibold">{content.solar}<br/>{content.kit}</h3>
          <h3 className="text-[1.5rem] font-[montserrat] text-[#4018FF]">plug & play</h3>
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="text-[2rem] font-[montserrat] font-semibold text-right text-[#4018FF]">440W</h3>
          <Image src="/images/plugPlayX1.png" alt="plugPlayX1" width={200} height={100} />
        </div>
      </div>
      <p className="font-[montserrat]  text-[1rem] font-semibold">
        {content.description440}
        <span className="text-[#209967]"> {content.inStock}</span>
      </p>
      <div className="flex flex-row justify-between ">
        <button className="text-xl">
          <div className="flex flex-row items-center bg-[rgba(64,24,255,0.08)] gap-4 px-4 py-3 rounded-[5px]">
            <p className="mb-1 text-[#4018FF] font-[montserrat] font-semibold">{content.learnMore}</p>
            <svg width="46" height="27" viewBox="0 0 46 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 13.8462H45.5M45.5 13.8462C38.9733 13.5897 25.9198 10.4615 25.9198 0M45.5 13.8462C38.9733 14.1026 25.9198 16.9231 25.9198 26.1538" stroke="#4018FF" strokeWidth="2" />
            </svg>
          </div>
        </button>
        <h3 className="text-[2rem] font-semibold text-[#FF6E00]">{content.price440}</h3>
      </div>
    </div>

    {/* Kit 2 */}
    <div className=" h-full w-[60vh] bg-white flex flex-col justify-between gap-[4vh] p-[4vh] rounded-[1.5vh]">
      <div className="flex flex-row h-[30vh] w-full justify-between">
        <div className="flex flex-col justify-between">
          <Image src="/images/belgium.png" alt="belgium" width={60} height={60} />
          <h3 className="text-[2.5rem] font-[montserrat] font-semibold">{content.solar}<br />{content.kit}</h3>
          <h3 className="text-[1.5rem] font-[montserrat] text-[#4018FF]">plug & play</h3>
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="text-[2rem] font-[montserrat] font-semibold text-right text-[#4018FF]">800W</h3>
          <Image src="/images/plugPlayX2.png" alt="plugPlayX2" width={200} height={100} />
        </div>
      </div>
      <p className="font-[montserrat] text-[1rem] font-semibold">
        {content.description800}
        <span className="text-[#209967]"> {content.inStock}</span>
      </p>
      <div className="flex flex-row justify-between ">
        <button className="text-xl">
          <div className="flex flex-row items-center bg-[rgba(64,24,255,0.08)] gap-4 px-4 py-3 rounded-[5px]">
            <p className="mb-1 text-[#4018FF] font-[montserrat] font-semibold">{content.learnMore}</p>
            <svg width="46" height="27" viewBox="0 0 46 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 13.8462H45.5M45.5 13.8462C38.9733 13.5897 25.9198 10.4615 25.9198 0M45.5 13.8462C38.9733 14.1026 25.9198 16.9231 25.9198 26.1538" stroke="#4018FF" strokeWidth="2" />
            </svg>
          </div>
        </button>
        <h3 className="text-[2rem] font-semibold text-[#FF6E00]">{content.price800}</h3>
      </div>
    </div>
    <div></div>
  </div>
  <div></div>
</section>      {/* Footer */}
      <section className="snap-start w-full">
        <Footer />
      </section>
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
          <a href="#plugplay">
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

      {/* Section 2 */}
      <section id="plugplay" className="w-full snap-start flex flex-col justify-between py-[4vh] gap-[3vh]">
        <div></div>
  <h3 className="text-[2rem] relative w-[43.75vh] left-[3.125vh] text-[#4018FF] font-semibold">{content.ourKits}</h3>
  <div className="relative w-full flex flex-col justify-between items-center gap-[5vh]">
    <div></div>

    {/* Kit 1 */}
    <div className=" w-[90vw] bg-white flex flex-col justify-between p-[4vh] gap-[4vh] rounded-[1.5vh]">
      <div className="flex flex-row h-[30vh] w-full justify-between">
        <div className=" flex flex-col justify-between">
          <Image src="/images/belgium.png" alt="belgium" width={45} height={45} />
          <h3 className="text-[2.5rem] font-[montserrat] font-semibold">{content.solar}<br/>{content.kit}</h3>
          <h3 className="text-[1.5rem] font-[montserrat] font-semibold text-[#4018FF]">plug & play</h3>
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="text-[2rem] font-[montserrat] font-semibold text-right text-[#4018FF]">440W</h3>
          <Image src="/images/plugPlayX1.png" alt="plugPlayX1" width={150} height={100} />
        </div>
      </div>
      <p className="font-[montserrat]  text-[1rem] font-semibold">
        {content.description440}
        <span className="text-[#209967]"> {content.inStock}</span>
      </p>
      <div className="flex flex-row justify-between ">
        <button className="text-[1rem] items-center">
          <div className="flex flex-row items-center bg-[rgba(64,24,255,0.08)] gap-4 p-2 rounded-[5px]">
            <p className="mb-1 text-[#4018FF] font-[montserrat] font-semibold">{content.learnMore}</p>
            <svg width="30" height="23" viewBox="0 0 46 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 13.8462H45.5M45.5 13.8462C38.9733 13.5897 25.9198 10.4615 25.9198 0M45.5 13.8462C38.9733 14.1026 25.9198 16.9231 25.9198 26.1538" stroke="#4018FF" strokeWidth="2" />
            </svg>
          </div>
        </button>
        <h3 className="text-[1.8rem] font-semibold text-[#FF6E00]">{content.price440}</h3>
      </div>
    </div>

    {/* Kit 2 */}
    <div className=" w-[90vw] bg-white flex flex-col justify-between gap-[4vh] p-[4vh] rounded-[1.5vh]">
      <div className="flex flex-row h-[30vh] w-full justify-between">
        <div className="flex flex-col justify-between">
          <Image src="/images/belgium.png" alt="belgium" width={45} height={45} />
          <h3 className="text-[2.5rem] font-[montserrat] font-semibold">{content.solar}<br />{content.kit}</h3>
          <h3 className="text-[1.5rem] font-[montserrat] font-semibold text-[#4018FF]">plug & play</h3>
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="text-[2rem] font-[montserrat] font-semibold text-right text-[#4018FF]">800W</h3>
          <Image src="/images/plugPlayX2.png" alt="plugPlayX2" width={150} height={100} />
        </div>
      </div>
      <p className="font-[montserrat] text-[1rem] font-semibold">
        {content.description800}
        <span className="text-[#209967]"> {content.inStock}</span>
      </p>
      <div className="flex flex-row justify-between ">
        <button className="text-[1rem] items-center">
          <div className="flex flex-row items-center bg-[rgba(64,24,255,0.08)] gap-4 p-2 rounded-[5px]">
            <p className="mb-1 text-[#4018FF] font-[montserrat] font-semibold">{content.learnMore}</p>
            <svg width="30" height="23" viewBox="0 0 46 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 13.8462H45.5M45.5 13.8462C38.9733 13.5897 25.9198 10.4615 25.9198 0M45.5 13.8462C38.9733 14.1026 25.9198 16.9231 25.9198 26.1538" stroke="#4018FF" strokeWidth="2" />
            </svg>
          </div>
        </button>
        <h3 className="text-[1.8rem] font-semibold text-[#FF6E00]">{content.price800}</h3>
      </div>
    </div>
    <div></div>
  </div>
  <div></div>
</section>      {/* Footer */}
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

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1100);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const content: Record<string, Content> = {
    fr: {
      header1: "Juste une prise.",
      header2: "Branchez, profitez.",
      learnMore: "voir les offres",
      ourKits: "nos kits plug & play",
      description440: "Kit complet panneau solaire onduleur 440W - meilleur prix et",
      description800: "Kit complet 2 panneaux solaires onduleur 800W - meilleur prix et",
      inStock: "en stock",
      kit: "solaire",
      solar: "kit",
      price440: "199 €",
      price800: "349 €",
    },
    nl: {
      header1: "Gewoon een stekker.",
      header2: "Steek in, geniet.",
      learnMore: "bestel vandaag",
      ourKits: "onze plug & play kits",
      description440: "Complete zonnepaneel omvormer kit 440W - beste prijs en",
      description800: "Complete kit 2 zonnepanelen omvormer 800W - beste prijs en",
      inStock: "op voorraad",
      kit: "kit",
      solar: "solar",
      price440: "199 €",
      price800: "349 €",
    },
  };

  if (!mounted) return null;
  const currentContent = content[language] || content.fr;

  return isDesktop ? <HomeDesktop content={currentContent} /> : <HomeMobile content={currentContent} />;
}