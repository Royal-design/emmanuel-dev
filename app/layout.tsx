import { ErrorBoundary } from "@/components/ErrorBoundary";
import { MotionProvider } from "@/components/motion-provider";
import { PagePreloader } from "@/components/PagePreloader";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { bricolage, inter, jetbrainsMono } from "./fonts/fonts";
import "./globals.css";

const siteUrl = "https://emmanuel-developer.vercel.app";
const siteName = "Oluwaseun Olowookere";
const title = "Oluwaseun Olowookere - Full-Stack Engineer";
const description =
  "Portfolio of Oluwaseun Olowookere, a full-stack engineer in Nigeria building fast, accessible React, Next.js, TypeScript, Node.js, Python and PostgreSQL applications from frontend to backend.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  applicationName: siteName,
  keywords: [
    "Oluwaseun Olowookere",
    "Oluwaseun Emmanuel",
    "Full-Stack Developer",
    "Full-Stack Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "NestJS Developer",
    "Express Developer",
    "FastAPI",
    "Python Developer",
    "PostgreSQL",
    "Prisma",
    "Web Developer Nigeria",
    "Full-Stack Developer Osun State",
    "React Portfolio",
    "Next.js Portfolio",
    "JavaScript Developer",
    "Tailwind CSS Developer",
    "Web Development",
    "UI Developer",
    "Backend Development",
    "Full-Stack Development Services",
    "Hire Full-Stack Developer",
    "Remote Full-Stack Developer",
  ],
  authors: [
    {
      name: "Oluwaseun Olowookere",
      url: siteUrl,
    },
  ],
  creator: "Oluwaseun Olowookere",
  publisher: "Oluwaseun Olowookere",
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
        alt: "Oluwaseun Olowookere - Full-Stack Engineer Portfolio",
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
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  referrer: "origin-when-cross-origin",
  category: "technology",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Oluwaseun Olowookere",
  alternateName: "Oluwaseun Emmanuel",
  url: siteUrl,
  image: `${siteUrl}/avatar.png`,
  jobTitle: "Full-Stack Engineer",
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Osun State",
    addressCountry: "Nigeria",
  },
  sameAs: [
    "https://github.com/Royal-design",
    "https://www.linkedin.com/in/oluwaseun-olowookere-869262216",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "NestJS",
    "Express",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "Full-Stack Development",
    "Backend Development",
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
    name: "Oluwaseun Olowookere",
  },
  description,
  publisher: {
    "@type": "Person",
    name: "Oluwaseun Olowookere",
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${siteName} - Full-Stack Development Services`,
  url: siteUrl,
  image: `${siteUrl}/avatar.png`,
  description:
    "Full-stack development services for responsive websites, dashboards, AI interfaces, and React, Next.js, Node.js or Python applications.",
  areaServed: ["Nigeria", "Worldwide"],
  founder: {
    "@type": "Person",
    name: "Oluwaseun Olowookere",
  },
  serviceType: [
    "Full-Stack Development",
    "React Development",
    "Next.js Development",
    "Backend Development",
    "API Development",
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
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
        <meta name="theme-color" content="#0c0c0a" />
      </head>
      <body
        className={`${bricolage.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <PagePreloader />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>
            <ErrorBoundary>{children}</ErrorBoundary>
          </MotionProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
