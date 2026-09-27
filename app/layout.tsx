import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Booger Client",
  description: "Booger Client: a Minecraft 1.21.11 Fabric client with 17 modules, 3D cosmetics, 19 emotes and its own launcher.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
