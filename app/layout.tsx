import type { Metadata, Viewport } from "next";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { discordMemberCount } from "./discord";
import { SITE_URL } from "./data";
import "./globals.css";

const DESCRIPTION = "A Minecraft 1.21.11 Fabric client with 19 modules, real 3D cosmetics, 19 emotes and its own launcher.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Booger Client", template: "%s · Booger Client" },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Booger Client",
    title: "Booger Client",
    description: DESCRIPTION,
    url: SITE_URL,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Booger Client - Minecraft 1.21.11 Fabric client" }],
  },
  twitter: { card: "summary_large_image", title: "Booger Client", description: DESCRIPTION, images: ["/og.png"] },
};

export const viewport: Viewport = { themeColor: "#7dff67" };

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const members = await discordMemberCount();
  return (
    <html lang="en">
      <body>
        <main className="page">
          <Nav members={members} />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
