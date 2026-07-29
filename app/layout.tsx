import type { Metadata } from 'next';
import Header from '@/components/Header';
import QueryProvider from '@/components/QueryProvider/QueryProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'TravelTrucks — Camper Rental',
  description:
    'Rent the perfect camper for your next adventure. Browse our catalog of campers, filter by location, engine, and transmission, and book your trip with TravelTrucks.',
  keywords: ['camper rental', 'RV rental', 'travel', 'road trip', 'motorhome'],
  openGraph: {
    title: 'TravelTrucks — Camper Rental',
    description:
      'Rent the perfect camper for your next adventure with TravelTrucks.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <Header />
          {children}
        </QueryProvider>
        <ToastContainer position="top-right" autoClose={4000} />
      </body>
    </html>
  );
}
