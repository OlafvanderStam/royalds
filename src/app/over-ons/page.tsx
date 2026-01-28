import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over Ons | Royal DS International",
  description: "Leer meer over Royal DS International - uw partner in maritieme recruitment sinds 2016.",
};

const timeline = [
  {
    year: "2016",
    title: "Oprichting",
    description: "Royal DS International opgericht als onderdeel van Royal DS Holding in Nijmegen.",
  },
  {
    year: "2018",
    title: "Internationale expansie",
    description: "Start van internationale projecten en uitbreiding netwerk in Europa.",
  },
  {
    year: "2020",
    title: "Groei ondanks uitdagingen",
    description: "Doorontwikkeling dienstverlening en versterking klantrelaties.",
  },
  {
    year: "2024",
    title: "500+ geplaatste vakmensen",
    description: "Mijlpaal bereikt met meer dan 500 succesvol geplaatste professionals.",
  },
];

const values = [
  {
    title: "Kwaliteit",
    description: "Wij staan voor de hoogste kwaliteit in alles wat we doen. Van de selectie van vakmensen tot de uitvoering van projecten.",
    icon: "⭐",
  },
  {
    title: "Betrouwbaarheid",
    description: "Afspraak is afspraak. Onze opdrachtgevers en vakmensen kunnen op ons rekenen, 24/7.",
    icon: "🤝",
  },
  {
    title: "Vakmanschap",
    description: "\"Oude rotten in het vak\" - wij werken met ervaren professionals die hun vak verstaan.",
    icon: "🔧",
  },
  {
    title: "Persoonlijk",
    description: "Geen nummer, maar een naam. Wij geloven in persoonlijke relaties en maatwerk.",
    icon: "👥",
  },
];

const certifications = [
  {
    name: "SNA Keurmerk",
    description: "Stichting Normering Arbeid certificering voor betrouwbare dienstverlening",
    icon: "✓",
  },
  {
    name: "NEN 4400-1",
    description: "Norm voor het toetsen van uitzendondernemingen",
    icon: "✓",
  },
  {
    name: "Gecertificeerd uitzendbureau",
    description: "Voldoet aan alle wettelijke eisen voor uitzendwerk",
    icon: "✓",
  },
];

const team = [
  {
    name: "Directie",
    description: "Ervaren ondernemers met jarenlange achtergrond in de maritieme sector en uitzendbranche.",
  },
  {
    name: "Account Managers",
    description: "Uw vaste aanspreekpunt voor alle vragen rondom personeel en projecten.",
  },
  {
    name: "Recruiters",
    description: "Specialisten in het vinden en selecteren van de beste vakmensen.",
  },
  {
    name: "Backoffice",
    description: "Zorgt voor een vlekkeloze administratie en ondersteuning.",
  },
];

