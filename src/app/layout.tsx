import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { LanguageProvider } from "@/context/LanguageContext";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Royal DS International | Maritime Recruitment Excellence",
  description: "Expert recruitment for yacht building, shipbuilding, and offshore projects. Connecting skilled maritime professionals with projects that demand excellence.",
  keywords: ["maritime recruitment", "yacht building", "shipbuilding", "offshore", "Netherlands", "recruitment agency"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingCTA />
        </LanguageProvider>
      </body>
    </html>
  );
}
