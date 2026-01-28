import Link from "next/link";

const footerNavigation = {
  diensten: [
    { name: "Personeelsuitzending", href: "/diensten#uitzending" },
    { name: "Werving & Selectie", href: "/diensten#werving" },
    { name: "Projectuitvoering", href: "/diensten#projecten" },
    { name: "Detachering", href: "/diensten#detachering" },
  ],
  sectoren: [
    { name: "Maritiem & Scheepsbouw", href: "/sectoren/maritiem" },
    { name: "Jachtbouw", href: "/sectoren/jachtbouw" },
    { name: "Offshore", href: "/sectoren/offshore" },
    { name: "Afbouw & Interieur", href: "/sectoren/afbouw" },
  ],
  bedrijf: [
    { name: "Over Ons", href: "/over-ons" },
    { name: "Vacatures", href: "/vacatures" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "/privacy" },
  ],
  contact: {
    address: "Ambachtsweg 57",
    city: "6541 DA Nijmegen",
    country: "Nederland",
    email: "info@royalds-international.eu",
    phone: "+31 (0)24 - 378 54 63",
  },
};

const royalDSFamily = [
  { name: "Royal DS Holding", href: "https://royaldspersoneel-service.nl" },
  { name: "Royal DS Personeel-service", href: "https://royaldspersoneel-service.nl/personeel-service" },
  { name: "Royal DS Management", href: "https://royalds-management.nl" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-heading font-bold">
                Royal<span className="text-orange">DS</span>
                <span className="ml-2 text-sm font-normal text-teal-light">International</span>
              </span>
            </Link>
            <p className="mt-4 text-lg font-heading text-silver-light italic">
              &ldquo;Samen één stap in de goede richting&rdquo;
            </p>
            <p className="mt-4 text-sm text-silver-light leading-relaxed max-w-md">
              Royal DS International verzorgt wereldwijde personeelsuitzending, werving en selectie,
              plus complete projectuitvoering met betrouwbare internationale teams.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-teal/20 px-3 py-1 text-xs font-medium text-teal-light">
                SNA Gecertificeerd
              </span>
              <span className="inline-flex items-center rounded-full bg-orange/20 px-3 py-1 text-xs font-medium text-orange-light">
                Wereldwijd Actief
              </span>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-silver">
              Diensten
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.diensten.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-silver-light hover:text-orange transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectoren */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-silver">
              Sectoren
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.sectoren.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-silver-light hover:text-orange transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-silver">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="text-sm text-silver-light">
                {footerNavigation.contact.address}<br />
                {footerNavigation.contact.city}<br />
                {footerNavigation.contact.country}
              </li>
              <li>
                <a
                  href={`tel:${footerNavigation.contact.phone}`}
                  className="text-sm text-silver-light hover:text-orange transition-colors flex items-center gap-2"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {footerNavigation.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footerNavigation.contact.email}`}
                  className="text-sm text-silver-light hover:text-orange transition-colors flex items-center gap-2"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {footerNavigation.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Royal DS Family */}
        <div className="mt-12 pt-8 border-t border-navy-light">
          <p className="text-xs text-silver mb-4">Onderdeel van de Royal DS familie:</p>
          <div className="flex flex-wrap gap-4">
            {royalDSFamily.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-silver-light hover:text-teal-light transition-colors"
              >
                {item.name} →
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-light">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-silver">
              &copy; {new Date().getFullYear()} Royal DS International B.V. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs text-silver hover:text-orange transition-colors">
                Privacybeleid
              </Link>
              <Link href="/voorwaarden" className="text-xs text-silver hover:text-orange transition-colors">
                Algemene Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
