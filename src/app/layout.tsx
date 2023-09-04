import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import styles from './layout.module.scss';

import 'modern-normalize';
import ThemeProvider from '../core/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Futsal Next App',
  description:
    'Futsal is a variant of association football played on a hard court, smaller than a football pitch, and mainly indoors. It can be considered a version of five-a-side football.',
  icons: [
    {
      url: '../assets/favicon.ico',
      rel: 'icon',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={styles.root}>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
