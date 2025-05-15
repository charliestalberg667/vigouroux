"use client";
import { useLanguage } from "@/components/language-provider";
import Image from "next/image";
import Link from "next/link";
import DevisForm from "@/components/devis-form";
import Footer from "@/components/footer";
export default function Service1Page() {
  const { language } = useLanguage();
  const content = {
    fr: {
      title: "Isolation",
      desc: "Nous proposons des solutions d'isolation thermique et acoustique pour améliorer le confort et l'efficacité énergétique de votre maison. Une bonne isolation permet de réduire vos factures d'énergie et d'augmenter la valeur de votre bien.",
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
          text: "Nous réalisons l'isolation de toitures inclinées, plates, combles et murs. Nous utilisons des matériaux performants adaptés à chaque configuration : laine de verre, laine de roche, panneaux PIR, mousse polyuréthane, etc.",
        },
        {
          title: "Étapes d'une isolation réussie",
          text: "1. Analyse thermique et devis personnalisé\n2. Préparation du chantier\n3. Pose de l'isolant\n4. Traitement des ponts thermiques\n5. Finitions et contrôle qualité",
        },
        {
          title: "Avantages de l'isolation",
          text: "- Réduction des pertes de chaleur\n- Diminution de la facture énergétique\n- Confort thermique été comme hiver\n- Valorisation de votre bien immobilier",
        },
        {
          title: "Matériaux utilisés",
          text: "Nous sélectionnons des isolants certifiés et performants : laine minérale, panneaux rigides, mousse projetée, etc. Nous vous conseillons selon vos besoins et votre budget.",
        },
        {
          title: "Aides et primes",
          text: "De nombreuses primes sont disponibles pour l'isolation en Belgique. Nous vous accompagnons dans les démarches administratives.",
        },
        {
          title: "FAQ",
          text: "\n- Quelle épaisseur d'isolant choisir ?\n  Cela dépend du matériau et des normes en vigueur. Nous vous conseillons sur mesure.\n- L'isolation est-elle rentable ?\n  Oui, l'investissement est rapidement amorti grâce aux économies d'énergie.\n- Faut-il quitter la maison pendant les travaux ?\n  Non, la plupart des chantiers se font sans gêne majeure.",
        },
      ],
    },
    nl: {
      title: "Isolatie",
      desc: "Wij bieden thermische en akoestische isolatieoplossingen om het comfort en de energie-efficiëntie van uw woning te verbeteren. Goede isolatie verlaagt uw energierekening en verhoogt de waarde van uw huis.",
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
          text: "Wij isoleren hellende en platte daken, zolders en muren. We gebruiken hoogwaardige materialen aangepast aan elke situatie: glaswol, rotswol, PIR-platen, gespoten schuim, enz.",
        },
        {
          title: "Stappen van een geslaagde isolatie",
          text: "1. Thermische analyse en persoonlijke offerte\n2. Voorbereiding van de werf\n3. Plaatsing van het isolatiemateriaal\n4. Behandeling van koudebruggen\n5. Afwerking en kwaliteitscontrole",
        },
        {
          title: "Voordelen van isolatie",
          text: "- Minder warmteverlies\n- Lagere energiefactuur\n- Thermisch comfort in zomer en winter\n- Meerwaarde voor uw woning",
        },
        {
          title: "Gebruikte materialen",
          text: "Wij kiezen voor gecertificeerde en performante isolatiematerialen: minerale wol, harde platen, gespoten schuim, enz. Wij adviseren u volgens uw behoeften en budget.",
        },
        {
          title: "Premies en hulp",
          text: "Er zijn veel premies beschikbaar voor isolatie in België. Wij begeleiden u bij de administratieve stappen.",
        },
        {
          title: "FAQ",
          text: "\n- Welke dikte isolatie heb ik nodig?\n  Dat hangt af van het materiaal en de geldende normen. Wij geven u advies op maat.\n- Is isolatie rendabel?\n  Ja, de investering wordt snel terugverdiend door de energiebesparing.\n- Moet ik het huis verlaten tijdens de werken?\n  Nee, meestal kunnen de werken zonder grote hinder doorgaan.",
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
            <p className="text-gray-700 whitespace-pre-line text-justify leading-relaxed">{section.text}</p>
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