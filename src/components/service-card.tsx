import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  buttonText: string;
  scrollTarget?: string;
  buttonClassName?: string;
  buttonLink?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  alt,
  title,
  description,
  buttonText,
  scrollTarget,
  buttonClassName,
  buttonLink,
}) => {
  const handleScroll = () => {
    if (scrollTarget) {
      const el = document.getElementById(scrollTarget);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden my-8 min-h-[340px] md:h-[340px] w-full relative group hover:shadow-xl transition-all duration-500">
      <div className="relative w-full h-[220px] md:w-[340px] md:min-w-[340px] md:max-w-[340px] md:h-full overflow-hidden ">
        <Image 
          src={image} 
          alt={alt} 
          fill 
          style={{objectFit: 'cover'}} 
          className="group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="flex flex-col justify-between p-6 md:p-12 flex-1">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-6 bg-gradient-to-r from-[#FF6F3C] to-[#FF8F5C] bg-clip-text text-transparent">{title}</h3>
          <p className="text-gray-700 mb-6 text-base text-justify md:text-lg">{description}</p>
        </div>
        <div className="flex justify-end w-full">
          {buttonLink ? (
            <Link href={buttonLink} legacyBehavior>
              <a className={buttonClassName || "inline-flex items-center gap-2 border-2 border-[#FF6F3C] rounded-2xl px-4 py-2 text-[#FF6F3C] font-bold text-base md:text-lg bg-white hover:bg-[#FF6F3C] hover:text-white transition-all duration-300 ease-in-out"}>
                {buttonText}
                <svg width="32" height="20" viewBox="0 0 46 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out">
                  <path d="M0 13.8462H45.5M45.5 13.5897 25.9198 10.4615 25.9198 0M45.5 13.8462C38.9733 14.1026 25.9198 16.9231 25.9198 26.1538" stroke="currentColor" strokeWidth="2" />
                </svg>
              </a>
            </Link>
          ) : (
            <button
              className={buttonClassName || "inline-flex items-center gap-2 border-2 border-[#FF6F3C] rounded-2xl px-4 py-2 text-[#FF6F3C] font-bold text-base md:text-lg bg-white hover:bg-[#FF6F3C] hover:text-white transition-all duration-300 ease-in-out"}
              onClick={handleScroll}
            >
              {buttonText}
              <svg width="32" height="20" viewBox="0 0 46 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out">
                <path d="M0 13.8462H45.5M45.5 13.5897 25.9198 10.4615 25.9198 0M45.5 13.8462C38.9733 14.1026 25.9198 16.9231 25.9198 26.1538" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 