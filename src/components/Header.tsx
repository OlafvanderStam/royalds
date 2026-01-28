"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t, languages } = useLanguage();
  const currentLang = languages.find(l => l.code === language) || languages[0];

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.diensten"), href: "/diensten" },
    { name: t("nav.opdrachtgevers"), href: "/opdrachtgevers" },
    { name: t("nav.vakmensen"), href: "/vakmensen" },
    {
      name: t("nav.sectoren"),
      href: "/sectoren",
      children: [
        { name: t("sector.maritiem"), href: "/sectoren/maritiem" },
        { name: t("sector.jachtbouw"), href: "/sectoren/jachtbouw" },
        { name: t("sector.offshore"), href: "/sectoren/offshore" },
        { name: t("sector.afbouw"), href: "/sectoren/afbouw" },
      ],
    },
    { name: t("nav.overons"), href: "/over-ons" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group flex items-center gap-3">
            <div className="flex items-center">
              <span className="text-2xl font-heading font-bold text-white">
                Royal<span className="text-orange group-hover:text-orange-light transition-colors">DS</span>
              </span>
              <span className="ml-2 text-xs font-medium text-teal-light uppercase tracking-wider hidden sm:block">
                International
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-orange transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.children && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium text-white hover:text-orange transition-colors"
              >
                {item.name}
                {item.children && (
                  <svg className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {/* Dropdown menu */}
              {item.children && activeDropdown === item.name && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="w-56 rounded-xl bg-navy-light/95 backdrop-blur-md shadow-xl ring-1 ring-white/10 overflow-hidden">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-3 text-sm text-white hover:bg-orange/20 hover:text-orange transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side: Language + CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-sm text-white hover:text-orange transition-colors"
            >
              <span>{currentLang.flag}</span>
              <span className="hidden xl:block">{currentLang.code.toUpperCase()}</span>
              <svg className={`h-4 w-4 transition-transform ${langOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-40 rounded-xl bg-navy-light/95 backdrop-blur-md shadow-xl ring-1 ring-white/10 overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                      language === lang.code
                        ? 'bg-orange/20 text-orange'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA Button */}
          <Link
            href="/vacatures"
            className="group relative rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-orange/30 hover:-translate-y-0.5"
          >
            <span className="relative z-10">Vacatures</span>
            <div className="absolute inset-0 bg-orange-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-navy/95 backdrop-blur-md border-t border-white/10 px-6 py-4 space-y-1">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className="block py-2 text-base font-medium text-white hover:text-orange transition-colors"
                onClick={() => !item.children && setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
              {item.children && (
                <div className="pl-4 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block py-2 text-sm text-silver-light hover:text-orange transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Language Selector */}
          <div className="pt-4 border-t border-white/10">
            <p className="text-xs text-silver mb-2">{t("common.language")}</p>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-colors ${
                    language === lang.code
                      ? 'bg-orange text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.code.toUpperCase()}</span>
                </button>
              ))}
            </div>
          </div>

          <Link
            href="/vacatures"
            className="mt-4 block w-full rounded-full bg-orange px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-orange-light transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Bekijk Vacatures
          </Link>
        </div>
      </div>
    </header>
  );
}
