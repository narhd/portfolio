import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Daniel Narh - Full Stack Developer Portfolio",
  description: "Modern, responsive developer portfolio showcasing skills, experiences, and projects with engaging animations. Built with Next.js, TypeScript, and Tailwind CSS.",
  keywords: "Full Stack Developer, React, Next.js, TypeScript, Node.js, Portfolio",
  authors: [{ name: "Daniel Narh" }],
  creator: "Daniel Narh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danielkpodo.github.io/portfolio/",
    title: "Daniel Narh - Full Stack Developer Portfolio",
    description: "Modern, responsive developer portfolio showcasing skills, experiences, and projects with engaging animations.",
    siteName: "Daniel Narh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Narh - Full Stack Developer Portfolio",
    description: "Modern, responsive developer portfolio showcasing skills, experiences, and projects with engaging animations.",
    creator: "@NarhKpodo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
