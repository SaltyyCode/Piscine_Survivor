export default function StatsStrip() {
    return (
        <section>
            <div className="grid grid-cols-3 gap-4 rounded-2xl border p-4 text-center bg-white/70 dark:bg-[#141422]/70 border-lilac-100/60 dark:border-[#26263c] shadow-sm">
                <div>
                    <div className="text-2xl font-semibold text-slate-800 dark:text-white">120+</div>
                    <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Startups</div>
                </div>
                <div>
                    <div className="text-2xl font-semibold text-slate-800 dark:text-white">€80M</div>
                    <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Levés</div>
                </div>
                <div>
                    <div className="text-2xl font-semibold text-slate-800 dark:text-white">50+</div>
                    <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Events/an</div>
                </div>
            </div>
        </section>
    );
}