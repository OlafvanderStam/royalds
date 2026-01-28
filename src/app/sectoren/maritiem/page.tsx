import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maritiem & Scheepsbouw | Royal DS International",
  description: "Ervaren vakmensen voor scheepswerven en maritieme projecten. Lassers, plaatwerkers, pijpfitters en meer.",
};

const roles = [
  {
    title: "Scheepslassers",
    description: "MIG/MAG, TIG en elektrode lassers voor nieuwbouw en reparatie.",
    count: "40+",
  },
  {
    title: "Plaatwerkers",
    description: "Ervaren plaatwerkers voor constructie en scheepsrompen.",
    count: "30+",
  },
  {
    title: "Pijpfitters",
    description: "Specialisten voor pijp- en leidingwerk aan boord.",
    count: "25+",
  },
  {
    title: "Scheepselektriciens",
    description: "Bekabeling en elektrische installaties.",
    count: "20+",
  },
  {
    title: "Monteurs",
    description: "Machinekamer en dekmonteurs.",
    count: "35+",
  },
];

const projects = [
  "Nieuwbouw containerschepen",
  "Offshore support vessels",
  "Reparatie en onderhoud",
  "Conversieprojecten",
  "Marineschepen",
];

export default function MaritiemPage() {
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
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-teal/20 text-teal-light mb-4">
              Sector
            </span>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Maritiem & Scheepsbouw
            </h1>
            <p className="mt-6 text-lg text-silver-light leading-relaxed">
              De Nederlandse maritieme sector behoort tot de wereldtop. Royal DS International
              levert de vakmensen die deze reputatie waarmaken - van ervaren scheepslassers
              tot gespecialiseerde elektriciens.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-teal py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-heading text-4xl font-bold text-white">150+</p>
              <p className="text-white/80 text-sm mt-1">Vakmensen beschikbaar</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-white">50+</p>
              <p className="text-white/80 text-sm mt-1">Projecten afgerond</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-white">8</p>
              <p className="text-white/80 text-sm mt-1">Landen actief</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-white">98%</p>
              <p className="text-white/80 text-sm mt-1">Klanttevredenheid</p>
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

      {/* Projects */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy">
                Type projecten
              </h2>
              <p className="mt-4 text-grey">
                Wij leveren vakmensen voor uiteenlopende maritieme projecten bij
                toonaangevende werven in Nederland en daarbuiten.
              </p>
              <ul className="mt-6 space-y-3">
                {projects.map((project) => (
                  <li key={project} className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy">{project}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy rounded-2xl p-8 text-center">
              <span className="text-8xl">🚢</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-light py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Op zoek naar maritiem personeel?
          </h2>
          <p className="mt-4 text-silver-light">
            Neem contact op en wij presenteren binnen 48 uur geschikte kandidaten.
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
