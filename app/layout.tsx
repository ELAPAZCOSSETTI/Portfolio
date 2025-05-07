'use client';
import './globals.css'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import CircularWithValueLabel from './Components/Progress/Progress';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [pathname]);
  return (
    <html lang="en">

      <body className="flex flex-col min-h-screen">
        < header>
          <Navbar />
        </header>
        <main className="flex-grow">
          {loading ? <CircularWithValueLabel /> : children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
