import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = { title: "Catálogo de libros", description: "Ejemplo educativo de Auth.js" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><header className="site-header"><Link href="/" className="brand">Catálogo de libros</Link><nav><Link href="/">Inicio</Link><Link href="/libros">Catálogo público</Link><Link href="/privado">Zona privada</Link><Link href="/login">Iniciar sesión</Link></nav></header><main className="container">{children}</main><footer className="site-footer">Proyecto educativo con Next.js y Auth.js.</footer></body></html>;
}
