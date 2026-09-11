import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Booger Client',
  description: 'A Minecraft Fabric client project returning this Christmas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
