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
      title: "Toiture",
      heroDesc: "Nous réalisons l'installation, la réparation et l'entretien de toitures pour tous types de bâtiments. Nous utilisons des matériaux de haute qualité pour garantir la durabilité et l'esthétique de votre toit. Notre équipe vous accompagne de la conception à la réalisation, en respectant les normes belges et vos attentes.",
      sections: [
        {
          title: "Types de toitures",
          text: "🏠 Nous intervenons sur tous types de toitures :\n\n🏢 Plates : Toits-terrasses, terrasses accessibles\n🏡 Inclinées : Traditionnelles, modernes\n\n🛠️ Matériaux :\n   🧱 Tuiles : Traditionnelles, modernes\n   🪨 Ardoises : Naturelles, synthétiques\n   ⚡ Zinc : Classique, prélaqué\n   🛡️ EPDM : Membranes synthétiques\n\nChaque type de toiture nécessite une expertise spécifique que nous maîtrisons parfaitement.",
        },
        {
          title: "Étapes du chantier",
          text: "📋 1. Analyse et devis personnalisé\n   📊 Étude de faisabilité\n   💰 Devis détaillé\n\n🏗️ 2. Préparation du chantier\n   📐 Mesures précises\n   🛠️ Installation du chantier\n\n🗑️ 3. Dépose éventuelle de l'ancienne toiture\n   🧹 Nettoyage complet\n   ♻️ Évacuation des déchets\n\n🏠 4. Pose de la nouvelle structure et de l'isolation\n   🔨 Structure porteuse\n   🧱 Isolation thermique\n\n🛠️ 5. Installation de la couverture\n   🧱 Pose des matériaux\n   🔍 Contrôle qualité\n\n✨ 6. Finitions et nettoyage du chantier\n   🧹 Nettoyage final\n   ✅ Inspection finale",
        },
        {
          title: "Matériaux utilisés",
          text: "🛠️ Nous sélectionnons des matériaux de qualité supérieure :\n\n🧱 Tuiles terre cuite\n   🏺 Traditionnelles\n   🎨 Coloris variés\n\n🪨 Ardoises naturelles\n   💎 Haute qualité\n   🌧️ Excellente étanchéité\n\n⚡ Zinc\n   🔄 Durabilité\n   🎨 Finitions modernes\n\n🛡️ Membranes synthétiques\n   💧 Étanchéité optimale\n   🔥 Résistance aux UV\n\nNous vous conseillons selon vos besoins et votre budget.",
        },
        {
          title: "Garanties et sécurité",
          text: "🛡️ Nos travaux sont couverts par la garantie décennale.\n\n✅ Normes de sécurité :\n   🏗️ Structure\n   🔥 Résistance au feu\n   💨 Ventilation\n\n💧 Étanchéité :\n   🌧️ Protection contre les intempéries\n   🏠 Isolation thermique\n   🔍 Tests d'étanchéité\n\nNous respectons toutes les normes en vigueur en Belgique.",
        },
        {
          title: "Conseils d'entretien",
          text: "🔧 Un entretien régulier prolonge la durée de vie de votre toiture :\n\n🧹 Nettoyage régulier\n   🍂 Débris végétaux\n   🧪 Traitement anti-mousse\n\n🌧️ Vérification des gouttières\n   🚰 Écoulement\n   🧹 Dégagement\n\n🔍 Contrôle de l'étanchéité\n   💧 Points sensibles\n   🛠️ Réparations\n\n📝 Nous proposons des contrats d'entretien adaptés.",
        },
        {
          title: "FAQ",
          text: "\n❓ Combien de temps dure un chantier de toiture ?\n  ⏳ En général, de quelques jours à deux semaines selon la surface.\n  📊 Planning détaillé fourni\n\n❓ Faut-il un permis ?\n  📝 Oui, dans certains cas. Nous vous accompagnons dans les démarches.\n  📋 Gestion administrative incluse\n\n❓ Proposez-vous des solutions d'isolation ?\n  ✅ Oui, nous intégrons l'isolation à nos prestations.\n  🏠 Solutions adaptées à chaque type de toiture",
        },
      ],
      form: {
        title: "Demander un devis gratuit",
        name: "Nom",
        email: "Email",
        message: "Votre demande",
        send: "Envoyer",
        contactInfo: "Informations de contact",
        address: "Maasdai 167, 1502 Halle, Belgique",
        phone: "+32 476 68 20 36",
        mail: "vigouroux.geoffray@gmail.com",
      },
      back: "Retour aux services",
      image: "/images/metre.png",
    },
    nl: {
      title: "Dakbedekking",
      heroDesc: "Wij verzorgen de installatie, reparatie en het onderhoud van daken voor alle soorten gebouwen. We gebruiken hoogwaardige materialen om de duurzaamheid en esthetiek van uw dak te garanderen. Ons team begeleidt u van ontwerp tot uitvoering, volgens de Belgische normen en uw wensen.",
      sections: [
        {
          title: "Soorten daken",
          text: "🏠 Wij werken op alle soorten daken :\n\n🏢 Plat : Dakterrassen, toegankelijke terrassen\n🏡 Hellend : Traditioneel, modern\n\n🛠️ Materialen :\n   🧱 Pannen : Traditioneel, modern\n   🪨 Leien : Natuurlijk, synthetisch\n   ⚡ Zink : Klassiek, voorgecoat\n   🛡️ EPDM : Synthetische membranen\n\nElk type dak vereist specifieke expertise die wij beheersen.",
        },
        {
          title: "Fasen van het project",
          text: "📋 1. Analyse en persoonlijke offerte\n   📊 Haalbaarheidsstudie\n   💰 Gedetailleerde offerte\n\n🏗️ 2. Voorbereiding van de werf\n   📐 Nauwkeurige metingen\n   🛠️ Werfinrichting\n\n🗑️ 3. Eventuele verwijdering van het oude dak\n   🧹 Volledige reiniging\n   ♻️ Afvoer van afval\n\n🏠 4. Plaatsing van de nieuwe structuur en isolatie\n   🔨 Dragende structuur\n   🧱 Thermische isolatie\n\n🛠️ 5. Installatie van de dakbedekking\n   🧱 Plaatsing van materialen\n   🔍 Kwaliteitscontrole\n\n✨ 6. Afwerking en reiniging van de werf\n   🧹 Eindreiniging\n   ✅ Eindinspectie",
        },
        {
          title: "Gebruikte materialen",
          text: "🛠️ Wij kiezen voor materialen van topkwaliteit :\n\n🧱 Keramische pannen\n   🏺 Traditioneel\n   🎨 Diverse kleuren\n\n🪨 Natuurleien\n   💎 Hoge kwaliteit\n   🌧️ Uitstekende waterdichtheid\n\n⚡ Zink\n   🔄 Duurzaamheid\n   🎨 Moderne afwerkingen\n\n🛡️ Synthetische membranen\n   💧 Optimale waterdichtheid\n   🔥 UV-bestendigheid\n\nWij adviseren u volgens uw behoeften en budget.",
        },
        {
          title: "Garantie en veiligheid",
          text: "🛡️ Onze werken zijn gedekt door de tienjarige garantie.\n\n✅ Veiligheidsnormen :\n   🏗️ Structuur\n   🔥 Brandwerendheid\n   💨 Ventilatie\n\n💧 Waterdichtheid :\n   🌧️ Bescherming tegen weersomstandigheden\n   🏠 Thermische isolatie\n   🔍 Waterdichtheidstests\n\nWij respecteren alle geldende normen in België.",
        },
        {
          title: "Onderhoudstips",
          text: "🔧 Regelmatig onderhoud verlengt de levensduur van uw dak :\n\n🧹 Regelmatige reiniging\n   🍂 Plantaardig afval\n   🧪 Anti-mos behandeling\n\n🌧️ Controle van de goten\n   🚰 Afvoer\n   🧹 Vrijmaken\n\n🔍 Controle van de waterdichtheid\n   💧 Kwetsbare punten\n   🛠️ Reparaties\n\n📝 Wij bieden aangepaste onderhoudscontracten aan.",
        },
        {
          title: "FAQ",
          text: "\n❓ Hoelang duurt een dakproject?\n  ⏳ Meestal enkele dagen tot twee weken, afhankelijk van de oppervlakte.\n  📊 Gedetailleerde planning beschikbaar\n\n❓ Is een vergunning nodig?\n  📝 Ja, in sommige gevallen. Wij begeleiden u bij de formaliteiten.\n  📋 Administratief beheer inbegrepen\n\n❓ Biedt u ook isolatie aan?\n  ✅ Ja, wij integreren isolatie in onze diensten.\n  🏠 Oplossingen aangepast aan elk type dak",
        },
      ],
      form: {
        title: "gratis offerte aanvragen :",
        name: "naam",
        firstname: "voornaam",
        email: "E-mail",
        phone: "telefoonnummer",
        address: "adres",
        send: "voltooien",
      },
      back: "Terug naar diensten",
      image: "/images/metre.png",
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
            <p className="text-white/90 text-lg md:text-xl text-center leading-relaxed mb-8">{t.heroDesc}</p>
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
      <div id="content" className="w-full max-w-4xl px-4 md:px-8 flex flex-col gap-16 py-20">
        {t.sections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-[#FF6F3C]/20 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#FF6F3C] via-[#FF8F5C] to-[#FF6F3C] bg-clip-text text-transparent">{section.title}</h2>
            <div className="prose prose-lg max-w-none">
              <EmojiText 
                text={section.text} 
                className="text-gray-700 whitespace-pre-line text-justify leading-relaxed"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Devis form */}
      <div className="w-full max-w-4xl px-4 md:px-8 mb-16">
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-8 border border-gray-100">
          <DevisForm language={language} />
        </div>
      </div>

      <Footer />
    </main>
  );
} 