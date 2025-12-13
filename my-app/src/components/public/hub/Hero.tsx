import {Link} from "react-router-dom";


export default function Hero() {
    return (
        <section className="rounded-3xl p-8 sm:p-12 border backdrop-blur-sm
            border-lilac-100/60 dark:border-[#26263c]
            bg-white/70 dark:bg-[#141422]/70
            shadow-sm">
        <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lilac-400 to-rose-300 dark:from-lilac-300 dark:to-rose-300">Bienvenue à l'incubateur JEB</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl">Découvrez des projets innovants, suivez l'actualité et participez aux événements.</p>
        <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/startups" className="px-4 py-2 rounded-xl text-sm font-medium border border-lilac-200 hover:bg-lilac-100/60 dark:border-[#2d2d4a] dark:hover:bg-[#1d1d2e] transition">Explorer les startups</Link>
            <Link to="/events" className="px-4 py-2 rounded-xl text-sm font-medium border border-lilac-200 hover:bg-lilac-100/60 dark:border-[#2d2d4a] dark:hover:bg-[#1d1d2e] transition">Voir l'agenda</Link>
            <Link to="/news" className="px-4 py-2 rounded-xl text-sm font-medium border border-lilac-200 hover:bg-lilac-100/60 dark:border-[#2d2d4a] dark:hover:bg-[#1d1d2e] transition">Dernières actus</Link>
        </div>
        </section>
    );
}