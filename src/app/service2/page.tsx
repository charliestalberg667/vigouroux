"use client";
import { useLanguage } from "@/components/language-provider";
import Image from "next/image";
import Link from "next/link";
import DevisForm from "@/components/devis-form";
import Footer from "@/components/footer";
import { EmojiText } from "@/components/emoji-text";
import { 
  HomeIcon, 
  ClipboardDocumentListIcon, 
  SparklesIcon, 
  CubeIcon, 
  BanknotesIcon, 
  QuestionMarkCircleIcon 
} from "@heroicons/react/24/outline";

export default function Service1Page() {
  const { language } = useLanguage();
  const content = {
    fr: {
      title: "Isolation thermique et acoustique",
      desc: "Nous proposons des solutions d'isolation complètes pour améliorer le confort et l'efficacité énergétique de votre maison. Réduisez vos factures d'énergie tout en augmentant votre confort quotidien.",
      back: "Retour aux services",
      image: "/images/isolation.png",
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
          title: "Types d'isolation",
          text: "Isolation des murs\n• Isolation par l'intérieur\n• Isolation par l'extérieur\n\nIsolation des combles\n• Combles perdus\n• Combles aménagés\n\nIsolation des sols\n• Planchers bas\n• Dalles flottantes\n\nIsolation acoustique\n• Murs mitoyens\n• Plafonds",
        },
        {
          title: "Étapes d'une isolation réussie",
          text: "1. Diagnostic et étude thermique\n• Analyse des déperditions\n• Devis personnalisé\n\n2. Choix des matériaux\n• Performance thermique\n• Qualité acoustique\n\n3. Préparation des surfaces\n• Nettoyage\n• Repérage\n\n4. Installation de l'isolation\n• Pose professionnelle\n• Finitions soignées\n\n5. Contrôle qualité\n• Tests d'étanchéité\n• Vérification des performances",
        },
        {
          title: "Avantages de l'isolation",
          text: "Économies d'énergie\n• Réduction des factures\n• Performance thermique\n\nConfort amélioré\n• Température constante\n• Isolation acoustique\n\nValorisation du bien\n• Certificat PEB\n• Valeur immobilière\n\nImpact environnemental\n• Réduction CO2\n• Écologie\n\nSanté et bien-être\n• Qualité de l'air\n• Confort acoustique",
        },
        {
          title: "Matériaux d'isolation",
          text: "Laine minérale\n• Performance thermique\n• Isolation acoustique\n\nLaine de verre\n• Conductivité thermique\n• Durabilité\n\nLaine de roche\n• Résistance au feu\n• Isolation phonique\n\nMousse polyuréthane\n• Haute performance\n• Étanchéité\n\nMatériaux biosourcés\n• Écologiques\n• Renouvelables",
        },
        {
          title: "Aides et primes",
          text: "Primes régionales\n• Wallonie\n• Bruxelles\n• Flandre\n\nAccompagnement administratif\n• Dossiers de demande\n• Suivi des démarches\n\nCertificats verts\n• Économies d'énergie\n• Valorisation",
        },
        {
          title: "FAQ",
          text: "Quelle épaisseur d'isolation choisir ?\n• Selon le matériau\n• Selon la zone\n\nCombien de temps pour rentabiliser l'investissement ?\n• 3-5 ans en moyenne\n• Selon les primes\n\nFaut-il un permis pour l'isolation ?\n• Dépend du type de travaux\n• Gestion administrative incluse",
        },
      ],
    },
    nl: {
      title: "Thermische en akoestische isolatie",
      desc: "Wij bieden complete isolatieoplossingen om het comfort en de energie-efficiëntie van uw woning te verbeteren. Verlaag uw energiefacturen terwijl u uw dagelijks comfort verhoogt.",
      back: "Terug naar diensten",
      image: "/images/isolation.png",
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
          title: "Soorten isolatie",
          text: "Muurisolatie\n• Binnenisolatie\n• Buitenisolatie\n\nDakisolatie\n• Niet-bewoonde zolder\n• Bewoonde zolder\n\nVloerisolatie\n• Benedenverdieping\n• Zwevende dekvloer\n\nAkoestische isolatie\n• Scheidingswanden\n• Plafonds",
        },
        {
          title: "Stappen van een geslaagde isolatie",
          text: "1. Diagnose en thermische studie\n• Analyse van warmteverlies\n• Persoonlijke offerte\n\n2. Keuze van materialen\n• Thermische prestaties\n• Akoestische kwaliteit\n\n3. Voorbereiding van oppervlakken\n• Reiniging\n• Markering\n\n4. Installatie van isolatie\n• Professionele plaatsing\n• Nette afwerking\n\n5. Kwaliteitscontrole\n• Luchtdichtheidstests\n• Prestatieverificatie",
        },
        {
          title: "Voordelen van isolatie",
          text: "Energiebesparing\n• Lagere facturen\n• Thermische prestaties\n\nVerbeterd comfort\n• Constante temperatuur\n• Akoestische isolatie\n\nMeerwaarde van het pand\n• EPC-certificaat\n• Vastgoedwaarde\n\nMilieu-impact\n• CO2-reductie\n• Ecologie\n\nGezondheid en welzijn\n• Luchtkwaliteit\n• Akoestisch comfort",
        },
        {
          title: "Isolatiematerialen",
          text: "Minerale wol\n• Thermische prestaties\n• Akoestische isolatie\n\nGlaswol\n• Thermische geleidbaarheid\n• Duurzaamheid\n\nSteenwol\n• Brandwerendheid\n• Geluidsisolatie\n\nPolyurethaanschuim\n• Hoge prestaties\n• Luchtdichtheid\n\nBiobased materialen\n• Ecologisch\n• Hernieuwbaar",
        },
        {
          title: "Premies en hulp",
          text: "Regionale premies\n• Wallonië\n• Brussel\n• Vlaanderen\n\nAdministratieve begeleiding\n• Aanvraagdossiers\n• Opvolging van procedures\n\nGroene certificaten\n• Energiebesparing\n• Waardering",
        },
        {
          title: "FAQ",
          text: "Welke isolatiedikte kiezen?\n• Afhankelijk van materiaal\n• Afhankelijk van zone\n\nHoe lang duurt het om de investering terug te verdienen?\n• Gemiddeld 3-5 jaar\n• Afhankelijk van premies\n\nIs een vergunning nodig voor isolatie?\n• Hangt af van type werk\n• Administratief beheer inbegrepen",
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
                {idx === 0 && <HomeIcon className="w-full h-full" />}
                {idx === 1 && <ClipboardDocumentListIcon className="w-full h-full" />}
                {idx === 2 && <SparklesIcon className="w-full h-full" />}
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