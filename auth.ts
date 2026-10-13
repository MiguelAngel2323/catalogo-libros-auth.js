import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  providers: [
    Credentials({
      name: "Usuario de prueba",
      credentials: {
        username: { label: "Usuario", type: "text" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        // Solo para la demostración. No usar credenciales fijas en producción.
        if (credentials?.username === "alumno" && credentials?.password === "libros123") {
          return { id: "1", name: "Alumno de prueba", email: "alumno@example.com" };
        }
        return null;
      },
    }),
  ],
});
