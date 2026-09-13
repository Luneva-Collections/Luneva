import './globals.css';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { CartProvider } from '../lib/cart-context';
import AnnouncementBar from '../components/AnnouncementBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
});

export const metadata = {
  title: 'LUNÉVA - Hydration, Elevated',
  description: 'Premium 32oz double-wall insulated water bottle',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${manrope.variable}`}>
        <CartProvider>
          <AnnouncementBar />
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
