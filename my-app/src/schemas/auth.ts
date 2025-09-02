import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email requis.").email("Email invalide."),
  password: z.string().min(1, "Mot de passe requis."),
  remember: z.boolean().optional().default(true),
});
export type LoginData = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  name: z.string().min(2, "Nom trop court."),
  email: z.string().email("Email invalide."),
  password: z.string()
    .min(8, "Au moins 8 caractères.")
    .regex(/[A-Z]/, "1 majuscule requise.")
    .regex(/[a-z]/, "1 minuscule requise.")
    .regex(/\d/, "1 chiffre requis."),
  confirm: z.string(),
  accept: z.boolean().refine(v => v, "Vous devez accepter les CGU."),
}).refine(vals => vals.password === vals.confirm, {
  path: ["confirm"],
  message: "Les mots de passe ne correspondent pas.",
});
export type RegisterData = z.infer<typeof registerSchema>;
