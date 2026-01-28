import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jachtbouw | Royal DS International",
  description: "Specialisten voor luxe jachten en superyachts. Interieurbouwers, meubelmakers en afwerking experts.",
};

const roles = [
  {
    title: "Interieurbouwers",
    description: "Hoogwaardige afbouw van luxe jachtinterieurs.",
    count: "25+",
  },
  {
    title: "Meubelmakers",
    description: "Vakmanschap op maat voor exclusief meubilair.",
    count: "20+",
  },
  {
    title: "TIG Lassers",
    description: "Gespecialiseerd in RVS en aluminium voor jachtbouw.",
    count: "15+",
  },
  {
    title: "Stoffeerders",
    description: "Luxe bekleding en afwerking.",
    count: "10+",
  },
  {
    title: "Schilders",
    description: "Hoogglans afwerking en coating specialisten.",
    count: "10+",
  },
];

const highlights = [
  "Superjachten 40m+",
  "Luxe motorjachten",
  "Zeiljachten",
  "Tenders en bijboten",
  "Refits en renovaties",
];

export default function JachtbouwPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/sectoren" className="inline-flex items-center text-teal-light hover:text-orange mb-6 transition-colors">
            <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Alle sectoren
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-orange/20 text-orange-light mb-4">
              Sector
            </span>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Jachtbouw
            </h1>
            <p className="mt-6 text-lg text-silver-light leading-relaxed">
              Nederlandse jachtbouw staat wereldwijd bekend om kwaliteit en vakmanschap.
              Wij leveren de beste interieurbouwers, meubelmakers en specialisten voor
              de meest prestigieuze superjachtprojecten.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-orange py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-heading text-4xl font-bold text-white">80+</p>
              <p className="text-white/80 text-sm mt-1">Vakmensen beschikbaar</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-white">30+</p>
              <p className="text-white/80 text-sm mt-1">Jachtprojecten</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-white">5</p>
              <p className="text-white/80 text-sm mt-1">Landen actief</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-white">100%</p>
              <p className="text-white/80 text-sm mt-1">Oog voor detail</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-navy mb-12">
            Functies in deze sector
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role) => (
              <div key={role.title} className="bg-sand rounded-2xl p-6">
                <div className="flex items-start justify-between">
                  <h3 className="font-heading text-lg font-semibold text-navy">
                    {role.title}
                  </h3>
                  <span className="px-2 py-1 bg-orange/10 text-orange text-sm font-medium rounded-full">
                    {role.count}
                  </span>
                </div>
                <p className="mt-2 text-grey text-sm">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy">
                Onze expertise
              </h2>
              <p className="mt-4 text-grey">
                Van exclusieve superjachten tot klassieke zeiljachten - wij leveren
                vakmensen met de hoogste kwaliteitsstandaarden.
              </p>
              <ul className="mt-6 space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy rounded-2xl p-8 text-center">
              <span className="text-8xl">⛵</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-light py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Op zoek naar jachtbouw specialisten?
          </h2>
          <p className="mt-4 text-silver-light">
            Wij leveren de beste vakmensen voor uw exclusieve projecten.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="rounded-full bg-orange px-8 py-4 font-semibold text-white hover:bg-orange-light transition-colors">
              Personeel aanvragen
            </Link>
            <Link href="/vacatures" className="rounded-full border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-colors">
              Bekijk vacatures
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
