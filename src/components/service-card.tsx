import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

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
    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="relative w-full h-[220px] md:w-[340px] md:min-w-[340px] md:max-w-[340px] md:h-full overflow-hidden">
        <Image 
          src={image} 
          alt={alt} 
          fill 
          style={{objectFit: 'cover'}} 
          className="group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="flex flex-col justify-between p-8 md:p-12 flex-1">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 bg-gradient-to-r from-[#FF6F3C] to-[#FF8F5C] bg-clip-text text-transparent">{title}</h3>
          <p className="text-gray-700 mb-6 text-base text-justify md:text-lg leading-relaxed">{description}</p>
        </div>
        <div className="flex justify-end w-full">
          {buttonLink ? (
            <Link href={buttonLink} legacyBehavior>
              <a className={buttonClassName || "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-[#FF6F3C] font-medium text-base md:text-lg bg-[#FF6F3C]/10 hover:bg-[#FF6F3C]/40 transition-all duration-300 ease-in-out"}>
                {buttonText}
                <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
              </a>
            </Link>
          ) : (
            <button
              className={buttonClassName || "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-[#FF6F3C] font-medium text-base md:text-lg bg-[#FF6F3C]/10 hover:bg-[#FF6F3C]/40 transition-all duration-300 ease-in-out"}
              onClick={handleScroll}
            >
              {buttonText}
              <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 