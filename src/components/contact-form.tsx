"use client";
import { useLanguage } from "@/components/language-provider";
import { useState, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";

interface ContactFormProps {
  language?: "fr" | "nl";
}

const formContent = {
  fr: {
    name: "Nom",
    email: "Email",
    phone: "Téléphone",
    message: "Message",
    submit: "Envoyer",
    success: "Votre message a été envoyé avec succès !",
    error: "Une erreur est survenue. Veuillez réessayer.",
  },
  nl: {
    name: "Naam",
    email: "E-mail",
    phone: "Telefoon",
    message: "Bericht",
    submit: "Versturen",
    success: "Uw bericht is succesvol verzonden!",
    error: "Er is een fout opgetreden. Probeer het opnieuw.",
  },
};

export default function ContactForm({ language }: ContactFormProps) {
  const { language: lang } = useLanguage();
  const { toast } = useToast();
  const t = formContent[language || lang];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
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

      // Reset form using the ref
      formRef.current?.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: t.error,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} className="space-y-6 bg-white p-8 rounded-2xl shadow-sm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          {t.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:border-[#FF6F3C] focus:ring-1 focus:ring-[#FF6F3C]/20 outline-none transition-all duration-300 ease-in-out"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          {t.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:border-[#FF6F3C] focus:ring-1 focus:ring-[#FF6F3C]/20 outline-none transition-all duration-300 ease-in-out"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          {t.phone}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:border-[#FF6F3C] focus:ring-1 focus:ring-[#FF6F3C]/20 outline-none transition-all duration-300 ease-in-out"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:border-[#FF6F3C] focus:ring-1 focus:ring-[#FF6F3C]/20 outline-none transition-all duration-300 ease-in-out"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#FF6F3C] text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-[#FF8F5C] transition-colors duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
        ) : (
          t.submit
        )}
      </button>
    </form>
  );
} 