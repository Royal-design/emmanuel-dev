import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { dmSans, inter } from "./fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "Emmanuel Olowookere – Frontend Engineer | React & Next.js Developer",
    template: "%s | Emmanuel Olowookere",
  },
  description:
    "Emmanuel Olowookere is a Frontend Engineer specializing in React, Next.js, TypeScript, and modern web development. Building fast, accessible, and visually engaging web applications. Based in Ibadan, Nigeria.",
  keywords: [
    "Emmanuel Olowookere",
    "Frontend Developer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
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
      url: "https://emmanuel-developer.vercel.app/",
    },
  ],
  creator: "Emmanuel Olowookere",
  publisher: "Emmanuel Olowookere",
  metadataBase: new URL("https://emmanuel-developer.vercel.app/"),
  alternates: {
    canonical: "https://emmanuel-developer.vercel.app/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title:
      "Emmanuel Olowookere – Frontend Engineer | React & Next.js Developer",
    description:
      "Frontend Engineer specializing in React, Next.js, and TypeScript. Building fast, accessible web applications. View my portfolio and projects.",
    url: "https://emmanuel-developer.vercel.app/",
    siteName: "Emmanuel Olowookere Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Emmanuel Olowookere - Frontend Engineer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Olowookere – Frontend Engineer",
    description:
      "Frontend Engineer specializing in React, Next.js, and TypeScript. Building fast, accessible web applications.",
    creator: "@emmanuel_dev",
    images: ["/og-image.png"],
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
    icon: "/avatar.png",
    shortcut: "/avatar.png",
    apple: {
      url: "/avatar.png",
      sizes: "180x180",
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Emmanuel Olowookere",
  alternateName: "Oluwaseun Emmanuel",
  url: "https://emmanuel-developer.vercel.app/",
  image: "https://emmanuel-developer.vercel.app/emmy.webp",
  jobTitle: "Frontend Engineer",
  description:
    "Frontend Engineer specializing in React, Next.js, TypeScript, and modern web development.",
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
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Obafemi Awolowo University",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Emmanuel Olowookere Portfolio",
  url: "https://emmanuel-developer.vercel.app/",
  author: {
    "@type": "Person",
    name: "Emmanuel Olowookere",
  },
  description:
    "Portfolio website of Emmanuel Olowookere, a Frontend Engineer specializing in React, Next.js, and TypeScript.",
  publisher: {
    "@type": "Person",
    name: "Emmanuel Olowookere",
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/avatar.png" sizes="180x180" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body className={`${inter.variable} ${dmSans.variable} antialiased`}>
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
