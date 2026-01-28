import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sectoren | Royal DS International",
  description: "Ontdek onze expertise in maritiem, jachtbouw, offshore en afbouw. Gespecialiseerde recruitment voor uw sector.",
};

const sectors = [
  {
    title: "Maritiem & Scheepsbouw",
    slug: "maritiem",
    description: "Van nieuwbouw tot reparatie - wij leveren ervaren vakmensen voor alle scheepsbouwprojecten.",
    stats: { vakmensen: "150+", projecten: "50+", landen: "8" },
    roles: ["Scheepslassers", "Plaatwerkers", "Pijpfitters", "Elektriciens", "Monteurs"],
    color: "teal",
  },
  {
    title: "Jachtbouw",
    slug: "jachtbouw",
    description: "Specialisten voor luxe jachten en superyachts. Vakmanschap op het hoogste niveau.",
    stats: { vakmensen: "80+", projecten: "30+", landen: "5" },
    roles: ["Interieurbouwers", "Meubelmakers", "Lassers", "Afbouwers", "Stoffeerders"],
    color: "orange",
  },
  {
    title: "Offshore",
    slug: "offshore",
    description: "Gekwalificeerd personeel voor offshore installaties, windparken en platforms.",
    stats: { vakmensen: "100+", projecten: "25+", landen: "6" },
    roles: ["Offshore monteurs", "Lassers", "Riggers", "Elektriciens", "Technici"],
    color: "teal",
  },
  {
    title: "Afbouw & Interieur",
    slug: "afbouw",
    description: "Stukadoors en afbouwspecialisten voor hoogwaardige bouw- en renovatieprojecten.",
    stats: { vakmensen: "70+", projecten: "40+", landen: "3" },
    roles: ["Stukadoors", "Tegelzetters", "Schilders", "Vloerleggers", "Afbouwers"],
    color: "orange",
  },
];

export default function SectorenPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-navy pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-teal-light mb-4">
              Onze Sectoren
            </p>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Gespecialiseerd in uw industrie
            </h1>
            <p className="mt-6 text-lg text-silver-light leading-relaxed">
              Met jarenlange ervaring in de maritieme sector en aanverwante industrieën kennen wij
              de specifieke eisen en uitdagingen van uw branche.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Overview */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {sectors.map((sector, index) => (
              <div
                key={sector.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 ${
                    sector.color === "teal" ? "bg-teal/10 text-teal" : "bg-orange/10 text-orange"
                  }`}>
                    Sector
                  </span>
                  <h2 className="font-heading text-3xl font-bold text-navy">
                    {sector.title}
                  </h2>
                  <p className="mt-4 text-grey leading-relaxed">
                    {sector.description}
                  </p>

                  {/* Stats */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-sand rounded-xl">
                      <p className={`font-heading text-2xl font-bold ${
                        sector.color === "teal" ? "text-teal" : "text-orange"
                      }`}>
                        {sector.stats.vakmensen}
                      </p>
                      <p className="text-xs text-grey">Vakmensen</p>
                    </div>
                    <div className="text-center p-3 bg-sand rounded-xl">
                      <p className={`font-heading text-2xl font-bold ${
                        sector.color === "teal" ? "text-teal" : "text-orange"
                      }`}>
                        {sector.stats.projecten}
                      </p>
                      <p className="text-xs text-grey">Projecten</p>
                    </div>
                    <div className="text-center p-3 bg-sand rounded-xl">
                      <p className={`font-heading text-2xl font-bold ${
                        sector.color === "teal" ? "text-teal" : "text-orange"
                      }`}>
                        {sector.stats.landen}
                      </p>
                      <p className="text-xs text-grey">Landen</p>
                    </div>
                  </div>

                  {/* Roles */}
                  <div className="mt-6">
                    <p className="text-sm font-medium text-navy mb-2">Functies in deze sector:</p>
                    <div className="flex flex-wrap gap-2">
                      {sector.roles.map((role) => (
                        <span key={role} className="px-3 py-1 bg-grey-light rounded-full text-sm text-grey">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/sectoren/${sector.slug}`}
                    className={`mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors ${
                      sector.color === "teal" ? "bg-teal hover:bg-teal-light" : "bg-orange hover:bg-orange-light"
                    }`}
                  >
                    Meer over {sector.title.split(" ")[0]}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className={`rounded-2xl p-8 lg:p-12 ${
                    sector.color === "teal" ? "bg-teal/10" : "bg-orange/10"
                  }`}>
                    <div className="aspect-video bg-white/50 rounded-xl flex items-center justify-center">
                      <span className="text-6xl">
                        {sector.slug === "maritiem" && "🚢"}
                        {sector.slug === "jachtbouw" && "⛵"}
                        {sector.slug === "offshore" && "🌊"}
                        {sector.slug === "afbouw" && "🏗️"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-light py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Werkt u in een andere sector?
          </h2>
          <p className="mt-4 text-silver-light max-w-2xl mx-auto">
            Neem contact met ons op. Wellicht kunnen wij ook voor uw branche
            de juiste vakmensen leveren.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 text-base font-semibold text-white hover:bg-orange-light transition-colors"
          >
            Neem contact op
          </Link>
        </div>
      </section>
    </div>
  );
}
