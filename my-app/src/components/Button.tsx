import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
  loading?: boolean;
};

export default function Button({ className, variant="primary", loading, children, ...rest }: Props) {
  return (
    <button
      {...rest}
      disabled={loading || rest.disabled}
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-4 py-2.5 font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.99]",
        variant === "primary" && "bg-indigo-500 text-white hover:bg-indigo-400",
        variant === "ghost" && "border border-slate-700 bg-slate-900 hover:bg-slate-800",
        className
      )}
    >
      {loading ? "…" : children}
    </button>
  );
}
