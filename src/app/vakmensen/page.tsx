import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voor Vakmensen | Royal DS International",
  description: "Ontdek uitdagende banen in de maritieme sector. Royal DS International biedt werk wereldwijd met goede voorwaarden.",
};

const benefits = [
  {
    title: "Goede beloning",
    description: "Marktconforme salarissen met aanvullende vergoedingen voor reis, verblijf en overwerkuren.",
    icon: "💰",
  },
  {
    title: "Huisvesting geregeld",
    description: "Wij zorgen voor comfortabele huisvesting in de buurt van uw werklocatie.",
    icon: "🏠",
  },
  {
    title: "Transport verzorgd",
    description: "Vervoer van en naar de werkplek, inclusief internationaal transport indien nodig.",
    icon: "🚐",
  },
  {
    title: "Persoonlijke begeleiding",
    description: "Een vast contactpersoon die altijd voor u klaarstaat, ook buiten kantooruren.",
    icon: "👤",
  },
  {
    title: "Interessante projecten",
    description: "Werk aan prestigieuze scheeps- en jachtbouwprojecten wereldwijd.",
    icon: "⚓",
  },
  {
    title: "Doorgroeimogelijkheden",
    description: "Investeer in uw carrière met opleidingen en certificeringen.",
    icon: "📈",
  },
];

const vacatureTypes = [
  {
    title: "Lassers",
    roles: ["MIG/MAG lasser", "TIG lasser", "Pijplasser", "Constructielasser"],
    sector: "Maritiem & Offshore",
  },
  {
    title: "Scheepsbouwers",
    roles: ["Plaatwerker", "Bankwerker", "Monteur", "Voorman"],
    sector: "Scheepsbouw",
  },
  {
    title: "Interieurbouwers",
    roles: ["Meubelmaker", "Interieurbouwer", "Afbouwer", "Stukadoor"],
    sector: "Jachtbouw & Afbouw",
  },
  {
    title: "Technici",
    roles: ["Elektricien", "Loodgieter", "HVAC monteur", "Instrumentatie"],
    sector: "Alle sectoren",
  },
];

const testimonials = [
  {
    quote: "Royal DS regelt alles tot in de puntjes. Ik kan me volledig focussen op mijn werk.",
    name: "Jan de Vries",
    role: "Scheepslasser",
    years: "5 jaar via Royal DS",
  },
  {
    quote: "De projecten zijn uitdagend en de begeleiding is persoonlijk. Voelt als een familie.",
    name: "Piotr Kowalski",
    role: "Interieurbouwer",
    years: "3 jaar via Royal DS",
  },
  {
    quote: "Goede voorwaarden en interessant werk aan superjachten. Kan het iedereen aanraden.",
    name: "Andrei Popescu",
    role: "TIG Lasser",
    years: "4 jaar via Royal DS",
  },
];

export default function VakmensenPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-navy pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-teal-light mb-4">
              Voor Vakmensen
            </p>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Bouw aan je toekomst in de maritieme sector
            </h1>
            <p className="mt-6 text-lg text-silver-light leading-relaxed">
              Ben je een ervaren vakman op zoek naar uitdagend werk? Royal DS International
              biedt interessante projecten wereldwijd met uitstekende voorwaarden en volledige ontzorging.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/vacatures"
                className="rounded-full bg-orange px-8 py-4 text-base font-semibold text-white hover:bg-orange-light transition-colors text-center"
              >
                Bekijk vacatures
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors text-center"
              >
                Schrijf je in
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Wat bieden wij jou?
            </h2>
            <p className="mt-4 text-grey max-w-2xl mx-auto">
              Bij Royal DS International draait alles om de vakman. Wij zorgen voor de beste voorwaarden
              zodat jij je kunt focussen op waar je goed in bent.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-sand rounded-2xl p-6">
                <span className="text-4xl">{benefit.icon}</span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-navy">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-grey">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Types */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-teal mb-2">
              Functies
            </p>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Wij zoeken vakmensen zoals jij
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vacatureTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-2xl p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-teal/10 text-teal mb-4">
                  {type.sector}
                </span>
                <h3 className="font-heading text-xl font-semibold text-navy">
                  {type.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {type.roles.map((role) => (
                    <li key={role} className="text-sm text-grey flex items-center gap-2">
                      <svg className="h-4 w-4 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {role}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/vacatures"
                  className="mt-6 inline-flex items-center text-sm font-medium text-teal hover:text-orange transition-colors"
                >
                  Bekijk vacatures
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-teal-light mb-2">
              Ervaringen
            </p>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Wat onze vakmensen zeggen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-navy-light rounded-2xl p-6">
                <svg className="h-8 w-8 text-orange mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-silver-light italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-silver">{testimonial.role}</p>
                  <p className="text-xs text-teal-light mt-1">{testimonial.years}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-gradient-to-br from-teal to-teal-light rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Klaar voor je volgende uitdaging?
            </h2>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto">
              Schrijf je vandaag nog in en ontdek de mogelijkheden. Wij nemen binnen 24 uur contact met je op.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/vacatures"
                className="rounded-full bg-white px-8 py-4 text-base font-semibold text-teal hover:bg-sand transition-colors"
              >
                Bekijk vacatures
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
