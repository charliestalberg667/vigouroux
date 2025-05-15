"use client";
import { useLanguage } from "@/components/language-provider";

export default function ConditionsPage() {
  const { language } = useLanguage();
  const content = {
    fr: {
      title: "Conditions Générales de Vente",
      intro: "Veuillez lire attentivement nos conditions générales de vente. Pour toute question, contactez-nous.",
      placeholder: `1. Objet
Les présentes conditions générales régissent toutes les prestations de travaux de toiture réalisées par Vigouroux pour ses clients en Belgique.

2. Devis et Commande
Toute demande de travaux fait l'objet d'un devis gratuit, valable 30 jours. La commande est considérée comme acceptée après signature du devis par le client.

3. Prix et Paiement
Les prix sont exprimés en euros, TVA comprise. Un acompte de 30% est exigé à la commande, le solde à la réception des travaux. Tout retard de paiement entraîne de plein droit des intérêts de retard au taux légal.

4. Délais d'Exécution
Les délais sont donnés à titre indicatif. Un retard ne peut donner lieu à des dommages et intérêts, sauf stipulation contraire écrite.

5. Réception des Travaux
La réception a lieu dès la fin des travaux. Toute réserve doit être notifiée par écrit dans les 8 jours.

6. Garanties
Les travaux de toiture bénéficient d'une garantie décennale conformément à la législation belge. Les matériaux sont garantis selon les conditions du fabricant.

7. Responsabilités
Vigouroux décline toute responsabilité en cas de force majeure ou de défaut d'entretien ultérieur par le client.

8. Litiges
En cas de litige, les parties s'efforceront de trouver une solution à l'amiable. À défaut, seuls les tribunaux de l'arrondissement du siège social de Vigouroux sont compétents.

9. Protection des Données
Les données personnelles sont traitées conformément au RGPD. Le client peut demander l'accès, la rectification ou la suppression de ses données à tout moment.

10. Acceptation
La signature du devis implique l'acceptation sans réserve des présentes conditions générales de vente.`,
    },
    nl: {
      title: "Algemene Verkoopsvoorwaarden",
      intro: "Lees aandachtig onze algemene verkoopsvoorwaarden. Neem contact met ons op bij vragen.",
      placeholder: `1. Doel
Deze algemene voorwaarden zijn van toepassing op alle dakwerken uitgevoerd door Vigouroux voor haar klanten in België.

2. Offerte en Bestelling
Elke aanvraag wordt voorafgegaan door een gratis offerte, 30 dagen geldig. De bestelling is aanvaard na ondertekening van de offerte door de klant.

3. Prijs en Betaling
Prijzen zijn in euro, inclusief btw. Een voorschot van 30% is verschuldigd bij bestelling, het saldo bij oplevering. Bij laattijdige betaling zijn van rechtswege wettelijke interesten verschuldigd.

4. Uitvoeringstermijnen
Termijnen zijn indicatief. Vertraging geeft geen recht op schadevergoeding, tenzij schriftelijk anders overeengekomen.

5. Oplevering
De oplevering gebeurt bij voltooiing van de werken. Bezwaren moeten schriftelijk worden gemeld binnen 8 dagen.

6. Garanties
Dakwerken genieten een tienjarige garantie volgens de Belgische wetgeving. Materialen zijn gegarandeerd volgens de voorwaarden van de fabrikant.

7. Aansprakelijkheid
Vigouroux is niet aansprakelijk bij overmacht of bij gebrekkig onderhoud door de klant na de werken.

8. Geschillen
Bij geschil zoeken partijen een minnelijke oplossing. Bij gebrek daaraan zijn enkel de rechtbanken van het arrondissement van de maatschappelijke zetel van Vigouroux bevoegd.

9. Gegevensbescherming
Persoonsgegevens worden verwerkt volgens de GDPR. De klant kan op elk moment inzage, correctie of verwijdering van zijn gegevens vragen.

10. Aanvaarding
Ondertekening van de offerte geldt als onvoorwaardelijke aanvaarding van deze algemene verkoopsvoorwaarden.`,
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