"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
export function LoginForm() {
  const [error, setError] = useState("");
  async function handleSubmit(formData: FormData) {
    setError("");
    const result = await signIn("credentials", { username: formData.get("username"), password: formData.get("password"), redirect: false, redirectTo: "/privado" });
    if (result?.error) { setError("Usuario o contraseña incorrectos."); return; }
    window.location.href = "/privado";
  }
  return <form action={handleSubmit}><label htmlFor="username">Usuario</label><input id="username" name="username" type="text" autoComplete="username" required /><label htmlFor="password">Contraseña</label><input id="password" name="password" type="password" autoComplete="current-password" required />{error && <p role="alert">{error}</p>}<button type="submit">Entrar</button></form>;
}
