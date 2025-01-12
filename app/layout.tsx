import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin', 'greek'] });

export const metadata: Metadata = {
  title: 'Sarahah صراحة',
  description: 'Sarahah messaging platform',
}

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' min-h-screen flex flex-col items-center justify-between'}>
      <Navbar />
        {children}
        <Toaster position="bottom-center" toastOptions={{ duration: 3000 }} />
      <Footer />
      </body>
    </html>
  );
}
