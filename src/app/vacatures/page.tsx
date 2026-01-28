"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const allJobs = [
  {
    id: 1,
    title: "Scheepslasser MIG/MAG",
    location: "Rotterdam",
    country: "Nederland",
    type: "Project",
    sector: "Maritiem",
    salary: "€3.500 - €4.500",
    description: "Wij zoeken ervaren scheepslassers voor een groot nieuwbouwproject bij een toonaangevende Nederlandse scheepswerf.",
    requirements: ["Minimaal 3 jaar ervaring", "MIG/MAG certificering", "Bereid tot ploegendienst"],
    featured: true,
  },
  {
    id: 2,
    title: "Jachtinterieurbouwer",
    location: "Kaag",
    country: "Nederland",
    type: "Contract",
    sector: "Jachtbouw",
    salary: "€3.200 - €4.000",
    description: "Voor een prestigieus superjachtproject zoeken wij vakbekwame interieurbouwers met oog voor detail.",
    requirements: ["Ervaring in luxe jachtbouw", "Nauwkeurig werken", "Flexibel inzetbaar"],
    featured: true,
  },
  {
    id: 3,
    title: "Offshore Monteur",
    location: "Noordzee",
    country: "Internationaal",
    type: "Project",
    sector: "Offshore",
    salary: "€4.000 - €5.500",
    description: "Offshore monteurs gezocht voor installatie- en onderhoudswerkzaamheden aan windparken.",
    requirements: ["GWO certificaten", "Offshore ervaring", "Goede fysieke conditie"],
    featured: true,
  },
  {
    id: 4,
    title: "TIG Lasser RVS",
    location: "Amsterdam",
    country: "Nederland",
    type: "Vast",
    sector: "Maritiem",
    salary: "€3.800 - €4.200",
    description: "Gespecialiseerde TIG lassers gezocht voor RVS werkzaamheden aan luxe jachten.",
    requirements: ["TIG certificering RVS", "Ervaring met dunwandig materiaal", "Kwaliteitsbewust"],
    featured: false,
  },
  {
    id: 5,
    title: "Stukadoor",
    location: "Utrecht",
    country: "Nederland",
    type: "Contract",
    sector: "Afbouw",
    salary: "€2.800 - €3.500",
    description: "Ervaren stukadoors gezocht voor hoogwaardige afbouwprojecten.",
    requirements: ["Minimaal 2 jaar ervaring", "Rijbewijs B", "Zelfstandig kunnen werken"],
    featured: false,
  },
  {
    id: 6,
    title: "Scheepsbouwer / Plaatwerker",
    location: "Harlingen",
    country: "Nederland",
    type: "Project",
    sector: "Maritiem",
    salary: "€3.400 - €4.000",
    description: "Plaatwerkers en scheepsbouwers voor nieuwbouw- en reparatieprojecten.",
    requirements: ["Ervaring in scheepsbouw", "Kunnen werken met technische tekeningen", "Teamspeler"],
    featured: false,
  },
  {
    id: 7,
    title: "Pijpfitter",
    location: "Rotterdam",
    country: "Nederland",
    type: "Contract",
    sector: "Maritiem",
    salary: "€3.600 - €4.200",
    description: "Pijpfitters gezocht voor installatiewerkzaamheden aan boord van nieuwbouwschepen.",
    requirements: ["Ervaring als pijpfitter", "Kunnen lezen van P&ID's", "VCA certificering"],
    featured: false,
  },
  {
    id: 8,
    title: "Elektricien Scheepsbouw",
    location: "Vlissingen",
    country: "Nederland",
    type: "Vast",
    sector: "Maritiem",
    salary: "€3.500 - €4.000",
    description: "Scheepselektriciens voor bekabeling en installatie van elektrische systemen.",
    requirements: ["Elektrotechnische opleiding", "Ervaring in scheepsbouw", "Kunnen werken met schema's"],
    featured: false,
  },
];

const sectors = ["Alle sectoren", "Maritiem", "Jachtbouw", "Offshore", "Afbouw"];
const types = ["Alle types", "Vast", "Contract", "Project"];
const locations = ["Alle locaties", "Nederland", "Internationaal"];

// Map URL parameter values to display values
const sectorMap: Record<string, string> = {
  "maritiem": "Maritiem",
  "jachtbouw": "Jachtbouw",
  "offshore": "Offshore",
  "afbouw": "Afbouw",
};

