import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Afbouw & Interieur | Royal DS International",
  description: "Stukadoors en afbouwspecialisten voor hoogwaardige bouw- en renovatieprojecten.",
};

const roles = [
  {
    title: "Stukadoors",
    description: "Traditioneel en modern stucwerk voor alle projecten.",
    count: "25+",
  },
  {
    title: "Tegelzetters",
    description: "Wandtegels, vloertegels en natuursteen.",
    count: "15+",
  },
  {
    title: "Schilders",
    description: "Binnen- en buitenschilderwerk, spuitwerk.",
    count: "15+",
  },
  {
    title: "Vloerleggers",
    description: "Parket, laminaat, PVC en gietvloeren.",
    count: "10+",
  },
  {
    title: "Afbouwers algemeen",
    description: "Allround afbouw en renovatie.",
    count: "5+",
  },
];

const services = [
  "Nieuwbouwprojecten",
  "Renovaties",
  "Commercieel vastgoed",
  "Particuliere woningen",
  "Monumentale panden",
];

export default function AfbouwPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-20">
        <div className="absolute inset-0">
          <Image
            src="/images/portfolio/portfolio-9.jpg"
            alt="Monumentaal gebouw"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/90 to-navy opacity-95" />
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
              Afbouw & Interieur
            </h1>
            <p className="mt-6 text-lg text-silver-light leading-relaxed">
              Naast onze maritieme focus leveren wij ook ervaren stukadoors en
              afbouwspecialisten voor hoogwaardige bouw- en renovatieprojecten.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-orange py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-heading text-4xl font-bold text-white">70+</p>
              <p className="text-white/80 text-sm mt-1">Vakmensen beschikbaar</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-white">40+</p>
              <p className="text-white/80 text-sm mt-1">Projecten afgerond</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-white">3</p>
              <p className="text-white/80 text-sm mt-1">Landen actief</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-white">15+</p>
              <p className="text-white/80 text-sm mt-1">Jaar ervaring</p>
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

      {/* Services */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy">
                Projecttypes
              </h2>
              <p className="mt-4 text-grey">
                Onze afbouwspecialisten werken aan uiteenlopende projecten,
                van nieuwbouw tot monumentale renovaties.
              </p>
              <ul className="mt-6 space-y-3">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[300px]">
              <Image
                src="/images/portfolio/portfolio-5.jpg"
                alt="Industriële installatie"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-light py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Op zoek naar afbouwpersoneel?
          </h2>
          <p className="mt-4 text-silver-light">
            Ervaren stukadoors en afbouwers, direct beschikbaar.
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
