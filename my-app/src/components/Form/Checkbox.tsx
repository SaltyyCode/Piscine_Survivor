import type { ReactNode } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode; // <- au lieu de string
};

export default function Checkbox({ label, ...rest }: Props) {
  return (
    <label className="inline-flex items-center gap-2 text-sm text-slate-300">
      <input type="checkbox" className="h-4 w-4 rounded border-slate-600 bg-slate-900" {...rest} />
      {label}
    </label>
  );
}
