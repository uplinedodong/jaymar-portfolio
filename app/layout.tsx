import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jaymar Aranas — Full-Stack & Mobile Developer",
  description:
    "Portfolio of Jaymar Aranas — a production-focused Full-Stack and Mobile App Developer from the Philippines. React Native, Next.js, and real-world systems.",
  keywords: ["Jaymar Aranas", "Full-Stack Developer", "Mobile App Developer", "React Native", "Next.js", "Philippines"],
  authors: [{ name: "Jaymar Aranas" }],
  creator: "Jaymar Aranas",
  metadataBase: new URL("https://jaymar.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://jaymar.vercel.app",
    title: "Jaymar Aranas — Full-Stack & Mobile Developer",
    description: "Production-focused Full-Stack and Mobile App Developer from the Philippines.",
    siteName: "Jaymar Aranas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaymar Aranas — Full-Stack & Mobile Developer",
    description: "Production-focused Full-Stack and Mobile App Developer from the Philippines.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
