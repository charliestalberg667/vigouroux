"use client";
import { useLanguage } from "@/components/language-provider";

export default function PolicyPage() {
  const { language } = useLanguage();
  const content = {
    fr: {
      title: "Politique de Confidentialité",
      intro: "Votre vie privée est importante pour nous. Veuillez lire notre politique de confidentialité.",
      placeholder: `1. Collecte des données
Nous ne collectons aucune donnée personnelle via ce site internet. Seules des données de navigation anonymes sont recueillies à des fins statistiques via Google Analytics.

2. Utilisation des cookies
Google Analytics utilise des cookies pour analyser l'utilisation du site. Vous pouvez refuser ces cookies en modifiant les paramètres de votre navigateur.

3. Finalité
Les données collectées servent uniquement à améliorer l'expérience utilisateur et à établir des statistiques de fréquentation du site.

4. Partage des données
Aucune donnée personnelle n'est transmise à des tiers.

5. Droits des utilisateurs
Conformément au RGPD, vous pouvez demander l'accès, la rectification ou la suppression de vos données de navigation auprès de Google. Pour plus d'informations, consultez la politique de confidentialité de Google.

6. Contact
Pour toute question relative à la confidentialité, contactez-nous à vigouroux.geoffray@gmail.com.
`,
    },
    nl: {
      title: "Privacybeleid",
      intro: "Uw privacy is belangrijk voor ons. Lees ons privacybeleid.",
      placeholder: `1. Gegevensverzameling
Wij verzamelen geen persoonsgegevens via deze website. Enkel anonieme surfgegevens worden verzameld voor statistische doeleinden via Google Analytics.

2. Gebruik van cookies
Google Analytics gebruikt cookies om het gebruik van de site te analyseren. U kunt deze cookies weigeren via uw browserinstellingen.

3. Doel
De verzamelde gegevens worden uitsluitend gebruikt om de gebruikerservaring te verbeteren en bezoekersstatistieken op te stellen.

4. Gegevensdeling
Er worden geen persoonsgegevens aan derden doorgegeven.

5. Rechten van gebruikers
Conform de GDPR kunt u inzage, correctie of verwijdering van uw surfgegevens aanvragen bij Google. Raadpleeg het privacybeleid van Google voor meer informatie.

6. Contact
Voor vragen over privacy kunt u ons contacteren via vigouroux.geoffray@gmail.com.
`,
    },
  };
  const t = content[language];
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#F7F7FA] py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#FF6F3C] to-[#FF8F5C] bg-clip-text text-transparent">{t.title}</h1>
        <p className="mb-8 text-gray-600">{t.intro}</p>
        <div className="text-gray-700 whitespace-pre-line">{t.placeholder}</div>
      </div>
    </main>
  );
} 