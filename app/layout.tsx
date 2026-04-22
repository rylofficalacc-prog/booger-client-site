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
        <meta name="google-site-verification" content="mk0kIb21rU6E6veTOk0r-sIrC7d1ZD9qfurJob4401c" />
      </head>
      <body>{children}</body>
    </html>
  );
}