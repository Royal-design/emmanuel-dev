import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts/fonts";
import { ThemeProvider } from "@/components/theme-provider";

import { ErrorBoundary } from "@/components/ErrorBoundary";

export const metadata: Metadata = {
  title: {
    default:
      "Emmanuel – Frontend & AI Engineer | Web Developer & Next.js Expert",
    template: "%s | Emmanuel",
  },
  description:
    "Portfolio of Emmanuel, a Frontend & AI Engineer specializing in Next.js, React, Tailwind CSS, AI-driven web applications, and modern web development solutions. Explore projects, Soloa AI contributions, Cartolinks Solutions work, and professional achievements.",
  keywords: [
    "Frontend Engineer",
    "AI Engineer",
    "Next.js Developer",
    "React Developer",
    "Tailwind CSS",
    "Emmanuel Portfolio",
    "Emmanuel Oluwaseun",
    "Oluwaseun",
    "Olowookere",
    "Frontend",
    "Web Development",
    "Portfolio",
    "Fullstack Developer",
    "JavaScript Developer",
    "Soloa AI",
    "Cartolinks Solutions",
    "AI Web Applications",
    "Next.js Projects",
    "Frontend Performance",
    "UX/UI Development",
    "Responsive Web Design",
    "Web Developer Portfolio",
    "Professional Web Developer",
    "Modern Web Technologies",
  ],
  authors: [
    { name: "Emmanuel", url: "https://emmanuel-developer.vercel.app/" },
  ],
  creator: "Emmanuel",
  publisher: "Emmanuel",
  metadataBase: new URL("https://emmanuel-developer.vercel.app/"),
  alternates: {
    canonical: "https://emmanuel-developer.vercel.app/",
    languages: {
      "en-US": "/en-US",
      "fr-FR": "/fr-FR",
    },
  },
  openGraph: {
    type: "website",
    title: "Emmanuel – Frontend & AI Engineer | Next.js Developer Portfolio",
    description:
      "Explore Emmanuel's portfolio showcasing AI-driven web applications, Soloa AI projects, Cartolinks Solutions work, and expertise in Next.js, React, and Tailwind CSS.",
    url: "https://emmanuel-developer.vercel.app/",
    siteName: "Emmanuel Portfolio",
    images: [
      {
        url: "https://emmanuel-developer.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Emmanuel Portfolio - Frontend & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel – Frontend & AI Engineer | Next.js Developer Portfolio",
    description:
      "Showcasing AI-driven web projects, Soloa AI contributions, Cartolinks Solutions work, and frontend development expertise in Next.js and React.",
    creator: "@emmanuel",
    images: ["https://emmanuel-developer.vercel.app/og-image.png"],
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
    apple: "/avatar.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>{children}</ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
