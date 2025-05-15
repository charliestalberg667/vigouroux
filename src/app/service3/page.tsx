"use client";
import { useLanguage } from "@/components/language-provider";
import Image from "next/image";
import Link from "next/link";
import DevisForm from "@/components/devis-form";
import Footer from "@/components/footer";
import { EmojiText } from "@/components/emoji-text";

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
          text: "☀️ Nous proposons l'installation de panneaux photovoltaïques, thermiques et hybrides. Nous adaptons la solution à vos besoins : autoconsommation, revente d'énergie, ou combinaison des deux.",
        },
        {
          title: "Étapes d'une installation réussie",
          text: "📋 1. Étude de faisabilité et devis personnalisé\n🏠 2. Analyse de la toiture et orientation\n🔧 3. Installation des panneaux et onduleurs\n⚡ 4. Mise en service et raccordement\n📚 5. Formation et suivi",
        },
        {
          title: "Avantages des panneaux solaires",
          text: "✅ Production d'énergie renouvelable\n💰 Réduction de la facture énergétique\n🔌 Indépendance énergétique\n📈 Valorisation de votre bien immobilier\n🌱 Impact positif sur l'environnement",
        },
        {
          title: "Matériaux et équipements",
          text: "🔍 Nous utilisons des panneaux solaires de haute qualité, des onduleurs performants et des systèmes de fixation adaptés à votre toiture. Nous sélectionnons les meilleures marques du marché.",
        },
        {
          title: "Aides et primes",
          text: "💶 De nombreuses primes sont disponibles pour l'installation de panneaux solaires en Belgique. Nous vous accompagnons dans les démarches administratives et l'obtention des aides.",
        },
        {
          title: "FAQ",
          text: "\n❓ Quelle est la durée de vie des panneaux solaires ?\n  ⏳ En moyenne 25-30 ans avec une garantie de performance.\n❓ Combien de temps pour rentabiliser l'investissement ?\n  💰 Généralement 5-7 ans selon votre consommation et les primes.\n❓ Faut-il une autorisation pour l'installation ?\n  📝 Oui, nous gérons les démarches administratives nécessaires.",
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
          text: "☀️ Wij installeren fotovoltaïsche, thermische en hybride panelen. We passen de oplossing aan aan uw behoeften: zelfverbruik, energieverkoop of een combinatie van beide.",
        },
        {
          title: "Stappen van een geslaagde installatie",
          text: "📋 1. Haalbaarheidsstudie en persoonlijke offerte\n🏠 2. Analyse van het dak en oriëntatie\n🔧 3. Installatie van panelen en omvormers\n⚡ 4. Inbedrijfstelling en aansluiting\n📚 5. Training en opvolging",
        },
        {
          title: "Voordelen van zonnepanelen",
          text: "✅ Productie van hernieuwbare energie\n💰 Lagere energiefactuur\n🔌 Energie-onafhankelijkheid\n📈 Meerwaarde voor uw woning\n🌱 Positieve impact op het milieu",
        },
        {
          title: "Materialen en apparatuur",
          text: "🔍 Wij gebruiken hoogwaardige zonnepanelen, performante omvormers en bevestigingssystemen aangepast aan uw dak. We selecteren de beste merken op de markt.",
        },
        {
          title: "Premies en hulp",
          text: "💶 Er zijn veel premies beschikbaar voor zonnepanelen in België. Wij begeleiden u bij de administratieve stappen en het verkrijgen van de premies.",
        },
        {
          title: "FAQ",
          text: "\n❓ Wat is de levensduur van zonnepanelen?\n  ⏳ Gemiddeld 25-30 jaar met een prestatiegarantie.\n❓ Hoe lang duurt het om de investering terug te verdienen?\n  💰 Meestal 5-7 jaar, afhankelijk van uw verbruik en de premies.\n❓ Is een vergunning nodig voor de installatie?\n  📝 Ja, wij verzorgen de nodige administratieve procedures.",
        },
      ],
    },
  };
  const t = content[language];
  return (
    <main className="min-h-screen bg-white flex flex-col items-center">
      {/* Hero section with image */}
      <div className="w-full relative h-screen">
        <Image 
          src={t.image} 
          alt={t.title} 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-8 pt-64">
          <div className="max-w-3xl w-full flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white text-center drop-shadow-lg tracking-tight mt-16">{t.title}</h1>
            <p className="text-white/90 text-lg md:text-xl text-center leading-relaxed mb-8">{t.desc}</p>
            <Link 
              href="#content" 
              className="group inline-flex items-center gap-2 bg-[#FF6F3C]/20 hover:bg-[#FF6F3C]/20 text-white px-6 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 shadow-md font-semibold"
            >
              {language === 'fr' ? 'En savoir plus' : 'Meer weten'}
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Content sections */}
      <div id="content" className="w-full max-w-3xl px-4 md:px-8 flex flex-col gap-12 py-16">
        {t.sections.map((section, idx) => (
          <div key={idx} className="bg-white border-b border-gray-100 pb-8">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#FF6F3C] to-[#FF8F5C] bg-clip-text text-transparent">{section.title}</h2>
            <EmojiText text={section.text} className="text-gray-700 whitespace-pre-line text-justify leading-relaxed" />
          </div>
        ))}
      </div>

      {/* Devis form */}
      <div className="w-full max-w-3xl px-4 md:px-8 mb-12">
        <DevisForm language={language} />
      </div>

      <Footer />
    </main>
  );
} 