import {Link} from "react-router-dom";


export default function Hero() {
    return (
        <section className="rounded-3xl bg-gradient-to-br from-indigo-600/20 via-indigo-500/10 to-cyan-500/20 border border-white/10 p-8 sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold">Bienvenue à l'incubateur JEB</h1>
        <p className="mt-2 text-white/80">Découvrez des projets innovants, suivez l'actualité et participez aux événements.</p>
        <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/startups" className="px-4 py-2 rounded-xl border border-white/15 hover:border-white/30">Explorer les startups</Link>
            <Link to="/events" className="px-4 py-2 rounded-xl border border-white/15 hover:border-white/30">Voir l'agenda</Link>
            <Link to="/news" className="px-4 py-2 rounded-xl border border-white/15 hover:border-white/30">Dernières actus</Link>
        </div>
        </section>
    );
}