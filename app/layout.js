import { Geist, Geist_Mono } from "next/font/google";
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
  return (
    <html>
<body className="min-h-screen flex flex-col bg-black text-white">

  {/* NAVBAR */}
  <nav className="sticky top-0 backdrop-blur-md bg-white/10 border-b border-gray-700 px-6 py-4 flex justify-between items-center">
    <h1 className="font-bold text-lg">Digital Nexus</h1>

    <div className="flex gap-6 text-sm">
      <a href="/" className="hover:text-blue-400">Home</a>
      <a href="/about" className="hover:text-blue-400">About</a>
      <a href="/services" className="hover:text-blue-400">Services</a>
      <a href="/contact" className="hover:text-blue-400">Contact</a>
      <a href="/" className="hover:text-blue-400 hover:scale-110 transition"></a>
    </div>
  </nav>

  {/* CONTENT */}
  <main className="flex-grow flex items-center justify-center">
    {children}
  </main>

  {/* FOOTER */}
  <footer className="bg-gray-800 text-center p-4">
    © 2026 Digital Nexus. All rights reserved.
  </footer>

</body>
    </html>
  );
}