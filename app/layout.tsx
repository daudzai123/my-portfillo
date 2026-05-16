// app/layout.tsx
import type { Metadata } from "next";
import { 
  Inter, 
  Playfair_Display, 
  JetBrains_Mono 
} from "next/font/google";
import "./globals.css";
import Navigation from "@/components/ui/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Idrees Daudzai | UI/UX Designer & Application Developer",
  description: "Crafting enjoyable experiences for your business. Premium UI/UX Design and Application Development.",
  keywords: ["UI/UX Designer", "Application Developer", "Idrees Daudzai", "Portfolio", "Web Design", "App Development"],
  authors: [{ name: "Idrees Daudzai" }],
  openGraph: {
    title: "Idrees Daudzai | UI/UX Designer & Developer",
    description: "Crafting enjoyable experiences for your business",
    type: "website",
    siteName: "Idrees Daudzai Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}