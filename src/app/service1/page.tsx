"use client";
import { useLanguage } from "@/components/language-provider";
import Image from "next/image";
import Link from "next/link";
import DevisForm from "@/components/devis-form";
import Footer from "@/components/footer";
import { EmojiText } from "@/components/emoji-text";
import { 
  HomeModernIcon, 
  ClipboardDocumentListIcon, 
  ShieldCheckIcon, 
  WrenchScrewdriverIcon, 
  BanknotesIcon, 
  QuestionMarkCircleIcon 
} from "@heroicons/react/24/outline";

export default function Service1Page() {
  const { language } = useLanguage();
  const content = {
    fr: {
      title: "Toiture",
      desc: "Nous proposons des services complets de toiture pour tous types de bâtiments. De l'installation à la réparation, nous garantissons qualité, durabilité et esthétique pour votre toit.",
      back: "Retour aux services",
      image: "/images/metre.png",
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
          title: "Types de toitures",
          text: "Toitures en tuiles\n• Tuiles en terre cuite\n• Tuiles en béton\n\nToitures en ardoise\n• Ardoise naturelle\n• Ardoise synthétique\n\nToitures en métal\n• Zinc\n• Acier\n\nToitures plates\n• Bitume\n• EPDM",
        },
        {
          title: "Étapes d'une installation réussie",
          text: "1. Diagnostic et devis personnalisé\n• Analyse de la structure\n• Devis détaillé\n\n2. Préparation du chantier\n• Protection des zones\n• Matériel adapté\n\n3. Installation de la toiture\n• Pose professionnelle\n• Finitions soignées\n\n4. Contrôle qualité\n• Tests d'étanchéité\n• Vérification des joints\n\n5. Nettoyage et garantie\n• Site propre\n• Garantie décennale",
        },
        {
          title: "Avantages de nos services",
          text: "Expertise professionnelle\n• Artisans qualifiés\n• Normes de sécurité\n\nMatériaux de qualité\n• Durabilité\n• Esthétique\n\nProtection optimale\n• Isolation thermique\n• Isolation acoustique\n\nValorisation du bien\n• Esthétique\n• Performance\n\nService complet\n• Installation\n• Entretien",
        },
        {
          title: "Matériaux et équipements",
          text: "Matériaux de couverture\n• Haute qualité\n• Durabilité\n\nIsolation thermique\n• Performance\n• Économies d'énergie\n\nAccessoires de toiture\n• Gouttières\n• Faîtières\n\nNous sélectionnons les meilleures marques du marché.",
        },
        {
          title: "Aides et primes",
          text: "Primes régionales\n• Wallonie\n• Bruxelles\n• Flandre\n\nAccompagnement administratif\n• Dossiers de demande\n• Suivi des démarches",
        },
        {
          title: "FAQ",
          text: "Quelle est la durée de vie d'une toiture ?\n• 30-50 ans selon matériaux\n• Entretien régulier\n\nQuand faut-il refaire sa toiture ?\n• Fuites\n• Tuiles cassées\n• Isolation défectueuse\n\nFaut-il un permis pour refaire sa toiture ?\n• Dépend du type de travaux\n• Gestion administrative incluse",
        },
      ],
    },
    nl: {
      title: "Dakwerken",
      desc: "Wij bieden complete dakwerken voor alle soorten gebouwen. Van installatie tot reparatie garanderen wij kwaliteit, duurzaamheid en esthetiek voor uw dak.",
      back: "Terug naar diensten",
      image: "/images/metre.png",
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
          title: "Soorten daken",
          text: "Pannendaken\n• Keramische pannen\n• Betonpannen\n\nLeien daken\n• Natuurlijke leien\n• Synthetische leien\n\nMetalen daken\n• Zink\n• Staal\n\nPlatte daken\n• Bitumen\n• EPDM",
        },
        {
          title: "Stappen van een geslaagde installatie",
          text: "1. Diagnose en persoonlijke offerte\n• Structuuranalyse\n• Gedetailleerde offerte\n\n2. Voorbereiding van de werf\n• Bescherming van zones\n• Aangepast materiaal\n\n3. Installatie van het dak\n• Professionele plaatsing\n• Nette afwerking\n\n4. Kwaliteitscontrole\n• Waterdichtheidstests\n• Controle van voegen\n\n5. Opruiming en garantie\n• Nette werf\n• Decenniumgarantie",
        },
        {
          title: "Voordelen van onze diensten",
          text: "Professionele expertise\n• Gekwalificeerde vakmensen\n• Veiligheidsnormen\n\nKwaliteitsmaterialen\n• Duurzaamheid\n• Esthetiek\n\nOptimale bescherming\n• Thermische isolatie\n• Akoestische isolatie\n\nMeerwaarde van het pand\n• Esthetiek\n• Prestaties\n\nComplete service\n• Installatie\n• Onderhoud",
        },
        {
          title: "Materialen en apparatuur",
          text: "Dakbedekkingsmaterialen\n• Hoge kwaliteit\n• Duurzaamheid\n\nThermische isolatie\n• Prestaties\n• Energiebesparing\n\nDakaccessoires\n• Dakgoten\n• Nokpannen\n\nWe selecteren de beste merken op de markt.",
        },
        {
          title: "Premies en hulp",
          text: "Regionale premies\n• Wallonië\n• Brussel\n• Vlaanderen\n\nAdministratieve begeleiding\n• Aanvraagdossiers\n• Opvolging van procedures",
        },
        {
          title: "FAQ",
          text: "Wat is de levensduur van een dak?\n• 30-50 jaar afhankelijk van materialen\n• Regelmatig onderhoud\n\nWanneer moet een dak vernieuwd worden?\n• Lekken\n• Gebroken pannen\n• Defecte isolatie\n\nIs een vergunning nodig voor dakwerken?\n• Hangt af van type werk\n• Administratief beheer inbegrepen",
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
                {idx === 0 && <HomeModernIcon className="w-full h-full" />}
                {idx === 1 && <ClipboardDocumentListIcon className="w-full h-full" />}
                {idx === 2 && <ShieldCheckIcon className="w-full h-full" />}
                {idx === 3 && <WrenchScrewdriverIcon className="w-full h-full" />}
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