import { useState } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export default function PasswordField({ id, label, error, className, ...rest }: Props) {
  const [show, setShow] = useState(false);
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-200">{label}</label>
      <div className={cn("flex items-center rounded-xl border bg-slate-900", error ? "border-rose-600" : "border-slate-700")}>
        <input
          id={id}
          type={show ? "text" : "password"}
          className={cn("flex-1 bg-transparent px-3 py-2 outline-none", className)}
          {...rest}
        />
        <button
          type="button"
          onClick={() => setShow(s => !s)}
          className="px-3 py-2 text-sm text-slate-300 hover:text-white"
          aria-label={show ? "Masquer le mot de passe" : "Afficher le mot de passe"}
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
      {error && <p className="text-xs text-rose-400">{error}</p>}
    </div>
  );
}
