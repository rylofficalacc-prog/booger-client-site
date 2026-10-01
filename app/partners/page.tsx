import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import PartnerApplication from "../components/PartnerApplication";
export const metadata: Metadata = { title: "Partnerships", description: "Apply to collaborate with Booger Client as a Minecraft creator, server, or community." };
export default function PartnersPage(){return <><PageHeader eyebrow="Creators · Servers · Communities" title="Partner With Booger" sub="Have a Minecraft community or a collaboration idea? Let’s see what we can build together."/><section className="section tight"><PartnerApplication/></section></>;}
