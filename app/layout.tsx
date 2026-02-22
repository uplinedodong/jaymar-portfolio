import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jaymar G. Aranas — Full-Stack & Mobile Developer",
  description:
    "Portfolio of Jaymar G. Aranas — a production-focused Full-Stack and Mobile App Developer from the Philippines. React Native, Next.js, and real-world systems.",
  keywords: ["Jaymar G. Aranas", "Full-Stack Developer", "Mobile App Developer", "React Native", "Next.js", "Philippines"],
  authors: [{ name: "Jaymar G Aranas" }],
  creator: "Jaymar G. Aranas",
  metadataBase: new URL("https://jaymar.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://jaymar.vercel.app",
    title: "Jaymar G. Aranas — Full-Stack & Mobile Developer",
    description: "Production-focused Full-Stack and Mobile App Developer from the Philippines.",
    siteName: "Jaymar G. Aranas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaymar G. Aranas — Full-Stack & Mobile Developer",
    description: "Production-focused Full-Stack and Mobile App Developer from the Philippines.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.simpleicons.org" />
        <link rel="dns-prefetch" href="https://cdn.simpleicons.org" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
