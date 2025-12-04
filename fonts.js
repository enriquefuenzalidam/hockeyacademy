// app/fonts.js
import {
  Inter,
  Bebas_Neue,
  Cabin,
  Noto_Serif,
  Roboto,
  Roboto_Condensed,
} from 'next/font/google';

// Inter as your base sans
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Titles
export const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
});

export const cabin = Cabin({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cabin',
  display: 'swap',
});

export const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  display: 'swap',
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100','300','400','500','700','900'],
  style: ['normal','italic'],
  variable: '--font-roboto',
  display: 'swap',
});

export const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['100','300','400','500','700','900'],
  style: ['normal','italic'],
  variable: '--font-roboto-condensed',
  display: 'swap',
});
