"use client";

import Link from "next/link";
import VideoHero from "@/components/VideoHero";
import JobSearchWidget from "@/components/JobSearchWidget";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const diensten = [
  {
    title: "Personeelsuitzending",
    description: "Wereldwijde uitzending van gekwalificeerde vakmensen voor uw maritieme en industriële projecten",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    href: "/diensten#uitzending",
  },
  {
    title: "Werving & Selectie",
    description: "Gerichte werving van specialisten voor permanente functies in de maritieme sector",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    href: "/diensten#werving",
  },
  {
    title: "Projectuitvoering",
    description: "Complete projectteams met volledige ondersteuning - van planning tot oplevering",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    href: "/diensten#projecten",
  },
  {
    title: "Detachering",
    description: "Flexibele detachering van professionals voor langdurige opdrachten",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    href: "/diensten#detachering",
  },
];

const sectors = [
  {
    title: "Maritiem & Scheepsbouw",
    description: "Ervaren vakmensen voor scheepswerven en maritieme projecten wereldwijd",
    image: "/images/portfolio/portfolio-7.jpg",
    href: "/sectoren/maritiem",
  },
  {
    title: "Jachtbouw",
    description: "Specialisten voor luxe jachten en superyachts van wereldklasse",
    image: "/images/portfolio/portfolio-2.jpg",
    href: "/sectoren/jachtbouw",
  },
  {
    title: "Offshore",
    description: "Gekwalificeerd personeel voor offshore installaties en energie projecten",
    image: "/images/portfolio/portfolio-8.jpg",
    href: "/sectoren/offshore",
  },
  {
    title: "Afbouw & Interieur",
    description: "Stukadoors en afbouwspecialisten voor hoogwaardige projecten",
    image: "/images/portfolio/portfolio-5.jpg",
    href: "/sectoren/afbouw",
  },
];

const usps = [
  {
    title: "Full-Service Aanpak",
    description: "Wij regelen alles: van werving en selectie tot huisvesting, transport en juridische zaken",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Wereldwijd Netwerk",
    description: "Internationale teams voor projecten over de hele wereld, met lokale expertise",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Oude Rotten in het Vak",
    description: "Decennia aan ervaring in de maritieme sector - wij kennen de industrie van binnenuit",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "SNA Gecertificeerd",
    description: "Volledig gecertificeerd volgens de normen van Stichting Normering Arbeid",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "500+", label: "Geplaatste Vakmensen" },
  { value: "50+", label: "Tevreden Opdrachtgevers" },
  { value: "15+", label: "Landen Actief" },
  { value: "100%", label: "SNA Gecertificeerd" },
];

