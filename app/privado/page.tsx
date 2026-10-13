import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
export default async function PrivatePage() {
  const session = await auth();
  if (!session?.user) redirect("/login");
  return <section className="panel"><h1>Zona privada</h1><p className="notice">Has iniciado sesión correctamente. Este contenido solo se muestra cuando existe una sesión válida.</p><p><strong>Usuario:</strong> {session.user.name ?? "Usuario autenticado"}</p><p><strong>Correo:</strong> {session.user.email ?? "No disponible"}</p><p>En una aplicación real, aquí podrían mostrarse notas personales, préstamos o funciones reservadas a usuarios registrados.</p><form action={async () => { "use server"; await signOut({ redirectTo: "/" }); }}><button type="submit">Cerrar sesión</button></form></section>;
}
