import type {Metadata, Viewport} from 'next';
import './globals.css'; // Global styles
import { BottomNav } from '@/components/BottomNav';
import { Player } from '@/components/Player';
import { AddToPlaylistModal } from '@/components/AddToPlaylistModal';
import { PWARegister } from '@/components/PWARegister';
import { BackgroundProvider } from '@/components/BackgroundProvider';

export const metadata: Metadata = {
  title: 'Music By Hidz',
  description: 'Platform streaming musik modern',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Music By Hidz',
  },
  icons: {
    apple: 'https://www.image2url.com/r2/default/images/1776746397505-70a6816b-9461-432e-ba0f-7b379a057038.jpeg',
  },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="text-white antialiased pb-24 min-h-screen" suppressHydrationWarning>
        <BackgroundProvider />
        <PWARegister />
        {children}
        <Player />
        <BottomNav />
        <AddToPlaylistModal />
      </body>
    </html>
  );
}
