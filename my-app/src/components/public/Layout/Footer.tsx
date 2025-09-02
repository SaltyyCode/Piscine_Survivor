export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-sm text-black/70 dark:text-white/60">
        <div>© {new Date().getFullYear()} JEB Incubator</div>
        <div className="flex gap-3">
          <a className="hover:underline text-lilac-400 hover:text-lilac-300 dark:text-rose-200 dark:hover:text-rose-100" href="#">Mentions légales</a>
          <a className="hover:underline text-lilac-400 hover:text-lilac-300 dark:text-rose-200 dark:hover:text-rose-100" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}