import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';

export const metadata: Metadata = {
  title: 'Madhur Chouhan — AI Engineer & Researcher',
  description:
    'Portfolio of Madhur Chouhan — AI/ML Engineer & Researcher. Building intelligent systems with Machine Learning, Computer Vision, and LLMs. Research Intern at IIT Indore.',
  keywords: [
    'AI Engineer',
    'Machine Learning',
    'Computer Vision',
    'LLM',
    'Research',
    'IIT Indore',
    'Spectrum Sensing',
    'SDR',
    'Madhur Chouhan',
  ],
  authors: [{ name: 'Madhur Chouhan' }],
  openGraph: {
    title: 'Madhur Chouhan — AI Engineer & Researcher',
    description:
      'Building intelligent systems with AI. Researching ML-based Spectrum Sensing using SDR at IIT Indore.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Madhur Chouhan — AI Engineer & Researcher',
    description: 'Building intelligent systems with AI/ML, Computer Vision, and LLMs.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-[#090909]">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Toaster />
      </body>
    </html>
  );
}
