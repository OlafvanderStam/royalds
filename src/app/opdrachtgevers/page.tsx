import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voor Opdrachtgevers | Royal DS International",
  description: "Ontdek hoe Royal DS International u kan helpen met gekwalificeerd personeel voor uw maritieme projecten.",
};

const benefits = [
  {
    title: "Snelle levering",
    description: "Binnen 48 uur presenteren wij geschikte kandidaten voor uw vacature.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Gekwalificeerd personeel",
    description: "Al onze vakmensen zijn gescreend op vakbekwaamheid, certificaten en referenties.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Volledige ontzorging",
    description: "Wij regelen alles: van huisvesting en transport tot administratie en verzekeringen.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Flexibele contracten",
    description: "Van korte projecten tot langdurige detachering - wij bieden de flexibiliteit die u nodig heeft.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "SNA gecertificeerd",
    description: "Wij voldoen aan alle normen van de Stichting Normering Arbeid.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: "Persoonlijke aanpak",
    description: "Eén vast aanspreekpunt dat uw bedrijf en wensen door en door kent.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

const process = [
  {
    step: "01",
    title: "Kennismaking",
    description: "Wij bespreken uw wensen, de projectdetails en de gewenste profielen.",
  },
  {
    step: "02",
    title: "Selectie",
    description: "Wij selecteren geschikte kandidaten uit ons netwerk en presenteren deze aan u.",
  },
  {
    step: "03",
    title: "Matching",
    description: "U maakt kennis met de kandidaten en wij zorgen voor een perfecte match.",
  },
  {
    step: "04",
    title: "Onboarding",
    description: "Wij regelen alle praktische zaken en zorgen voor een vliegende start.",
  },
];

const sectors = [
  { name: "Scheepsbouw", count: "150+ vakmensen" },
  { name: "Jachtbouw", count: "80+ vakmensen" },
  { name: "Offshore", count: "100+ vakmensen" },
  { name: "Afbouw & Interieur", count: "70+ vakmensen" },
];

export default function OpdrachtgeversPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-navy pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-teal-light mb-4">
                Voor Opdrachtgevers
              </p>
              <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
                Vind uw perfecte team
              </h1>
              <p className="mt-6 text-lg text-silver-light leading-relaxed">
                Royal DS International levert gekwalificeerde vakmensen voor de maritieme industrie.
                Van één specialist tot complete projectteams - wij zorgen voor de juiste mensen op de juiste plek.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-orange px-8 py-4 text-base font-semibold text-white hover:bg-orange-light transition-colors text-center"
                >
                  Personeel aanvragen
                </Link>
                <Link
                  href="#werkwijze"
                  className="rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors text-center"
                >
                  Onze werkwijze
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="font-heading text-xl font-semibold text-white mb-6">
                  Direct contact
                </h3>
                <div className="space-y-4">
                  <a href="tel:+31243785463" className="flex items-center gap-3 text-silver-light hover:text-orange transition-colors">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +31 (0)24 - 378 54 63
                  </a>
                  <a href="mailto:info@royalds-international.eu" className="flex items-center gap-3 text-silver-light hover:text-orange transition-colors">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@royalds-international.eu
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm text-silver-light">Beschikbare vakmensen per sector:</p>
                  <div className="mt-3 space-y-2">
                    {sectors.map((sector) => (
                      <div key={sector.name} className="flex justify-between text-sm">
                        <span className="text-white">{sector.name}</span>
                        <span className="text-teal-light">{sector.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Waarom kiezen voor Royal DS International?
            </h2>
            <p className="mt-4 text-grey max-w-2xl mx-auto">
              Wij onderscheiden ons door onze jarenlange ervaring, persoonlijke aanpak en complete ontzorging.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-navy">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-sm text-grey">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="werkwijze" className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-teal mb-2">
              Onze werkwijze
            </p>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              In 4 stappen naar uw ideale team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-teal/20" />
                )}
                <div className="bg-white rounded-2xl p-6 relative">
                  <span className="font-heading text-5xl font-bold text-teal/20">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-grey text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-light py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Klaar om uw team te versterken?
          </h2>
          <p className="mt-4 text-silver-light max-w-2xl mx-auto">
            Neem vandaag nog contact met ons op en ontdek hoe wij u kunnen helpen
            met gekwalificeerd personeel voor uw projecten.
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
              className="rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Bekijk onze diensten
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
