import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Company Profile",
};

export default function RootLayout({ children }) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-black text-white antialiased`}
      >
        {/* NAVBAR */}
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/55 px-4 py-4 shadow-lg shadow-blue-500/5 backdrop-blur-xl transition-all duration-300 md:px-8">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <Link
              href="/"
              className="group flex w-fit items-center gap-3 text-lg font-bold tracking-wide text-white transition duration-300 hover:text-blue-200"
            >
              <span className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg shadow-blue-500/40 transition duration-300 group-hover:scale-125" />
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Digital Nexus
              </span>
            </Link>

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
              <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-gray-300 md:gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full px-3 py-2 transition duration-300 hover:bg-white/10 hover:text-blue-300 hover:shadow-md hover:shadow-blue-500/10"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/login"
                  className="rounded-full border border-blue-400/40 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-200 shadow-lg shadow-blue-500/10 transition duration-300 hover:border-blue-300 hover:bg-blue-500/20 hover:text-white hover:shadow-blue-500/20"
                >
                  Login
                </Link>
                <Link
                  href="/dashboard"
                  className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition duration-300 hover:scale-105 hover:from-blue-400 hover:to-purple-500 hover:shadow-purple-500/40"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* CONTENT */}
        <main className="flex-grow flex items-center justify-center">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="border-t border-white/10 bg-black/70 p-4 text-center text-sm text-gray-400 backdrop-blur-md">
          &copy; 2026 Digital Nexus. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
