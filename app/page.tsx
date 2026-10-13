import Link from "next/link";
export default function HomePage() {
  return <section className="panel"><h1>Catálogo de libros</h1><p>Esta aplicación muestra cómo separar el contenido público de una zona privada protegida mediante Auth.js.</p><p>El catálogo general está disponible para cualquier visitante.</p><p><Link className="button" href="/libros">Consultar catálogo público</Link></p><p>Para acceder a la zona privada, inicia sesión con el usuario de prueba.</p><p><Link href="/login">Ir al inicio de sesión</Link></p></section>;
}
