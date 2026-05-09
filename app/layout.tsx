import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Lab",
  description: "QA analyst building AI-powered audit systems and automation tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="w-full bg-gray-900 text-white p-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-green-400 text-lg hover:text-green-300 transition-colors">
            AI Lab
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-green-400 transition-colors">About</Link>
            <Link href="/projects" className="hover:text-green-400 transition-colors">Projects</Link>

          </div>
        </nav>
        {children}
        <footer className="w-full bg-gray-900 text-gray-500 text-center p-6 text-sm mt-auto">
          <p>Built by Seraj — AI + Automation Specialist</p>
          <p className="text-gray-600 mt-1">From zero to engineer, one day at a time.</p>
        </footer>
      </body>
    </html>
  );
}
