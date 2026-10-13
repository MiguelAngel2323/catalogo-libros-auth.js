# Catálogo de libros con Auth.js

## Instalación y ejecución

Abre el proyecto en Visual Studio Code y abre una terminal en la carpeta donde se encuentra el archivo `package.json`.

Ejecuta los siguientes comandos, uno por uno y en este orden:

**1. Instalar las dependencias**

```powershell
npm.cmd install
```

**2. Generar el secreto de Auth.js**

```powershell
npx auth secret
```

Copia el secreto generado y crea un archivo llamado `.env.local` en la misma carpeta que `package.json`. Escribe dentro la siguiente línea, sustituyendo el texto de ejemplo por el secreto generado:

```env
AUTH_SECRET="PEGA_AQUI_EL_SECRETO_GENERADO"
```

Guarda el archivo antes de continuar.

**3. Iniciar la aplicación**

```powershell
npm.cmd run dev
```

Abre el navegador y accede a:

http://localhost:3000 o al puerto que te aparezca en la terminal

## Credenciales de prueba

- **Usuario:** `alumno`
- **Contraseña:** `libros123`

## Funcionamiento

La aplicación contiene un catálogo público de libros que puede consultar cualquier visitante y una zona privada a la que solo se puede acceder después de iniciar sesión.

