"use client";
import { useLanguage } from "@/components/language-provider";
import { FaUser, FaPhone, FaMapMarkerAlt, FaAt } from "react-icons/fa";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface DevisFormProps {
  language?: "fr" | "nl";
}

const formContent = {
  fr: {
    title: "demande de devis gratuit :",
    name: "nom",
    firstname: "prénom",
    email: "Email",
    phone: "nr de téléphone",
    address: "adresse",
    send: "terminer",
    success: "Votre demande a été envoyée avec succès !",
    error: "Une erreur est survenue. Veuillez réessayer.",
  },
  nl: {
    title: "gratis offerte aanvragen :",
    name: "naam",
    firstname: "voornaam",
    email: "E-mail",
    phone: "telefoonnummer",
    address: "adres",
    send: "voltooien",
    success: "Uw aanvraag is succesvol verzonden!",
    error: "Er is een fout opgetreden. Probeer het opnieuw.",
  },
};

export default function DevisForm({ language }: DevisFormProps) {
  const { language: lang } = useLanguage();
  const { toast } = useToast();
  const t = formContent[language || lang];
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      firstname: formData.get('firstname'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      language: language || lang,
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      toast({
        title: t.success,
        className: "bg-green-500 text-white",
      });

      // Reset form
      e.currentTarget.reset();
    } catch (error) {
      toast({
        title: t.error,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full mt-12">
      <div className="bg-[#FF6F3C] rounded-3xl p-8 md:p-12 flex flex-col w-full">
        <h2 className="text-white text-4xl font-light mb-10 text-left">{t.title}</h2>
        <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4" onSubmit={handleSubmit}>
          {/* Left column */}
          <div className="flex flex-col gap-4">
            <label className="text-white text-base mb-1 text-left">{t.name}</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-lg" />
              <input name="name" className="pl-10 pr-4 py-3 rounded-2xl w-full bg-white text-gray-900 placeholder-gray-400 outline-none text-lg" placeholder={t.name} required />
            </div>
            <label className="text-white text-base mb-1 text-left">{t.firstname}</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-lg" />
              <input name="firstname" className="pl-10 pr-4 py-3 rounded-2xl w-full bg-white text-gray-900 placeholder-gray-400 outline-none text-lg" placeholder={t.firstname} required />
            </div>
            <label className="text-white text-base mb-1 text-left">{t.email}</label>
            <div className="relative">
              <FaAt className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-lg" />
              <input name="email" className="pl-10 pr-4 py-3 rounded-2xl w-full bg-white text-gray-900 placeholder-gray-400 outline-none text-lg" placeholder={t.email} type="email" required />
            </div>
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-4 justify-end h-full">
            <label className="text-white text-base mb-1 text-left">{t.phone}</label>
            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-lg" />
              <input name="phone" className="pl-10 pr-4 py-3 rounded-2xl w-full bg-white text-gray-900 placeholder-gray-400 outline-none text-lg" placeholder={t.phone} required />
            </div>
            <label className="text-white text-base mb-1 text-left">{t.address}</label>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-lg" />
              <input name="address" className="pl-10 pr-4 py-3 rounded-2xl w-full bg-white text-gray-900 placeholder-gray-400 outline-none text-lg" placeholder={t.address} required />
            </div>
            <div className="flex-1" />
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="mt-6 w-full flex items-center justify-center gap-2 bg-white text-[#FF6F3C] text-xl font-semibold rounded-2xl py-3 transition-all duration-300 hover:bg-[#FF6F3C]/90 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-[#FF6F3C] border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  {t.send}
                  <svg width="32" height="20" viewBox="0 0 46 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.8462H45.5M45.5 13.8462C38.9733 13.5897 25.9198 10.4615 25.9198 0M45.5 13.8462C38.9733 14.1026 25.9198 16.9231 25.9198 26.1538" stroke="#FF6F3C" strokeWidth="2" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 