import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Booger Client",
  description: "A cleaner Minecraft Fabric client built for smoother gameplay.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
