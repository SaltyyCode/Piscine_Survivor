export default function StatsStrip() {
    return (
        <section>
            {/* TODO: remplacer ces chiffres par un endpoint /api/stats plus tard */}
            <div className="grid grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <div>
                    <div className="text-2xl font-semibold">120+</div>
                    <div className="text-xs uppercase tracking-wide text-white/70">Startups</div>
                </div>
                <div>
                    <div className="text-2xl font-semibold">€80M</div>
                    <div className="text-xs uppercase tracking-wide text-white/70">Levés</div>
                </div>
                <div>
                    <div className="text-2xl font-semibold">50+</div>
                    <div className="text-xs uppercase tracking-wide text-white/70">Events/an</div>
                </div>
            </div>
        </section>
    );
}