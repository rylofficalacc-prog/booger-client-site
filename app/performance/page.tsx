import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import PerformancePresets from "../components/PerformancePresets";
export const metadata: Metadata={title:"Performance",description:"Compare suggested performance settings for your Minecraft setup."};
export default function PerformancePage(){return <><PageHeader eyebrow="Performance" title="Find Your Balance" sub="Compare three starting points, then tune them for your PC."/><section className="section tight"><PerformancePresets/></section></>;}
