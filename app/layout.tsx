import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Emmanuel – Frontend & AI Engineer",
    template: "%s | Emmanuel",
  },
  description:
    "Portfolio of Emmanuel, a Frontend Engineer specializing in AI-driven web applications and Next.js development.",
  keywords: [
    "Frontend Engineer",
    "AI Engineer",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Portfolio",
    "Web Development",
    "Soloa AI",
    "Cartolinks Solutions",
  ],
  authors: [{ name: "Emmanuel", url: "https://emmanuel.com" }],
  creator: "Emmanuel",
  publisher: "Emmanuel",
  metadataBase: new URL("https://emmanuel.com"),
  alternates: {
    canonical: "https://emmanuel.com",
    languages: {
      "en-US": "/en-US",
      "fr-FR": "/fr-FR",
    },
  },
  openGraph: {
    type: "website",
    title: "Emmanuel – Frontend & AI Engineer",
    description:
      "Portfolio of Emmanuel, specializing in AI and frontend development with Next.js.",
    url: "https://emmanuel.com",
    siteName: "Emmanuel Portfolio",
    images: [
      {
        url: "https://emmanuel.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Emmanuel Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel – Frontend & AI Engineer",
    description:
      "Portfolio showcasing AI-driven and frontend web projects built with Next.js.",
    creator: "@emmanuel",
    images: ["https://emmanuel.com/og-image.png"],
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
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
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
