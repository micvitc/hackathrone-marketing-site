
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import { CurvedBorder } from "@/components/curvedBorder";

// Font configurations
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  preload: true,
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: true,
});

const cinzelDecorative = localFont({
  src: "./fonts/CinzelDecorative-Bold.ttf",
  variable: "--font-cinzel-decorative",
  weight: "700",
  display: "swap",
  preload: true,
});

const centaur = localFont({
  src: "./fonts/centaur-regular.ttf",
  variable: "--font-centaur",
  weight: "400",
  display: "swap",
  preload: true,
});

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "HackaThrone 2025 | VIT Chennai's Flagship Hackathon",
    template: "%s | HackaThrone 2025",
  },
  description:
    "HackaThrone - VIT Chennai's premier 24-hour national hackathon on Oct 29-30, 2025. ₹1 Lakh prize pool. Build groundbreaking solutions in AI/ML, Cybersecurity, Web Dev & Product Innovation. Powered by Microsoft Innovations Club.",
  keywords: [
    "HackaThrone",
    "VIT Chennai hackathon",
    "national hackathon 2025",
    "24 hour hackathon",
    "Microsoft Innovations Club",
    "MIC VIT",
    "AI ML hackathon",
    "cybersecurity hackathon",
    "blockchain competition",
    "web development contest",
    "product thinking",
    "hackathon Chennai",
    "college hackathon India",
    "coding competition VIT",
    "tech innovation event",
    "1 lakh prize hackathon",
    "student hackathon",
    "October 2025 hackathon",
  ],
  authors: [{ name: "Microsoft Innovations Club, VIT Chennai" }],
  creator: "HackaThrone - VIT Chennai",
  publisher: "Microsoft Innovations Club, VIT Chennai",
  
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzelDecorative.variable} ${centaur.variable} antialiased bg-black`}
      >
        <CurvedBorder className="p-2 m-3" strokeColor="#C9A85E" strokeWidth={2}>
                  <CurvedBorder className="p-1" strokeColor="#C9A85E" strokeWidth={1}><Navbar />
        {children}
        </CurvedBorder></CurvedBorder>
        <Footer />
      </body>
    </html>
  );
}
