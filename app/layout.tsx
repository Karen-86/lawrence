import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Baskervville } from "next/font/google";
import "../styles/index.css";
import Provider from "@/context";
import { Navbar, Footer } from "@/components/index";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: [
    "100", // Thin
    "200", // ExtraLight
    "300", // Light
    "400", // Regular
    "500", // Medium
    "600", // SemiBold
    "700", // Bold
    "800", // ExtraBold
    "900", // Black
  ],
});

const baskervville = Baskervville({
  variable: "--font-baskervville",
  subsets: ["latin"],
  weight: [
    "400", // Regular
  ],
  //  style: ["normal", "italic"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://next-modules.vercel.app";

export const metadata: Metadata = {
  title: "LAWRENCE & WINSLADE – Mens Suits",
  description: "Explore our casual ranges, all bespoke and exclusive to you. Add your personality and style to your garments!",
  icons: {
    icon: [
      // { rel: "icon", url: "/assets/images/favicon/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", url: "/assets/images/favicon.png" },
    ],
    apple: "/assets/images/favicon/apple-icon.png",
  },
  openGraph: {
    title: "Sheet - Your Website Name",
    description: "This is the sheet page for managing your content.",
    url: `${siteUrl}`,
    siteName: "Your Website Name",
    images: [`${siteUrl}/assets/images/og-image.png`], //recomened sizes 1200x630, 1080 × 566, 600 × 315 | aspect ratio 1.91:1
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheet - Your Website Name",
    description: "This is the sheet page for managing your content.",
    images: [`${siteUrl}/assets/images/og-image.png`], //recomened sizes 1200x630, 1080 × 566, 600 × 315 | aspect ratio 1.91:1
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${baskervville.variable} ${montserrat.variable}  antialiased`}
      >
        <Provider>
            
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
