import {Link, NavLink, useLocation} from "react-router-dom";

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `rounded-xl px-3 py-2 text-sm ${isActive ? "bg-white/10" : "hover:bg-white/5"}`
      }
    >
      {children}
    </NavLink>
  );
}

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-40 border-b border-border/10 backdrop-blur bg-surface/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center gap-3">
        {/* Left actions: Login/Register (move left as requested) */}
        <div className="flex items-center gap-2 mr-2">
          <Link to="/login" className="px-3 py-2 rounded-xl border border-border/15 hover:border-border/30 text-sm">
            Se connecter
          </Link>
          <Link to="/register" className="px-3 py-2 rounded-xl border border-brand text-brand hover:bg-brand/10 text-sm">
            Créer un compte
          </Link>
        </div>

        {/* Brand */}
        <Link to="/" className="font-semibold tracking-tight mr-2">JEB Incubator</Link>

        {/* Middle nav */}
        <nav className="hidden sm:flex items-center gap-1 ml-auto">
          <NavItem to="/startups">Startups</NavItem>
          <NavItem to="/events">Événements</NavItem>
          <NavItem to="/news">Actus</NavItem>
        </nav>
      </div>
    </header>
  );
}