import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "WashMeNow+ | Find. Book. Wash. Track. Pay.",
    template: "%s | WashMeNow+",
  },
  description:
    "WashMeNow+ is Namibia’s verified car wash discovery platform. Find, book, wash, track and pay at trusted car washes near you.",
  applicationName: "WashMeNow+",
  keywords: [
    "WashMeNow",
    "WashMeNow+",
    "car wash Namibia",
    "car wash Windhoek",
    "Out of Nature Carwash",
    "verified carwash",
    "carwash booking",
    "carwash discovery",
    "carwash queue",
  ],
  authors: [{ name: "WashMeNow+" }],
  creator: "WashMeNow+",
  publisher: "WashMeNow+",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "WashMeNow+ | Find. Book. Wash. Track. Pay.",
    description:
      "Discover verified car washes near you, compare services, check queue visibility and request bookings.",
    siteName: "WashMeNow+",
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "WashMeNow+",
      },
    ],
    locale: "en_NA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WashMeNow+ | Find. Book. Wash. Track. Pay.",
    description: "Namibia’s verified car wash discovery platform.",
    images: ["/brand/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}