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
            <Link href="/chat" className="hover:text-green-400 transition-colors">Let's Chat</Link>

          </div>
        </nav>
        {children}
        <footer className="w-full bg-gray-900 border-t border-gray-800 text-center p-8 mt-auto">
          <p className="text-green-400 font-bold text-sm mb-3">Seraj's AI Lab</p>
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://github.com/serajautomated" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-green-400 transition-colors text-sm">GitHub</a>
            <a href="https://www.linkedin.com/in/seraj-habib-49a099174/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-green-400 transition-colors text-sm">LinkedIn</a>
            <a href="mailto:serajhabib5@gmail.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-green-400 transition-colors text-sm">Email</a>
            <a href="https://www.instagram.com/fuhrersrh/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-green-400 transition-colors text-sm">Instagram</a>
          </div>
          <p className="text-gray-600 text-xs mt-2">From zero to automated, one day at a time.</p>
        </footer>
      </body>
    </html>
  );
}