const featuredJobs = [
  {
    title: "Scheepslasser MIG/MAG",
    location: "Rotterdam, NL",
    type: "Project",
    sector: "Maritiem",
    salary: "€3.500 - €4.500",
  },
  {
    title: "Jachtinterieurbouwer",
    location: "Kaag, NL",
    type: "Contract",
    sector: "Jachtbouw",
    salary: "€3.200 - €4.000",
  },
  {
    title: "Offshore Monteur",
    location: "Internationaal",
    type: "Project",
    sector: "Offshore",
    salary: "€4.000 - €5.500",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Video Background */}
      <VideoHero>
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8 pt-32">
          {/* Tagline */}
          <p className="animate-fade-in text-sm font-medium uppercase tracking-widest text-teal-light mb-4">
            Samen één stap in de goede richting
          </p>

          {/* Main Headline */}
          <h1 className="animate-slide-up font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Vakmensen die het{" "}
            <span className="text-gradient">verschil</span> maken
          </h1>

          {/* Subheadline */}
          <p className="animate-slide-up delay-200 mx-auto mt-6 max-w-3xl text-lg leading-8 text-silver-light">
            Royal DS International verzorgt wereldwijde personeelsuitzending, werving en selectie,
            plus complete projectuitvoering met betrouwbare internationale teams voor de maritieme
            en jachtbouw industrie.
          </p>

          {/* CTA Buttons */}
          <div className="animate-slide-up delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/opdrachtgevers"
              className="btn-lift w-full sm:w-auto rounded-full bg-orange px-8 py-4 text-base font-semibold text-white"
            >
              Ik zoek personeel
            </Link>
            <Link
              href="/vakmensen"
              className="w-full sm:w-auto rounded-full border-2 border-white/30 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Ik zoek werk
            </Link>
          </div>

          {/* Job Search Widget */}
          <div className="animate-slide-up delay-400 mt-16">
            <JobSearchWidget />
          </div>
        </div>
      </VideoHero>

      {/* Stats Section */}
      <section className="relative bg-teal py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal to-teal-light opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="text-center">
              <p className="font-heading text-3xl font-bold text-white lg:text-5xl">
                <AnimatedCounter end={500} suffix="+" />
              </p>
              <p className="mt-2 text-sm text-white/80 font-medium">Geplaatste Vakmensen</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-bold text-white lg:text-5xl">
                <AnimatedCounter end={50} suffix="+" />
              </p>
              <p className="mt-2 text-sm text-white/80 font-medium">Tevreden Opdrachtgevers</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-bold text-white lg:text-5xl">
                <AnimatedCounter end={15} suffix="+" />
              </p>
              <p className="mt-2 text-sm text-white/80 font-medium">Landen Actief</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-bold text-white lg:text-5xl">
                <AnimatedCounter end={100} suffix="%" />
              </p>
              <p className="mt-2 text-sm text-white/80 font-medium">SNA Gecertificeerd</p>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-medium uppercase tracking-widest text-teal mb-2">
                Waarom Royal DS International
              </p>
              <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
                Uw partner in maritieme excellentie
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-grey">
                Wij combineren decennia aan ervaring met een complete service aanpak voor
                opdrachtgevers én vakmensen wereldwijd.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {usps.map((usp, index) => (
              <ScrollReveal key={usp.title} delay={index * 100}>
                <div className="text-center p-6 group cursor-pointer">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center text-teal mb-4 transition-all duration-300 group-hover:bg-teal group-hover:text-white group-hover:scale-110">
                    {usp.icon}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-navy mb-2 group-hover:text-teal transition-colors">
                    {usp.title}
                  </h3>
                  <p className="text-sm text-grey leading-relaxed">
                    {usp.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten Section */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-teal mb-2">
              Onze Diensten
            </p>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Wat wij voor u kunnen betekenen
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {diensten.map((dienst) => (
              <Link
                key={dienst.title}
                href={dienst.href}
                className="group card-hover relative rounded-2xl bg-white p-6 shadow-sm border border-grey-light/50"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white transition-all duration-300">
                  {dienst.icon}
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-navy group-hover:text-teal transition-colors">
                  {dienst.title}
                </h3>
                <p className="mt-2 text-sm text-grey leading-relaxed">
                  {dienst.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-teal opacity-0 group-hover:opacity-100 transition-opacity">
                  Meer info
                  <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section - Bento Grid Style */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-teal-light mb-2">
              Sectoren
            </p>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Gespecialiseerd in uw industrie
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-silver-light">
              Onze expertise strekt zich uit over de volledige maritieme sector en aanverwante industrieën.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector, index) => (
              <Link
                key={sector.title}
                href={sector.href}
                className={`group relative overflow-hidden rounded-2xl p-6 min-h-[280px] flex flex-col justify-end transition-all duration-500 hover:scale-[1.02] ${
                  index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${sector.image})` }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/30 group-hover:via-navy/60 transition-all duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-heading text-xl font-semibold text-white group-hover:text-orange transition-colors">
                    {sector.title}
                  </h3>
                  <p className="mt-2 text-sm text-silver-light">
                    {sector.description}
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm font-medium text-teal-light group-hover:text-orange transition-colors">
                    Bekijk vacatures
                    <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-teal mb-2">
                Actuele Vacatures
              </p>
              <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
                Direct aan de slag
              </h2>
            </div>
            <Link
              href="/vacatures"
              className="mt-4 sm:mt-0 inline-flex items-center text-sm font-medium text-teal hover:text-orange transition-colors"
            >
              Alle vacatures bekijken
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {featuredJobs.map((job, index) => (
              <Link
                key={index}
                href="/vacatures"
                className="group card-hover rounded-xl border border-grey-light bg-white p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-teal/10 text-teal mb-3">
                      {job.sector}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-navy group-hover:text-teal transition-colors">
                      {job.title}
                    </h3>
                  </div>
                  <svg className="h-5 w-5 text-silver group-hover:text-teal group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-grey">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-grey">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {job.type}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-orange">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {job.salary}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-teal mb-2">
                Onze Aanpak
              </p>
              <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
                Wij bouwen partnerships die blijven
              </h2>
              <p className="mt-6 text-grey leading-relaxed">
                Bij Royal DS International combineren we decennia aan ervaring in de maritieme industrie
                met een complete service aanpak. Van werving en plaatsing tot huisvesting, transport en
                volledige projectuitvoering - wij leveren de vakmensen én de ondersteuning die uw projecten vereisen.
              </p>
              <p className="mt-4 text-grey leading-relaxed">
                Wij vullen niet alleen posities - wij bouwen langdurige partnerships.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/over-ons"
                  className="btn-lift rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white"
                >
                  Meer over ons
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border-2 border-navy px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
                >
                  Neem contact op
                </Link>
              </div>
            </div>
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/portfolio/portfolio-7.jpg"
                  alt="Rotterdam maritiem"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              {/* Floating stats cards */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-5 shadow-xl">
                <p className="font-heading text-3xl font-bold text-teal">8+</p>
                <p className="text-sm text-grey mt-1">Jaar ervaring</p>
              </div>
              <div className="absolute -top-6 -right-6 rounded-2xl bg-navy p-5 shadow-xl">
                <p className="font-heading text-3xl font-bold text-orange">500+</p>
                <p className="text-sm text-silver-light mt-1">Vakmensen geplaatst</p>
              </div>
              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 rounded-2xl bg-teal p-4 shadow-xl">
                <p className="font-heading text-2xl font-bold text-white">15+</p>
                <p className="text-xs text-white/80 mt-1">Landen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-navy-light py-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-orange/10 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-teal-light mb-4">
            Samen één stap in de goede richting
          </p>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Klaar om samen te werken?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-silver-light">
            Of u nu op zoek bent naar gekwalificeerd personeel voor uw project of een nieuwe
            uitdaging in de maritieme sector, wij staan voor u klaar met onze expertise en wereldwijde netwerk.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/contact"
              className="btn-lift w-full sm:w-auto rounded-full bg-orange px-8 py-4 text-base font-semibold text-white"
            >
              Neem Contact Op
            </Link>
            <Link
              href="/vacatures"
              className="w-full sm:w-auto rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Bekijk Vacatures
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
