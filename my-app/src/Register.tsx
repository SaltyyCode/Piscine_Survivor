import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterData } from "@/schemas/auth";
import AuthCard from "@/components/Auth/AuthCard";
import TextField from "@/components/Form/TextField";
import PasswordField from "@/components/Form/PasswordField";
import Checkbox from "@/components/Form/Checkbox";
import Button from "@/components/Button";
import ErrorAlert from "@/components/Form/ErrorAlert";

export default function Register() {
  const [rootError, setRootError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: "", email: "", password: "", confirm: "", accept: true },
  });

  async function onSubmit(values: RegisterData) {
    setRootError(null);
    try {
      // Exemple d'appel:
      // const res = await fetch("/api/auth/register", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(values) });
      // if (!res.ok) throw new Error("Register failed");
      await new Promise((r) => setTimeout(r, 900));
      alert(`Compte créé pour ${values.email} ✅`);
      // navigate("/login");
    } catch (e: any) {
      setRootError(e?.message ?? "Inscription impossible. Réessaie.");
    }
  }

  return (
    <AuthCard
      title="Créer un compte"
      subtitle="Rejoins l’espace startups / admin"
      socials={
        <div className="grid grid-cols-2 gap-3">
          <Button variant="ghost">Google</Button>
          <Button variant="ghost">GitHub</Button>
        </div>
      }
      footer={
        <>
          Déjà un compte ?{" "}
          <Link to="/login" className="text-indigo-400 hover:text-indigo-300">
            Se connecter
          </Link>
        </>
      }
    >
      <ErrorAlert message={rootError} />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <TextField
          id="name"
          label="Nom"
          placeholder="Jane Doe"
          {...register("name")}
          error={errors.name?.message}
        />

        <TextField
          id="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          {...register("email")}
          error={errors.email?.message}
        />

        <PasswordField
          id="password"
          label="Mot de passe"
          placeholder="••••••••"
          autoComplete="new-password"
          {...register("password")}
          error={errors.password?.message}
        />

        <PasswordField
          id="confirm"
          label="Confirmer le mot de passe"
          placeholder="••••••••"
          autoComplete="new-password"
          {...register("confirm")}
          error={errors.confirm?.message}
        />

        <div>
          <Checkbox
            {...register("accept")}
            label={
              <span>
                J’accepte les{" "}
                <a className="text-indigo-400 hover:text-indigo-300 underline-offset-2 hover:underline" href="#">
                  CGU
                </a>.
              </span>
            }
          />
          {errors.accept && <p className="mt-1 text-xs text-rose-400">{errors.accept.message}</p>}
        </div>

        <Button type="submit" loading={isSubmitting} className="w-full">
          Créer un compte
        </Button>
      </form>
    </AuthCard>
  );
}
