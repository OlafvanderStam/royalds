import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onze Diensten | Royal DS International",
  description: "Personeelsuitzending, werving & selectie, projectuitvoering en detachering voor de maritieme industrie.",
};

const diensten = [
  {
    id: "uitzending",
    title: "Personeelsuitzending",
    subtitle: "Flexibele inzet van vakmensen wereldwijd",
    description: "Royal DS International verzorgt de uitzending van gekwalificeerde vakmensen voor uw maritieme en industriële projecten. Wij bieden flexibele oplossingen voor tijdelijke personeelsbehoefte, van enkele weken tot langdurige projecten.",
    features: [
      "Snelle beschikbaarheid van gekwalificeerd personeel",
      "Flexibele contractvormen",
      "Volledige ontzorging (huisvesting, transport, administratie)",
      "Wereldwijde inzetbaarheid",
      "24/7 ondersteuning",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: "werving",
    title: "Werving & Selectie",
    subtitle: "De juiste match voor permanente functies",
    description: "Onze werving & selectie dienst richt zich op het vinden van de perfecte kandidaat voor permanente functies binnen uw organisatie. Met ons uitgebreide netwerk en diepgaande kennis van de maritieme sector vinden wij specialisten die passen bij uw bedrijfscultuur.",
    features: [
      "Uitgebreid internationaal netwerk",
      "Grondige screening en selectie",
      "Referentie- en diplomacontrole",
      "Begeleiding tijdens onboarding",
      "Garantieregeling",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    id: "projecten",
    title: "Projectuitvoering",
    subtitle: "Complete teams voor uw projecten",
    description: "Voor grote projecten leveren wij complete teams inclusief projectmanagement. Van planning tot oplevering nemen wij de volledige verantwoordelijkheid voor de personele bezetting. Dit omvat werving, selectie, planning, huisvesting en dagelijkse aansturing.",
    features: [
      "Volledige projectteams",
      "Projectmanagement op locatie",
      "Planning en coördinatie",
      "Kwaliteitscontrole",
      "Rapportage en communicatie",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    id: "detachering",
    title: "Detachering",
    subtitle: "Langdurige inzet van professionals",
    description: "Bij detachering werken onze professionals langdurig bij uw organisatie terwijl zij in dienst blijven bij Royal DS International. Dit biedt u de flexibiliteit van extern personeel met de betrokkenheid van vaste medewerkers.",
    features: [
      "Langdurige samenwerking",
      "Professionals in vaste dienst bij Royal DS",
      "Geen administratieve rompslomp",
      "Flexibele opzegmogelijkheden",
      "Overname naar vast dienstverband mogelijk",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

const extraServices = [
  {
    title: "Huisvesting",
    description: "Wij regelen geschikte huisvesting voor uw werknemers, van appartementen tot complete woonunits.",
    icon: "🏠",
  },
  {
    title: "Transport",
    description: "Vervoer van en naar de werklocatie, inclusief internationaal transport bij grensoverschrijdende projecten.",
    icon: "🚐",
  },
  {
    title: "Administratie",
    description: "Volledige salarisadministratie, contractbeheer en naleving van wet- en regelgeving.",
    icon: "📋",
  },
  {
    title: "Certificering",
    description: "Begeleiding bij het behalen van benodigde certificaten en opleidingen.",
    icon: "🎓",
  },
];

export default function DienstenPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-navy pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-teal-light mb-4">
              Onze Diensten
            </p>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Wat wij voor u kunnen betekenen
            </h1>
            <p className="mt-6 text-lg text-silver-light leading-relaxed">
              Van flexibele personeelsuitzending tot complete projectuitvoering - Royal DS International
              biedt een breed scala aan diensten voor de maritieme en industriële sector.
            </p>
          </div>
        </div>
      </section>

      {/* Diensten Detail */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {diensten.map((dienst, index) => (
              <div
                key={dienst.id}
                id={dienst.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal/10 text-teal mb-6">
                    {dienst.icon}
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-navy">
                    {dienst.title}
                  </h2>
                  <p className="mt-2 text-lg text-teal font-medium">
                    {dienst.subtitle}
                  </p>
                  <p className="mt-4 text-grey leading-relaxed">
                    {dienst.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {dienst.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-grey">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white hover:bg-orange-light transition-colors"
                  >
                    Meer informatie aanvragen
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} bg-sand rounded-2xl p-8 lg:p-12`}>
                  <div className="aspect-video bg-navy-light/20 rounded-xl flex items-center justify-center">
                    <div className="text-6xl">{dienst.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Services */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-navy">
              Complete ontzorging
            </h2>
            <p className="mt-4 text-grey max-w-2xl mx-auto">
              Naast onze kerndiensten bieden wij een scala aan ondersteunende services
              voor een zorgeloze samenwerking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {extraServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-heading text-lg font-semibold text-navy">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-grey">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-light py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Wilt u meer weten over onze diensten?
          </h2>
          <p className="mt-4 text-silver-light max-w-2xl mx-auto">
            Neem vrijblijvend contact met ons op voor een persoonlijk gesprek over uw wensen en mogelijkheden.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-orange px-8 py-4 text-base font-semibold text-white hover:bg-orange-light transition-colors"
            >
              Neem contact op
            </Link>
            <Link
              href="/opdrachtgevers"
              className="rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Meer voor opdrachtgevers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
