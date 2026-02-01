"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const contactInfo = {
  address: {
    street: "Ambachtsweg 57",
    city: "6541 DA Nijmegen",
    country: "Nederland",
  },
  phone: "+31 (0)24 - 378 54 63",
  email: "info@royalds-international.eu",
  hours: "Ma - Vr: 08:00 - 17:30",
};

const reasons = [
  { value: "opdrachtgever", label: "Ik ben opdrachtgever en zoek personeel" },
  { value: "vakman", label: "Ik ben vakman en zoek werk" },
  { value: "sollicitatie", label: "Ik wil solliciteren op een vacature" },
  { value: "samenwerking", label: "Ik wil samenwerken" },
  { value: "anders", label: "Anders" },
];

function ContactContent() {
  const searchParams = useSearchParams();
  const isSollicitatie = searchParams.get("sollicitatie") === "true";
  const vacature = searchParams.get("vacature");
  const sector = searchParams.get("sector");
  const locatie = searchParams.get("locatie");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    reason: isSollicitatie ? "sollicitatie" : "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Pre-fill message when coming from a job application
  useEffect(() => {
    if (isSollicitatie && vacature) {
      const prefilledMessage = `Beste Royal DS International,\n\nGraag solliciteer ik op de vacature:\n\n- Functie: ${vacature}\n- Sector: ${sector || "Niet gespecificeerd"}\n- Locatie: ${locatie || "Niet gespecificeerd"}\n\n[Schrijf hier waarom u geschikt bent voor deze functie...]\n\nMet vriendelijke groet,`;
      setFormData(prev => ({
        ...prev,
        reason: "sollicitatie",
        message: prefilledMessage,
      }));
    }
  }, [isSollicitatie, vacature, sector, locatie]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-navy pt-32 pb-20">
        <div className="absolute inset-0">
          <Image
            src="/images/portfolio/portfolio-4.jpg"
            alt="Kantoor"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/90 to-navy opacity-95" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-teal-light mb-4">
              {isSollicitatie ? "Solliciteren" : "Contact"}
            </p>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              {isSollicitatie && vacature ? (
                <>Solliciteer op: <span className="text-orange">{vacature}</span></>
              ) : (
                "Neem contact met ons op"
              )}
            </h1>
            <p className="mt-6 text-lg text-silver-light leading-relaxed">
              {isSollicitatie ? (
                <>
                  Vul onderstaand formulier in om te solliciteren. Vermeld uw relevante ervaring en motivatie.
                  {sector && <span className="block mt-2 text-teal-light">Sector: {sector} | Locatie: {locatie}</span>}
                </>
              ) : (
                "Heeft u vragen of wilt u meer informatie? Wij staan voor u klaar. Neem gerust contact met ons op via onderstaand formulier of direct per telefoon."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-sand rounded-2xl p-8 sticky top-24">
                <h2 className="font-heading text-xl font-semibold text-navy mb-6">
                  Contactgegevens
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-navy">Adres</p>
                      <p className="text-sm text-grey mt-1">
                        {contactInfo.address.street}<br />
                        {contactInfo.address.city}<br />
                        {contactInfo.address.country}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-navy">Telefoon</p>
                      <a href={`tel:${contactInfo.phone}`} className="text-sm text-teal hover:text-orange transition-colors">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-navy">E-mail</p>
                      <a href={`mailto:${contactInfo.email}`} className="text-sm text-teal hover:text-orange transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-navy">Openingstijden</p>
                      <p className="text-sm text-grey mt-1">{contactInfo.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-8 pt-6 border-t border-grey-light">
                  <p className="text-sm font-medium text-navy mb-3">Snelle links</p>
                  <div className="flex flex-col gap-2">
                    <Link href="/vacatures" className="text-sm text-teal hover:text-orange transition-colors">
                      Bekijk vacatures
                    </Link>
                    <Link href="/diensten" className="text-sm text-teal hover:text-orange transition-colors">
                      Onze diensten
                    </Link>
                    <Link href="/over-ons" className="text-sm text-teal hover:text-orange transition-colors">
                      Over Royal DS
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-teal/10 rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-teal mx-auto flex items-center justify-center">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="mt-6 font-heading text-2xl font-bold text-navy">
                    Bedankt voor uw bericht!
                  </h2>
                  <p className="mt-2 text-grey">
                    Wij nemen zo spoedig mogelijk contact met u op, meestal binnen 24 uur.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        reason: "",
                        message: "",
                      });
                    }}
                    className="mt-6 text-teal hover:text-orange transition-colors"
                  >
                    Nieuw bericht versturen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                        Naam *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-grey-light px-4 py-3 text-navy placeholder-grey focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
                        placeholder="Uw naam"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-grey-light px-4 py-3 text-navy placeholder-grey focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
                        placeholder="uw@email.nl"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                        Telefoon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-grey-light px-4 py-3 text-navy placeholder-grey focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
                        placeholder="+31 6 12345678"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-navy mb-2">
                        Bedrijf
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-grey-light px-4 py-3 text-navy placeholder-grey focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
                        placeholder="Uw bedrijfsnaam"
                      />
                    </div>
                  </div>

                  {/* Reason */}
                  <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-navy mb-2">
                      Waar gaat uw vraag over? *
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      required
                      value={formData.reason}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-grey-light px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all appearance-none bg-white"
                    >
                      <option value="">Selecteer een optie</option>
                      {reasons.map((reason) => (
                        <option key={reason.value} value={reason.value}>
                          {reason.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                      Uw bericht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={8}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-grey-light px-4 py-3 text-navy placeholder-grey focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all resize-none"
                      placeholder="Waar kunnen wij u mee helpen?"
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-grey">
                      * Verplichte velden
                    </p>
                    <button
                      type="submit"
                      className="rounded-full bg-orange px-8 py-4 text-base font-semibold text-white hover:bg-orange-light transition-colors flex items-center gap-2"
                    >
                      Verstuur bericht
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-navy-light rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <svg className="h-16 w-16 text-silver mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="mt-4 text-silver-light">
                Ambachtsweg 57, Nijmegen
              </p>
              <a
                href="https://maps.google.com/?q=Ambachtsweg+57+Nijmegen"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-teal-light hover:text-orange transition-colors"
              >
                Bekijk op Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Loading fallback
function ContactLoading() {
  return (
    <div className="flex flex-col">
      <section className="relative bg-navy pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="h-6 w-24 bg-white/20 rounded animate-pulse mb-4" />
            <div className="h-12 w-96 bg-white/20 rounded animate-pulse" />
            <div className="h-6 w-full max-w-xl bg-white/20 rounded animate-pulse mt-6" />
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-96 bg-grey-light rounded-2xl animate-pulse" />
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactLoading />}>
      <ContactContent />
    </Suspense>
  );
}
