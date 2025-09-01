import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export default function TextField({ id, label, error, className, ...rest }: Props) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-200">{label}</label>
      <input
        id={id}
        {...rest}
        className={cn(
          "w-full rounded-xl bg-slate-900 border px-3 py-2 outline-none transition",
          error ? "border-rose-600 focus:ring-2 ring-rose-600/40" : "border-slate-700 focus:ring-2 ring-indigo-600/30",
          className
        )}
      />
      {error && <p className="text-xs text-rose-400">{error}</p>}
    </div>
  );
}
