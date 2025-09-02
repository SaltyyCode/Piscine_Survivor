import { useState } from "react";
import { Link } from "react-router-dom";
import { loginSchema, type LoginData } from "@/schemas/auth";
import AuthCard from "@/components/Auth/AuthCard";
import TextField from "@/components/Form/TextField";
import PasswordField from "@/components/Form/PasswordField";
import Checkbox from "@/components/Form/Checkbox";
import Button from "@/components/Button";
import ErrorAlert from "@/components/Form/ErrorAlert";
import ThemeToggle from "@/components/ThemeToggle";

export default function Login() {
  const [form, setForm] = useState<LoginData>({ email: "", password: "", remember: true });
  const [errors, setErrors] = useState<Partial<Record<keyof LoginData | "root", string>>>({});
  const [loading, setLoading] = useState(false);

  function validate() {
    const r = loginSchema.safeParse(form);
    if (!r.success) {
      const map: Record<string, string> = {};
      for (const issue of r.error.issues) {
        const key = (issue.path[0] ?? "root") as string;
        map[key] = issue.message;
      }
      setErrors(map);
      return false;
    }
    setErrors({});
    return true;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      // Exemple d'appel API
      await new Promise((r) => setTimeout(r, 800));
      alert(`Login OK: ${form.email}`);
    } catch {
      setErrors({ root: "Échec de connexion. Réessaie." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 transition-colors">
        <AuthCard
          title="Connexion"
          subtitle="Accède à ton espace startup / admin"
          socials={
            <div className="grid grid-cols-2 gap-3">
              <Button variant="ghost">Google</Button>
              <Button variant="ghost">GitHub</Button>
            </div>
          }
          footer={
            <>
              Pas de compte ?{" "}
              <Link to="/register" className="text-indigo-400 hover:text-indigo-300">
                Créer un compte
              </Link>
            </>
          }
        >
          <ErrorAlert message={errors.root} />
          <form className="space-y-4" onSubmit={onSubmit} noValidate>
            <TextField
              id="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              error={errors.email}
            />

            <PasswordField
              id="password"
              label="Mot de passe"
              placeholder="••••••••"
              autoComplete="current-password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              error={errors.password}
            />

            <div className="flex items-center justify-between">
              <Checkbox
                checked={form.remember ?? true}
                onChange={(e) => setForm({ ...form, remember: e.currentTarget.checked })}
                label="Se souvenir de moi"
              />
              <a href="#" className="text-sm text-indigo-400 hover:text-indigo-300">
                Mot de passe oublié ?
              </a>
            </div>

            <Button type="submit" loading={loading} className="w-full">
              Se connecter
            </Button>
          </form>
        </AuthCard>
      </div>

      {/* Bouton thème en bas à droite */}
      <ThemeToggle />
    </>
  );
}
