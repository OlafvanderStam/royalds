import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offshore | Royal DS International",
  description: "Gekwalificeerd personeel voor offshore installaties, windparken en platforms.",
};

const roles = [
  {
    title: "Offshore Monteurs",
    description: "Installatie en onderhoud op offshore locaties.",
    count: "30+",
  },
  {
    title: "Offshore Lassers",
    description: "Gecertificeerde lassers voor offshore constructies.",
    count: "25+",
  },
  {
    title: "Riggers",
    description: "Hijsen en takelen op platforms en installaties.",
    count: "15+",
  },
  {
    title: "Elektriciens",
    description: "Elektrische installaties en bekabeling offshore.",
    count: "20+",
  },
  {
    title: "Technici",
    description: "Onderhoud en inspectie specialisten.",
    count: "10+",
  },
];

const certifications = [
  "GWO Basic Safety Training",
  "BOSIET/HUET",
  "Offshore medisch",
  "VCA VOL",
  "STCW",
];

export default function OffshorePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-20">
        <div className="absolute inset-0">
          <Image
            src="/images/portfolio/portfolio-8.jpg"
            alt="Offshore control room"
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
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-teal/20 text-teal-light mb-4">
              Sector
            </span>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Offshore
            </h1>
            <p className="mt-6 text-lg text-silver-light leading-relaxed">
              De offshore sector vraagt om professionals die kunnen presteren onder
              uitdagende omstandigheden. Royal DS International levert gecertificeerde
              vakmensen voor windparken, platforms en offshore installaties.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-teal py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-heading text-4xl font-bold text-white">100+</p>
              <p className="text-white/80 text-sm mt-1">Vakmensen beschikbaar</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-white">25+</p>
              <p className="text-white/80 text-sm mt-1">Offshore projecten</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-white">6</p>
              <p className="text-white/80 text-sm mt-1">Landen actief</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-white">0</p>
              <p className="text-white/80 text-sm mt-1">Veiligheidsincidenten</p>
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
                  <span className="px-2 py-1 bg-teal/10 text-teal text-sm font-medium rounded-full">
                    {role.count}
                  </span>
                </div>
                <p className="mt-2 text-grey text-sm">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy">
                Certificeringen
              </h2>
              <p className="mt-4 text-grey">
                Al onze offshore medewerkers beschikken over de vereiste certificeringen
                en medische keuringen.
              </p>
              <ul className="mt-6 space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-navy">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[300px]">
              <Image
                src="/images/portfolio/portfolio-1.jpg"
                alt="Modern industrieel gebouw"
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
            Op zoek naar offshore personeel?
          </h2>
          <p className="mt-4 text-silver-light">
            Volledig gecertificeerde professionals, klaar voor inzet.
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