export default function OverOnsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-navy pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-teal-light mb-4">
              Over Royal DS International
            </p>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Samen één stap in de goede richting
            </h1>
            <p className="mt-6 text-lg text-silver-light leading-relaxed">
              Royal DS International is onderdeel van Royal DS Holding en gespecialiseerd in
              wereldwijde personeelsuitzending, werving en selectie, en complete projectuitvoering
              voor de maritieme en jachtbouw industrie.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-teal mb-2">
                Ons verhaal
              </p>
              <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
                Oude rotten in het vak
              </h2>
              <p className="mt-6 text-grey leading-relaxed">
                Royal DS International is opgericht door professionals met decennia ervaring
                in de maritieme sector. Wij kennen de industrie van binnenuit - de uitdagingen,
                de kansen en vooral: de mensen.
              </p>
              <p className="mt-4 text-grey leading-relaxed">
                Vanuit ons kantoor in Nijmegen bedienen wij opdrachtgevers en vakmensen over
                de hele wereld. Onze aanpak is persoonlijk en pragmatisch: wij zorgen ervoor
                dat de juiste mensen op de juiste plek terechtkomen.
              </p>
              <p className="mt-4 text-grey leading-relaxed">
                Wij geloven in langdurige relaties, niet in snelle transacties. Daarom investeren
                wij in onze vakmensen en bouwen wij aan partnerships met onze opdrachtgevers.
              </p>
            </div>
            <div className="bg-sand rounded-2xl p-8">
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={item.year} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-teal flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{item.year}</span>
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 h-8 bg-teal/20 mx-auto mt-2" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-navy">{item.title}</h3>
                      <p className="text-sm text-grey mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-teal mb-2">
              Onze waarden
            </p>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Waar wij voor staan
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 text-center">
                <span className="text-4xl">{value.icon}</span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-navy">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-grey">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certificering" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-teal mb-2">
                Certificeringen
              </p>
              <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
                SNA gecertificeerd
              </h2>
              <p className="mt-6 text-grey leading-relaxed">
                Royal DS International is volledig gecertificeerd volgens de normen van de
                Stichting Normering Arbeid (SNA). Dit betekent dat wij voldoen aan alle eisen
                op het gebied van identiteit, legaliteit van arbeid en naleving van cao-verplichtingen.
              </p>
              <p className="mt-4 text-grey leading-relaxed">
                Het SNA-keurmerk is uw garantie voor een betrouwbare partner die alle wet- en
                regelgeving correct naleeft.
              </p>
            </div>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-start gap-4 bg-sand rounded-xl p-4">
                  <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{cert.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-navy">{cert.name}</h3>
                    <p className="text-sm text-grey mt-1">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Royal DS Family */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-teal-light mb-2">
              De Royal DS Familie
            </p>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Onderdeel van Royal DS Holding
            </h2>
            <p className="mt-4 text-silver-light max-w-2xl mx-auto">
              Royal DS International is onderdeel van een groep gespecialiseerde bedrijven
              binnen de uitzendbranche.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://royaldspersoneel-service.nl/personeel-service"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-light rounded-2xl p-6 hover:bg-navy-light/80 transition-colors group"
            >
              <h3 className="font-heading text-xl font-semibold text-white group-hover:text-orange transition-colors">
                Royal DS Personeel-service
              </h3>
              <p className="mt-2 text-silver-light text-sm">
                Uitzendbureau gespecialiseerd in maritieme en jachtbouwprojecten in Nederland.
              </p>
              <span className="mt-4 inline-flex items-center text-teal-light text-sm">
                Bezoek website →
              </span>
            </a>
            <a
              href="https://royalds-management.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-light rounded-2xl p-6 hover:bg-navy-light/80 transition-colors group"
            >
              <h3 className="font-heading text-xl font-semibold text-white group-hover:text-orange transition-colors">
                Royal DS Management
              </h3>
              <p className="mt-2 text-silver-light text-sm">
                Specialisten voor de moeilijkste klussen met focus op topprestaties.
              </p>
              <span className="mt-4 inline-flex items-center text-teal-light text-sm">
                Bezoek website →
              </span>
            </a>
            <a
              href="https://royaldspersoneel-service.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-light rounded-2xl p-6 hover:bg-navy-light/80 transition-colors group"
            >
              <h3 className="font-heading text-xl font-semibold text-white group-hover:text-orange transition-colors">
                Royal DS Holding
              </h3>
              <p className="mt-2 text-silver-light text-sm">
                Administratie en adviesbureau gespecialiseerd in de uitzendbranche.
              </p>
              <span className="mt-4 inline-flex items-center text-teal-light text-sm">
                Bezoek website →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Wilt u meer weten?
          </h2>
          <p className="mt-4 text-grey max-w-2xl mx-auto">
            Neem contact met ons op voor een vrijblijvend gesprek over uw wensen en mogelijkheden.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-orange px-8 py-4 text-base font-semibold text-white hover:bg-orange-light transition-colors"
            >
              Neem contact op
            </Link>
            <Link
              href="/diensten"
              className="rounded-full border-2 border-navy px-8 py-4 text-base font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
            >
              Bekijk onze diensten
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
