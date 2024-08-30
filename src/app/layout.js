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
      <body className="font-body pb-[2.8125rem]">
        <div className="fixed bottom-0 z-10 w-full border-t bg-[var(--background-rgb)] px-5 py-4">
          <Header />
        </div>
        <main className="mx-auto px-5">{children}</main>
      </body>
    </html>
  );
}
