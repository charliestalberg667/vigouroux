"use client";
import { useLanguage } from "@/components/language-provider";
import Image from "next/image";
import Link from "next/link";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaUser, FaPhone, FaMapMarkerAlt, FaAt } from "react-icons/fa";
import DevisForm from "@/components/devis-form";

export default function Service1Page() {
  const { language } = useLanguage();
  const content = {
    fr: {
      title: "Toiture",
      heroDesc: "Nous réalisons l'installation, la réparation et l'entretien de toitures pour tous types de bâtiments. Nous utilisons des matériaux de haute qualité pour garantir la durabilité et l'esthétique de votre toit. Notre équipe vous accompagne de la conception à la réalisation, en respectant les normes belges et vos attentes.",
      sections: [
        {
          title: "Types de toitures",
          text: "Nous intervenons sur tous types de toitures : plates, inclinées, en tuiles, ardoises, zinc ou EPDM. Chaque type de toiture nécessite une expertise spécifique que nous maîtrisons parfaitement.",
        },
        {
          title: "Étapes du chantier",
          text: "1. Analyse et devis personnalisé\n2. Préparation du chantier\n3. Dépose éventuelle de l'ancienne toiture\n4. Pose de la nouvelle structure et de l'isolation\n5. Installation de la couverture\n6. Finitions et nettoyage du chantier",
        },
        {
          title: "Matériaux utilisés",
          text: "Nous sélectionnons des matériaux de qualité supérieure : tuiles terre cuite, ardoises naturelles, zinc, membranes synthétiques, etc. Nous vous conseillons selon vos besoins et votre budget.",
        },
        {
          title: "Garanties et sécurité",
          text: "Nos travaux sont couverts par la garantie décennale. Nous respectons toutes les normes de sécurité et d'étanchéité en vigueur en Belgique.",
        },
        {
          title: "Conseils d'entretien",
          text: "Un entretien régulier prolonge la durée de vie de votre toiture : nettoyage, vérification des gouttières, contrôle de l'étanchéité. Nous proposons des contrats d'entretien adaptés.",
        },
        {
          title: "FAQ",
          text: "\n- Combien de temps dure un chantier de toiture ?\n  En général, de quelques jours à deux semaines selon la surface.\n- Faut-il un permis ?\n  Oui, dans certains cas. Nous vous accompagnons dans les démarches.\n- Proposez-vous des solutions d'isolation ?\n  Oui, nous intégrons l'isolation à nos prestations.",
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
          text: "Wij werken op alle soorten daken: plat, hellend, met pannen, leien, zink of EPDM. Elk type dak vereist specifieke expertise die wij beheersen.",
        },
        {
          title: "Fasen van het project",
          text: "1. Analyse en persoonlijke offerte\n2. Voorbereiding van de werf\n3. Eventuele verwijdering van het oude dak\n4. Plaatsing van de nieuwe structuur en isolatie\n5. Installatie van de dakbedekking\n6. Afwerking en reiniging van de werf",
        },
        {
          title: "Gebruikte materialen",
          text: "Wij kiezen voor materialen van topkwaliteit: keramische pannen, natuurleien, zink, synthetische membranen, enz. Wij adviseren u volgens uw behoeften en budget.",
        },
        {
          title: "Garantie en veiligheid",
          text: "Onze werken zijn gedekt door de tienjarige garantie. Wij respecteren alle geldende veiligheids- en waterdichtheidsnormen in België.",
        },
        {
          title: "Onderhoudstips",
          text: "Regelmatig onderhoud verlengt de levensduur van uw dak: reiniging, controle van de goten, controle van de waterdichtheid. Wij bieden aangepaste onderhoudscontracten aan.",
        },
        {
          title: "FAQ",
          text: "\n- Hoelang duurt een dakproject?\n  Meestal enkele dagen tot twee weken, afhankelijk van de oppervlakte.\n- Is een vergunning nodig?\n  Ja, in sommige gevallen. Wij begeleiden u bij de formaliteiten.\n- Biedt u ook isolatie aan?\n  Ja, wij integreren isolatie in onze diensten.",
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
      image: "/images/roof-installation.jpg",
    },
  };
  const t = content[language];
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#F7F7FA] py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <Image src={t.image} alt={t.title} width={320} height={180} className="rounded-xl mb-8 object-cover w-full h-48" />
        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#FF6F3C] to-[#FF8F5C] bg-clip-text text-transparent text-center">{t.title}</h1>
        <p className="text-gray-700 text-lg mb-8 text-justify">{t.heroDesc}</p>
        {t.sections.map((section, idx) => (
          <div key={idx} className="mb-8 w-full">
            <h2 className="text-xl font-bold mb-2 text-[#FF6F3C]">{section.title}</h2>
            <p className="text-gray-700 whitespace-pre-line text-justify">{section.text}</p>
          </div>
        ))}
        <DevisForm language={language} />
        <Link href="/#services" className="self-center mt-12">
          <button className="bg-[#FF6F3C] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#FF8F5C] transition-colors duration-300">
            {t.back}
          </button>
        </Link>
      </div>
    </main>
  );
} 