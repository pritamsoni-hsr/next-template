import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import localFont from 'next/font/local';

import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'XLeapLab - Innovating the Future of Technology',
  description:
    'XLeapLab is at the forefront of technological innovation, delivering cutting-edge solutions and transformative digital experiences that shape the future.',
  keywords: ['XLeapLab', 'Technology Innovation', 'Digital Solutions', 'Software Development', 'Tech Consulting'],
  authors: [{ name: 'XLeapLab Team' }],
  openGraph: {
    title: 'XLeapLab - Innovating the Future of Technology',
    description: 'Leading the way in technological innovation and digital transformation',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XLeapLab - Innovating the Future of Technology',
    description: 'Leading the way in technological innovation and digital transformation',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={'en'}>
      <ThemeProvider enableSystem attribute={'class'} defaultTheme={'system'}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
