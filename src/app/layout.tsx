import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "@/components/navbar";
import { LanguageProvider } from "@/components/language-provider";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import {StrictMode} from "react";

// Load fonts
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-montserrat-alternates",
  display: "swap",
  style: ["normal"],
});

export const metadata = {
  title: "Vigouroux",
  description:
      "toiturier belgique | dakwerkers belgië",
  keywords:
      "toiturier belgique, dakwerkers belgië",
  robots: "index, follow",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <StrictMode>
      <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-05CXENLVGM"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-05CXENLVGM');
          `}
        </Script>
      </head>
      <body className={`${inter.className} ${montserrat.variable}`}>
      <LanguageProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
        </div>
        <Toaster />
      </LanguageProvider>
      </body>
      </html>
        </StrictMode>
  );
}