const typeMap: Record<string, string> = {
  "vast": "Vast",
  "contract": "Contract",
  "project": "Project",
};

const locationMap: Record<string, string> = {
  "nederland": "Nederland",
  "internationaal": "Internationaal",
};

function VacaturesContent() {
  const searchParams = useSearchParams();

  // Initialize filters from URL parameters
  const initialSector = searchParams.get("sector");
  const initialType = searchParams.get("type");
  const initialLocation = searchParams.get("locatie");

  const [selectedSector, setSelectedSector] = useState(
    initialSector && sectorMap[initialSector] ? sectorMap[initialSector] : "Alle sectoren"
  );
  const [selectedType, setSelectedType] = useState(
    initialType && typeMap[initialType] ? typeMap[initialType] : "Alle types"
  );
  const [selectedLocation, setSelectedLocation] = useState(
    initialLocation && locationMap[initialLocation] ? locationMap[initialLocation] : "Alle locaties"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState<typeof allJobs[0] | null>(null);

  // Update filters when URL changes
  useEffect(() => {
    const sector = searchParams.get("sector");
    const type = searchParams.get("type");
    const location = searchParams.get("locatie");

    if (sector && sectorMap[sector]) {
      setSelectedSector(sectorMap[sector]);
    }
    if (type && typeMap[type]) {
      setSelectedType(typeMap[type]);
    }
    if (location && locationMap[location]) {
      setSelectedLocation(locationMap[location]);
    }
  }, [searchParams]);

  const filteredJobs = useMemo(() => {
    return allJobs.filter((job) => {
      const matchesSector = selectedSector === "Alle sectoren" || job.sector === selectedSector;
      const matchesType = selectedType === "Alle types" || job.type === selectedType;
      const matchesLocation = selectedLocation === "Alle locaties" ||
        (selectedLocation === "Nederland" && job.country === "Nederland") ||
        (selectedLocation === "Internationaal" && job.country === "Internationaal");
      const matchesSearch = searchQuery === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesSector && matchesType && matchesLocation && matchesSearch;
    });
  }, [selectedSector, selectedType, selectedLocation, searchQuery]);

  const featuredJobs = filteredJobs.filter((job) => job.featured);
  const regularJobs = filteredJobs.filter((job) => !job.featured);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-navy pt-32 pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-teal-light mb-4">
              Vacatures
            </p>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Vind jouw volgende uitdaging
            </h1>
            <p className="mt-6 text-lg text-silver-light leading-relaxed">
              Ontdek onze actuele vacatures in de maritieme sector en solliciteer direct.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-8 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Zoek op functie of trefwoord..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full bg-white/10 border border-white/20 px-6 py-4 pl-12 text-white placeholder-silver focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-silver" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Jobs */}
      <section className="bg-sand py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filters */}
          <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-grey mb-2">Sector</label>
                <select
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="w-full rounded-xl border border-grey-light px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all appearance-none bg-white"
                >
                  {sectors.map((sector) => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-grey mb-2">Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full rounded-xl border border-grey-light px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all appearance-none bg-white"
                >
                  {types.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-grey mb-2">Locatie</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full rounded-xl border border-grey-light px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all appearance-none bg-white"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-grey">
                {filteredJobs.length} vacature{filteredJobs.length !== 1 ? "s" : ""} gevonden
              </p>
              <button
                onClick={() => {
                  setSelectedSector("Alle sectoren");
                  setSelectedType("Alle types");
                  setSelectedLocation("Alle locaties");
                  setSearchQuery("");
                }}
                className="text-sm text-teal hover:text-orange transition-colors"
              >
                Filters wissen
              </button>
            </div>
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job List */}
            <div className="lg:col-span-2 space-y-4">
              {featuredJobs.length > 0 && (
                <>
                  <h2 className="font-heading text-lg font-semibold text-navy mb-4">
                    Uitgelichte vacatures
                  </h2>
                  {featuredJobs.map((job) => (
                    <div
                      key={job.id}
                      onClick={() => setSelectedJob(job)}
                      className={`bg-white rounded-xl p-6 cursor-pointer transition-all border-2 ${
                        selectedJob?.id === job.id
                          ? "border-teal shadow-lg"
                          : "border-transparent hover:border-grey-light hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-orange/10 text-orange">
                              Uitgelicht
                            </span>
                            <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-teal/10 text-teal">
                              {job.sector}
                            </span>
                          </div>
                          <h3 className="font-heading text-lg font-semibold text-navy">
                            {job.title}
                          </h3>
                        </div>
                        <svg className="h-5 w-5 text-silver" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-grey">
                        <span className="flex items-center gap-1">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1 font-medium text-orange">
                          {job.salary}
                        </span>
                      </div>
                    </div>
                  ))}
                </>
              )}

              {regularJobs.length > 0 && (
                <>
                  <h2 className="font-heading text-lg font-semibold text-navy mb-4 mt-8">
                    Alle vacatures
                  </h2>
                  {regularJobs.map((job) => (
                    <div
                      key={job.id}
                      onClick={() => setSelectedJob(job)}
                      className={`bg-white rounded-xl p-6 cursor-pointer transition-all border-2 ${
                        selectedJob?.id === job.id
                          ? "border-teal shadow-lg"
                          : "border-transparent hover:border-grey-light hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-teal/10 text-teal mb-2">
                            {job.sector}
                          </span>
                          <h3 className="font-heading text-lg font-semibold text-navy">
                            {job.title}
                          </h3>
                        </div>
                        <svg className="h-5 w-5 text-silver" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-grey">
                        <span className="flex items-center gap-1">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1 font-medium text-orange">
                          {job.salary}
                        </span>
                      </div>
                    </div>
                  ))}
                </>
              )}

              {filteredJobs.length === 0 && (
                <div className="bg-white rounded-xl p-12 text-center">
                  <svg className="h-12 w-12 text-silver mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-navy">
                    Geen vacatures gevonden
                  </h3>
                  <p className="mt-2 text-grey text-sm">
                    Probeer andere filters of neem contact met ons op.
                  </p>
                </div>
              )}
            </div>

            {/* Job Detail */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {selectedJob ? (
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-teal/10 text-teal">
                        {selectedJob.sector}
                      </span>
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-grey-light text-grey">
                        {selectedJob.type}
                      </span>
                    </div>
                    <h2 className="font-heading text-xl font-bold text-navy">
                      {selectedJob.title}
                    </h2>
                    <div className="mt-4 space-y-2 text-sm text-grey">
                      <p className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {selectedJob.location}, {selectedJob.country}
                      </p>
                      <p className="flex items-center gap-2 font-medium text-orange">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {selectedJob.salary}
                      </p>
                    </div>
                    <p className="mt-4 text-grey text-sm leading-relaxed">
                      {selectedJob.description}
                    </p>
                    <div className="mt-6">
                      <h3 className="font-semibold text-navy text-sm mb-2">Vereisten:</h3>
                      <ul className="space-y-1">
                        {selectedJob.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-grey">
                            <svg className="h-4 w-4 text-orange mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={`/contact?sollicitatie=true&vacature=${encodeURIComponent(selectedJob.title)}&sector=${encodeURIComponent(selectedJob.sector)}&locatie=${encodeURIComponent(selectedJob.location)}`}
                      className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white hover:bg-orange-light transition-colors"
                    >
                      Solliciteer nu
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                    <svg className="h-12 w-12 text-silver mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    <p className="mt-4 text-grey text-sm">
                      Selecteer een vacature om de details te bekijken
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-light py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-white">
            Niet gevonden wat je zoekt?
          </h2>
          <p className="mt-2 text-silver-light">
            Schrijf je in en wij nemen contact op zodra er een passende vacature is.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 text-base font-semibold text-white hover:bg-orange-light transition-colors"
          >
            Schrijf je in
          </Link>
        </div>
      </section>
    </div>
  );
}

// Loading fallback
function VacaturesLoading() {
  return (
    <div className="flex flex-col">
      <section className="relative bg-navy pt-32 pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-6 w-24 bg-white/20 rounded animate-pulse mb-4" />
          <div className="h-12 w-96 bg-white/20 rounded animate-pulse" />
        </div>
      </section>
      <section className="bg-sand py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-32 bg-grey-light rounded-2xl animate-pulse mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-32 bg-grey-light rounded-xl animate-pulse" />
              ))}
            </div>
            <div className="h-64 bg-grey-light rounded-2xl animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default function VacaturesPage() {
  return (
    <Suspense fallback={<VacaturesLoading />}>
      <VacaturesContent />
    </Suspense>
  );
}
