import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Booger Client",
  description: "A clean Minecraft Fabric utility client returning this Christmas.",
  icons: {
    icon: "/icon.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
