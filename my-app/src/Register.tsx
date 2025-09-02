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
import ThemeToggle from "@/components/ThemeToggle";

export default function Register() {
  const [rootError, setRootError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: "", email: "", password: "", confirm: "", accept: true },
  });

  async function onSubmit(values: RegisterData) {
    setRootError(null);
    try {
      await new Promise((r) => setTimeout(r, 900));
      alert(`Compte créé pour ${values.email} ✅`);
    } catch (e: any) {
      setRootError(e?.message ?? "Inscription impossible. Réessaie.");
    }
  }

  return (
    <>
      <AuthCard
        title="Créer un compte"
        subtitle="Rejoins l’espace startups / admin"
        className="shadow-card rounded-xl2 bg-white/80 backdrop-blur-sm border border-lilacDream-100 dark:bg-[rgba(20,20,32,0.8)] dark:border-[#242446]"
        socials={
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="ghost"
              className="bg-[#1d1d2e] border border-[#2d2d55] text-white hover:bg-[#242438] transition"
            >
              Google
            </Button>
            <Button
              variant="ghost"
              className="bg-[#1d1d2e] border border-[#2d2d55] text-white hover:bg-[#242438] transition"
            >
              GitHub
            </Button>
          </div>
        }
        footer={
          <>
            Déjà un compte ?{" "}
            <Link to="/login" className="text-lilac-400 hover:text-lilac-300 dark:text-rose-200 dark:hover:text-rose-100">
              Se connecter
            </Link>
          </>
        }
      >
        <ErrorAlert message={rootError ?? undefined} />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <TextField id="name" label="Nom" placeholder="Jane Doe" {...register("name")} error={errors.name?.message} />
          <TextField id="email" label="Email" type="email" placeholder="you@example.com" autoComplete="email" {...register("email")} error={errors.email?.message} />
          <PasswordField id="password" label="Mot de passe" placeholder="••••••••" autoComplete="new-password" {...register("password")} error={errors.password?.message} />
          <PasswordField id="confirm" label="Confirmer le mot de passe" placeholder="••••••••" autoComplete="new-password" {...register("confirm")} error={errors.confirm?.message} />

          <div>
            <Checkbox
              {...register("accept")}
              label={
                <span>
                  J’accepte les{" "}
                  <a
                    className="text-lilac-400 hover:text-lilac-300 dark:text-rose-200 dark:hover:text-rose-100 underline-offset-2 hover:underline"
                    href="#"
                  >
                    CGU
                  </a>.
                </span>
              }
            />
            {errors.accept && <p className="mt-1 text-xs text-rose-300 dark:text-lilac-300">{errors.accept.message}</p>}
          </div>

          <Button
            type="submit"
            loading={isSubmitting}
            className="w-full bg-lilac-400 hover:bg-lilac-300 text-white dark:bg-rose-300 dark:hover:bg-rose-200 dark:text-black"
          >
            Créer un compte
          </Button>
        </form>
      </AuthCard>

      <ThemeToggle />
    </>
  );
}
