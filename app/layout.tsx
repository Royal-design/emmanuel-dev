import { ErrorBoundary } from "@/components/ErrorBoundary";
import { PagePreloader } from "@/components/PagePreloader";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { dmSans, inter } from "./fonts/fonts";
import "./globals.css";

const siteUrl = "https://emmanuel-developer.vercel.app";
const siteName = "Emmanuel Olowookere";
const title = "Emmanuel Olowookere - Frontend Engineer";
const description =
  "Portfolio of Emmanuel Olowookere, a frontend engineer in Nigeria building fast, accessible React, Next.js, TypeScript, and AI-powered web applications for modern teams.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  applicationName: siteName,
  keywords: [
    "Emmanuel Olowookere",
    "Oluwaseun Emmanuel",
    "Frontend Developer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "AI Frontend Engineer",
    "Web Developer Nigeria",
    "Frontend Developer Ibadan",
    "React Portfolio",
    "Next.js Portfolio",
    "JavaScript Developer",
    "Tailwind CSS Developer",
    "Web Development",
    "UI Developer",
    "Frontend Development Services",
    "Hire Frontend Developer",
    "Remote Frontend Developer",
  ],
  authors: [
    {
      name: "Emmanuel Olowookere",
      url: siteUrl,
    },
  ],
  creator: "Emmanuel Olowookere",
  publisher: "Emmanuel Olowookere",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title,
    description,
    url: siteUrl,
    siteName,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Emmanuel Olowookere - Frontend Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/avatar.png", type: "image/png" },
      { url: "/icon.png", type: "image/png", sizes: "248x244" },
    ],
    shortcut: "/avatar.png",
    apple: [{ url: "/apple-icon.png", sizes: "248x244", type: "image/png" }],
  },
  manifest: "/manifest.json",
  referrer: "origin-when-cross-origin",
  category: "technology",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Emmanuel Olowookere",
  alternateName: "Oluwaseun Emmanuel",
  url: siteUrl,
  image: `${siteUrl}/avatar.png`,
  jobTitle: "Frontend Engineer",
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ibadan",
    addressCountry: "Nigeria",
  },
  sameAs: [
    "https://github.com/Royal-design",
    "https://www.linkedin.com/in/emmanuel-olowookere-869262216",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Frontend Development",
    "Web Development",
    "UI/UX",
    "AI Interfaces",
    "Web Performance",
    "Accessibility",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Obafemi Awolowo University",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${siteName} Portfolio`,
  url: siteUrl,
  author: {
    "@type": "Person",
    name: "Emmanuel Olowookere",
  },
  description,
  publisher: {
    "@type": "Person",
    name: "Emmanuel Olowookere",
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${siteName} - Frontend Development Services`,
  url: siteUrl,
  image: `${siteUrl}/avatar.png`,
  description:
    "Frontend development services for responsive websites, dashboards, AI interfaces, and React or Next.js applications.",
  areaServed: ["Nigeria", "Worldwide"],
  founder: {
    "@type": "Person",
    name: "Emmanuel Olowookere",
  },
  serviceType: [
    "Frontend Development",
    "React Development",
    "Next.js Development",
    "UI Engineering",
    "AI Product Interface Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceJsonLd),
          }}
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="248x244" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body className={`${inter.variable} ${dmSans.variable} antialiased`}>
        <PagePreloader />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>{children}</ErrorBoundary>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
