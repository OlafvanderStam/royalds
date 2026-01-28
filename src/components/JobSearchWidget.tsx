"use client";

import { useState } from "react";
import Link from "next/link";

const sectors = [
  { value: "", label: "Alle Sectoren" },
  { value: "maritiem", label: "Maritiem & Scheepsbouw" },
  { value: "jachtbouw", label: "Jachtbouw" },
  { value: "offshore", label: "Offshore" },
  { value: "afbouw", label: "Afbouw" },
];

const jobTypes = [
  { value: "", label: "Alle Types" },
  { value: "vast", label: "Vast Dienstverband" },
  { value: "contract", label: "Contract" },
  { value: "project", label: "Projectbasis" },
];

const locations = [
  { value: "", label: "Alle Locaties" },
  { value: "nederland", label: "Nederland" },
  { value: "belgie", label: "België" },
  { value: "duitsland", label: "Duitsland" },
  { value: "internationaal", label: "Internationaal" },
];

export default function JobSearchWidget() {
  const [sector, setSector] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");

  const buildSearchUrl = () => {
    const params = new URLSearchParams();
    if (sector) params.set("sector", sector);
    if (jobType) params.set("type", jobType);
    if (location) params.set("locatie", location);
    return `/vacatures${params.toString() ? `?${params.toString()}` : ""}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
        <h3 className="text-lg font-heading font-semibold text-white mb-4">
          Vind jouw volgende uitdaging
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Sector Select */}
          <div className="relative">
            <label className="block text-xs font-medium text-silver-light mb-1">
              Sector
            </label>
            <select
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-silver focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all appearance-none cursor-pointer"
            >
              {sectors.map((option) => (
                <option key={option.value} value={option.value} className="bg-navy text-white">
                  {option.label}
                </option>
              ))}
            </select>
            <svg className="absolute right-3 top-9 h-4 w-4 text-silver pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Job Type Select */}
          <div className="relative">
            <label className="block text-xs font-medium text-silver-light mb-1">
              Dienstverband
            </label>
            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-silver focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all appearance-none cursor-pointer"
            >
              {jobTypes.map((option) => (
                <option key={option.value} value={option.value} className="bg-navy text-white">
                  {option.label}
                </option>
              ))}
            </select>
            <svg className="absolute right-3 top-9 h-4 w-4 text-silver pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Location Select */}
          <div className="relative">
            <label className="block text-xs font-medium text-silver-light mb-1">
              Locatie
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-silver focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all appearance-none cursor-pointer"
            >
              {locations.map((option) => (
                <option key={option.value} value={option.value} className="bg-navy text-white">
                  {option.label}
                </option>
              ))}
            </select>
            <svg className="absolute right-3 top-9 h-4 w-4 text-silver pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <Link
          href={buildSearchUrl()}
          className="group w-full flex items-center justify-center gap-2 rounded-lg bg-orange px-6 py-3 text-base font-semibold text-white hover:bg-orange-light transition-all hover:shadow-lg hover:shadow-orange/30 hover:-translate-y-0.5"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Zoek Vacatures
          <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
