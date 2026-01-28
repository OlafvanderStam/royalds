# Plan RoyalDS International Website

## Project Setup

- **Framework**: Next.js 16 met TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Montserrat (headings), Open Sans (body)
- **Linting**: ESLint

## Development Server

- **Poort**: 5053
- **Start commando**: `npm run dev`
- **Publieke URL**: https://azure010-5053.universal.cloud

## Kleurenpalet

```css
--navy: #0A1628        /* Primary - donkerblauw */
--navy-light: #1E3A5F  /* Lighter navy */
--teal: #0891B2        /* Primary - oceaan blauw */
--teal-light: #22D3EE  /* Lighter teal */
--orange: #F97316      /* Accent - energie */
--orange-light: #FB923C
--sand: #F5F0E8        /* Neutral background */
--silver: #94A3B8      /* Text secondary */
```

## Pagina's (Voltooid)

| Pagina | Route | Status |
|--------|-------|--------|
| Homepage | `/` | ✅ Klaar |
| Diensten | `/diensten` | ✅ Klaar |
| Voor Opdrachtgevers | `/opdrachtgevers` | ✅ Klaar |
| Voor Vakmensen | `/vakmensen` | ✅ Klaar |
| Sectoren overzicht | `/sectoren` | ✅ Klaar |
| Maritiem | `/sectoren/maritiem` | ✅ Klaar |
| Jachtbouw | `/sectoren/jachtbouw` | ✅ Klaar |
| Offshore | `/sectoren/offshore` | ✅ Klaar |
| Afbouw | `/sectoren/afbouw` | ✅ Klaar |
| Over Ons | `/over-ons` | ✅ Klaar |
| Contact | `/contact` | ✅ Klaar |
| Vacatures | `/vacatures` | ✅ Klaar |

## Componenten (Voltooid)

- `Header` - Sticky nav met scroll-effect, dropdown menu, taalwisselaar
- `Footer` - Contact info, Royal DS family links
- `VideoHero` - Video achtergrond met parallax
- `JobSearchWidget` - Glassmorphism zoekwidget
- `ScrollReveal` - Scroll animaties
- `AnimatedCounter` - Geanimeerde nummers
- `FloatingCTA` - Sticky actie knop
- `LanguageContext` - Meertalige ondersteuning (NL/EN/DE/PL/RO)

## Functionaliteit (Voltooid)

- [x] Video hero sectie
- [x] Job search widget met filters
- [x] Filters doorgeven naar vacatures pagina
- [x] Solliciteer button met vooringevuld formulier
- [x] Meertalige ondersteuning (5 talen)
- [x] Scroll animaties
- [x] Animated counters
- [x] Mobile responsive design
- [x] Glassmorphism effecten

## Nog Te Doen

### Hoge Prioriteit
- [ ] Echte bedrijfsvideo toevoegen (eigen Royal DS video)
- [ ] Echte foto's van projecten/vakmensen
- [ ] Royal DS logo toevoegen
- [ ] Contact formulier koppelen aan backend/email
- [ ] Vacatures koppelen aan database/CMS

### Medium Prioriteit
- [ ] Blog/Nieuws sectie
- [ ] Client testimonials uitbreiden
- [ ] FAQ pagina
- [ ] Privacy policy & Terms pagina
- [ ] Cookie consent banner
- [ ] Google Maps integratie op contact pagina

### Lage Prioriteit
- [ ] Dark mode toggle
- [ ] SEO optimalisatie (meta tags per pagina)
- [ ] Performance optimalisatie (image lazy loading)
- [ ] Analytics integratie
- [ ] Social media links/sharing

## Belangrijke Info uit Word Document

### Bedrijfsgegevens
- **Naam**: Royal DS International B.V.
- **Opgericht**: 2016
- **Adres**: Ambachtsweg 57, 6541 DA Nijmegen
- **Telefoon**: +31 (0)24 - 378 54 63
- **Email**: info@royalds-international.eu
- **Certificering**: SNA Gecertificeerd

### Royal DS Familie
1. Royal DS Personeel-service - royalds.nl
2. Royal DS Management - royalds-management.nl
3. Royal DS International - (deze site)
4. Royal DS Holding - royalds-holding.nl

### Kernboodschap
- Tagline: "Samen één stap in de goede richting"
- USP: "Oude rotten in het vak" (ervaring)
- Full-service: huisvesting, transport, juridische zaken

### Diensten
1. Personeelsuitzending
2. Werving & Selectie
3. Projectuitvoering
4. Detachering

### Sectoren
1. Maritiem & Scheepsbouw
2. Jachtbouw
3. Offshore
4. Afbouw & Interieur

## Design Richtlijnen (uit Word doc)

### 2025-2026 Trends Geïmplementeerd
- [x] Video hero sectie
- [x] Bold typography
- [x] Glassmorphism effecten
- [x] Micro-interactions (hover, animaties)
- [x] Block-based layouts (Bento grid)
- [x] Job cards prominent
- [x] Mobile-first responsive

### Typography
- Headlines: Montserrat Bold
- Body: Open Sans
- UI elementen: System fonts

### Componenten Styling
- Buttons: Rounded-full, hover lift effect
- Cards: Rounded-2xl, shadow-sm, hover shadow-lg
- Forms: Rounded-xl inputs, teal focus ring
