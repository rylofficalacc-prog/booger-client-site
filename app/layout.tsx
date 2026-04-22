import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Booger Client - Free Minecraft Utility Mod",
  description: "A sleek, lightweight Minecraft utility mod for Fabric 1.21.4. Free forever.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        PASTE_YOUR_META_TAG_HERE
      </head>
      <body>{children}</body>
    </html>
  );
}