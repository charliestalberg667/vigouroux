import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  buttonText: string;
  scrollTarget?: string;
  buttonClassName?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  alt,
  title,
  description,
  buttonText,
  scrollTarget,
  buttonClassName,
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
    <div className="flex bg-white rounded-xl shadow-md overflow-hidden my-8 min-h-[340px] h-[340px]">
      <div className="relative min-w-[340px] h-full">
        <Image src={image} alt={alt} fill style={{objectFit: 'cover'}} />
      </div>
      <div className="flex flex-col justify-between p-12 flex-1">
        <div>
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <p className="text-gray-700 mb-8">{description}</p>
        </div>
        <div className="relative inline-block rounded-xl">
          <button
            className={buttonClassName || "flex items-center gap-2 bg-[#232323]/90 rounded-2xl px-6 py-3 text-[#FF6F3C] font-bold text-lg"}
            onClick={handleScroll}
          >
            {buttonText}
            <svg width="32" height="20" viewBox="0 0 46 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 13.8462H45.5M45.5 13.8462C38.9733 13.5897 25.9198 10.4615 25.9198 0M45.5 13.8462C38.9733 14.1026 25.9198 16.9231 25.9198 26.1538" stroke="#FF6F3C" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 