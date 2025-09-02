import type { ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;   // ex: “Déjà un compte ? …”
  socials?: ReactNode;  // ex: boutons Google/GitHub
  icon?: ReactNode;    // ex: logo
  className?: string;
};

export default function AuthCard({ title, subtitle, children, footer, socials, icon }: Props) {
  return (
    <div className="min-h-dvh md:min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="mx-auto mb-3 h-12 w-12 grid place-items-center rounded-2xl bg-indigo-500/20">
            {icon ?? <span className="text-xl font-bold text-indigo-300">J</span>}
          </div>
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
        </div>

        {/* Form / content */}
        {children}

        {/* Socials + Footer */}
        {(socials || footer) && (
          <>
            {socials && (
              <>
                <div className="flex items-center gap-4 my-6">
                  <div className="h-px flex-1 bg-slate-800" />
                  <span className="text-xs text-slate-400">ou</span>
                  <div className="h-px flex-1 bg-slate-800" />
                </div>
                {socials}
              </>
            )}
            {footer && <div className="mt-6 text-center text-sm text-slate-400">{footer}</div>}
          </>
        )}
      </div>
    </div>
  );
}
