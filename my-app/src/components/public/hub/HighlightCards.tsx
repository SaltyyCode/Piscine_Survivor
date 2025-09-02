import {Link} from "react-router-dom";


export default function HighlightCards() {
    return (
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border p-5 bg-white/70 dark:bg-[#141422]/70 border-lilac-100/60 dark:border-[#26263c] shadow-sm">
                <h3 className="font-semibold text-slate-800 dark:text-white">Startup du moment</h3>
                <p className="mt-1 text-slate-600 dark:text-slate-300 text-sm">Une courte description pour donner envie d'en voir plus.</p>
                <Link to="/startups" className="mt-3 inline-block text-lilac-400 hover:text-lilac-300 dark:text-rose-200 dark:hover:text-rose-100 text-sm font-medium">Voir le catalogue →</Link>
            </div>
            <div className="rounded-2xl border p-5 bg-white/70 dark:bg-[#141422]/70 border-lilac-100/60 dark:border-[#26263c] shadow-sm">
                <h3 className="font-semibold text-slate-800 dark:text-white">Prochain événement</h3>
                <p className="mt-1 text-slate-600 dark:text-slate-300 text-sm">Pitch session – Jeudi 12/09 – Paris</p>
                <Link to="/events" className="mt-3 inline-block text-lilac-400 hover:text-lilac-300 dark:text-rose-200 dark:hover:text-rose-100 text-sm font-medium">Voir l'agenda →</Link>
            </div>
            <div className="rounded-2xl border p-5 bg-white/70 dark:bg-[#141422]/70 border-lilac-100/60 dark:border-[#26263c] shadow-sm">
                <h3 className="font-semibold text-slate-800 dark:text-white">À la une</h3>
                <p className="mt-1 text-slate-600 dark:text-slate-300 text-sm">Levée de fonds de 2M€ pour GreenAI.</p>
                <Link to="/news" className="mt-3 inline-block text-lilac-400 hover:text-lilac-300 dark:text-rose-200 dark:hover:text-rose-100 text-sm font-medium">Lire les actus →</Link>
            </div>
        </section>
    );
}