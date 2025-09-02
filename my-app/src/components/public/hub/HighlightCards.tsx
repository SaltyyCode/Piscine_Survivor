import {Link} from "react-router-dom";


export default function HighlightCards() {
    return (
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* TODO: Remplacer ces placeholders par des appels API une fois le back prêt */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold">Startup du moment</h3>
                <p className="mt-1 text-white/80 text-sm">Une courte description pour donner envie d'en voir plus.</p>
                <Link to="/startups" className="mt-3 inline-block text-indigo-300">Voir le catalogue →</Link>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold">Prochain événement</h3>
                <p className="mt-1 text-white/80 text-sm">Pitch session – Jeudi 12/09 – Paris</p>
                <Link to="/events" className="mt-3 inline-block text-indigo-300">Voir l'agenda →</Link>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold">À la une</h3>
                <p className="mt-1 text-white/80 text-sm">Levée de fonds de 2M€ pour GreenAI.</p>
                <Link to="/news" className="mt-3 inline-block text-indigo-300">Lire les actus →</Link>
            </div>
        </section>
    );
}