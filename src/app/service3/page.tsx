"use client";
import { useLanguage } from "@/components/language-provider";
import Image from "next/image";
import Link from "next/link";
import DevisForm from "@/components/devis-form";
import Footer from "@/components/footer";
import { EmojiText } from "@/components/emoji-text";
import { 
  SunIcon, 
  ClipboardDocumentListIcon, 
  BoltIcon, 
  CubeIcon, 
  BanknotesIcon, 
  QuestionMarkCircleIcon 
} from "@heroicons/react/24/outline";

export default function Service1Page() {
  const { language } = useLanguage();
  const content = {
    fr: {
      title: "Pose de panneaux solaires",
      desc: "Nous proposons des solutions d'installation de panneaux solaires pour une énergie renouvelable et économique. Optimisez votre consommation énergétique et réduisez votre empreinte carbone avec nos solutions sur mesure.",
      back: "Retour aux services",
      image: "/images/solar-panel-installation.jpg",
      form: {
        title: "Demander un devis gratuit",
        name: "Nom",
        firstname: "Prénom",
        email: "Email",
        phone: "Téléphone",
        address: "Adresse",
        send: "Envoyer",
      },
      sections: [
        {
          title: "Types d'installations solaires",
          text: "Panneaux photovoltaïques\n• Production d'électricité\n• Autoconsommation\n\nPanneaux thermiques\n• Production d'eau chaude\n• Chauffage\n\nSystèmes hybrides\n• Électricité et chaleur\n• Performance optimale",
        },
        {
          title: "Étapes d'une installation réussie",
          text: "1. Étude de faisabilité et devis personnalisé\n• Analyse des besoins\n• Devis détaillé\n\n2. Analyse de la toiture et orientation\n• Étude technique\n• Optimisation\n\n3. Installation des panneaux et onduleurs\n• Pose sécurisée\n• Connexion électrique\n\n4. Mise en service et raccordement\n• Tests de performance\n• Raccordement réseau\n\n5. Formation et suivi\n• Utilisation du système\n• Maintenance",
        },
        {
          title: "Avantages des panneaux solaires",
          text: "Production d'énergie renouvelable\n• Énergie propre\n• Durabilité\n\nRéduction de la facture énergétique\n• Économies\n• Rentabilité\n\nIndépendance énergétique\n• Autonomie\n• Sécurité\n\nValorisation de votre bien immobilier\n• Valeur ajoutée\n• Attractivité\n\nImpact positif sur l'environnement\n• Réduction CO2\n• Écologie",
        },
        {
          title: "Matériaux et équipements",
          text: "Panneaux solaires haute qualité\n• Performance optimale\n• Durabilité\n\nOnduleurs performants\n• Efficacité\n• Fiabilité\n\nSystèmes de fixation adaptés\n• Sécurité\n• Intégration\n\nNous sélectionnons les meilleures marques du marché.",
        },
        {
          title: "Aides et primes",
          text: "Primes régionales\n• Wallonie\n• Bruxelles\n• Flandre\n\nAccompagnement administratif\n• Dossiers de demande\n• Suivi des démarches",
        },
        {
          title: "FAQ",
          text: "Quelle est la durée de vie des panneaux solaires ?\n• 25-30 ans en moyenne\n• Garantie de performance\n\nCombien de temps pour rentabiliser l'investissement ?\n• 5-7 ans en général\n• Selon consommation et primes\n\nFaut-il une autorisation pour l'installation ?\n• Oui, dans certains cas\n• Gestion administrative incluse",
        },
      ],
    },
    nl: {
      title: "Zonnepanelen installatie",
      desc: "Wij bieden professionele installatie van zonnepanelen voor hernieuwbare en economische energie. Optimaliseer uw energieverbruik en verlaag uw ecologische voetafdruk met onze op maat gemaakte oplossingen.",
      back: "Terug naar diensten",
      image: "/images/solar-panel-installation.jpg",
      form: {
        title: "Gratis offerte aanvragen",
        name: "Naam",
        firstname: "Voornaam",
        email: "E-mail",
        phone: "Telefoonnummer",
        address: "Adres",
        send: "Versturen",
      },
      sections: [
        {
          title: "Soorten zonnepanelen",
          text: "Fotovoltaïsche panelen\n• Elektriciteitsproductie\n• Zelfverbruik\n\nThermische panelen\n• Warmwaterproductie\n• Verwarming\n\nHybride systemen\n• Elektriciteit en warmte\n• Optimale prestaties",
        },
        {
          title: "Stappen van een geslaagde installatie",
          text: "1. Haalbaarheidsstudie en persoonlijke offerte\n• Behoefteanalyse\n• Gedetailleerde offerte\n\n2. Analyse van het dak en oriëntatie\n• Technische studie\n• Optimalisatie\n\n3. Installatie van panelen en omvormers\n• Veilige plaatsing\n• Elektrische aansluiting\n\n4. Inbedrijfstelling en aansluiting\n• Prestatietests\n• Netaansluiting\n\n5. Training en opvolging\n• Systeemgebruik\n• Onderhoud",
        },
        {
          title: "Voordelen van zonnepanelen",
          text: "Productie van hernieuwbare energie\n• Schone energie\n• Duurzaamheid\n\nLagere energiefactuur\n• Besparingen\n• Rendabiliteit\n\nEnergie-onafhankelijkheid\n• Autonomie\n• Veiligheid\n\nMeerwaarde voor uw woning\n• Toegevoegde waarde\n• Aantrekkelijkheid\n\nPositieve impact op het milieu\n• CO2-reductie\n• Ecologie",
        },
        {
          title: "Materialen en apparatuur",
          text: "Hoogwaardige zonnepanelen\n• Optimale prestaties\n• Duurzaamheid\n\nPerformante omvormers\n• Efficiëntie\n• Betrouwbaarheid\n\nAangepaste bevestigingssystemen\n• Veiligheid\n• Integratie\n\nWe selecteren de beste merken op de markt.",
        },
        {
          title: "Premies en hulp",
          text: "Regionale premies\n• Wallonië\n• Brussel\n• Vlaanderen\n\nAdministratieve begeleiding\n• Aanvraagdossiers\n• Opvolging van procedures",
        },
        {
          title: "FAQ",
          text: "Wat is de levensduur van zonnepanelen?\n• Gemiddeld 25-30 jaar\n• Prestatiegarantie\n\nHoe lang duurt het om de investering terug te verdienen?\n• Meestal 5-7 jaar\n• Afhankelijk van verbruik en premies\n\nIs een vergunning nodig voor de installatie?\n• Ja, in sommige gevallen\n• Administratief beheer inbegrepen",
        },
      ],
    },
  };
  const t = content[language];
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white flex flex-col items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#FF6F3C]/3 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-[#FF6F3C]/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#FF6F3C]/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Hero section with professional design */}
      <div className="w-full relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src={t.image} 
            alt={t.title} 
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-8">
          <div className="max-w-4xl w-full flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="w-16 h-0.5 bg-[#FF6F3C] mb-2" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white text-center tracking-tight">
              {t.title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl text-center leading-relaxed mb-10 max-w-2xl font-light">
              {t.desc}
            </p>
            <Link 
              href="#content" 
              className="group inline-flex items-center gap-2 bg-[#FF6F3C]/20 hover:bg-[#FF6F3C]/20 text-white px-6 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 shadow-md font-semibold"
            >
              {language === 'fr' ? 'En savoir plus' : 'Meer weten'}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5v14M12 19l-7-7m7 7l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Content sections with professional styling */}
      <div id="content" className="w-full max-w-5xl px-4 md:px-8 flex flex-col gap-16 py-24">
        {t.sections.map((section, idx) => (
          <div 
            key={idx} 
            className="group bg-white p-10 border border-gray-100 hover:border-gray-200 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-0.5 bg-[#FF6F3C]" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  {section.title}
                </h2>
              </div>
              <div className="w-16 h-16 text-[#FF6F3C] p-2">
                {idx === 0 && <SunIcon className="w-full h-full" />}
                {idx === 1 && <ClipboardDocumentListIcon className="w-full h-full" />}
                {idx === 2 && <BoltIcon className="w-full h-full" />}
                {idx === 3 && <CubeIcon className="w-full h-full" />}
                {idx === 4 && <BanknotesIcon className="w-full h-full" />}
                {idx === 5 && <QuestionMarkCircleIcon className="w-full h-full" />}
              </div>
            </div>
            <EmojiText 
              text={section.text} 
              className="text-gray-600 whitespace-pre-line text-justify leading-relaxed" 
            />
          </div>
        ))}
      </div>

      {/* Professional quote button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative bg-[#FF6F3C] hover:bg-[#FF8F5C] text-white px-6 py-3.5 rounded-sm shadow-sm transform hover:translate-y-[-1px] transition-all duration-300 flex items-center gap-3 text-sm tracking-wider uppercase"
        >
          <span className="relative z-10 hidden md:inline">{language === 'fr' ? 'Demander un devis' : 'Offerte aanvragen'}</span>
          <svg 
            className="w-4 h-4 relative z-10" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M8 10H16M8 14H16M8 18H16M4 6H20C21.1046 6 22 6.89543 22 8V16C22 17.1046 21.1046 18 20 18H4C2.89543 18 2 17.1046 2 16V8C2 6.89543 2.89543 6 4 6Z" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Devis form with professional styling */}
      <div id="quote-form" className="w-full max-w-4xl px-4 md:px-8 mb-24">
        <div className="bg-white p-10 border border-gray-100">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-0.5 bg-[#FF6F3C]" />
            <h2 className="text-2xl font-semibold text-gray-900">
              {t.form.title}
            </h2>
          </div>
          <DevisForm language={language} />
        </div>
      </div>

      <Footer />
    </main>
  );
}

// Add these styles to your global CSS file
const styles = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.animate-fade-in-delay {
  animation: fadeIn 0.6s ease-out 0.15s forwards;
  opacity: 0;
}
`; 