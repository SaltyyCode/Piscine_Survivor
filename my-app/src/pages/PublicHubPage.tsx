import { Link } from "react-router-dom";
import Hero from "@/components/public/hub/Hero";
import HighlightCards from "@/components/public/hub/HighlightCards";
import StatsStrip from "@/components/public/hub/StatsStrip";


export default function PublicHubPage() {
    return (
        <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
            <Hero />
            <HighlightCards />
            <StatsStrip />
        </main>
    );
}
