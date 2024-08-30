import Header from "@/components/Header";
import "./globals.css";

import { Montserrat, Syncopate } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-syncopate",
});

export const metadata = {
  title: "Partnership",
  description: "Partnership",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syncopate.variable} ${montserrat.variable}`}>
      <body>
        <div className="sticky bottom-0 z-10 bg-[var(--background-rgb)] px-4 md:px-[30px]">
          <Header className="mx-auto max-w-full border-b-0.5 border-text-900 py-3 xl:max-w-[var(--header-max-width)]" />
        </div>
        <main className="text-body mx-auto max-w-[var(--max-width)] px-4 md:px-[30px]">
          {children}
        </main>
      </body>
    </html>
  );
}
