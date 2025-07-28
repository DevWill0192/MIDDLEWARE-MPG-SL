# Vercel CORS Proxy

Este proyecto es un proxy CORS desplegado en Vercel que actúa como intermediario entre aplicaciones frontend y la API de SuperLikers Labs, resolviendo problemas de CORS (Cross-Origin Resource Sharing).

## 🚀 ¿Qué hace este proyecto?

Este proxy permite que aplicaciones web se comuniquen con la API de SuperLikers Labs sin problemas de CORS. Actúa como un intermediario que:

- Recibe peticiones desde el frontend
- Las reenvía a la API de SuperLikers Labs
- Aplica los headers CORS necesarios
- Devuelve las respuestas al frontend

## 📋 Endpoints Disponibles

### Producción (Vercel)
Los endpoints están desplegados en Vercel y son accesibles en:
- `https://tu-dominio-vercel.vercel.app/api/login`
- `https://tu-dominio-vercel.vercel.app/api/logout`
- `https://tu-dominio-vercel.vercel.app/api/entries`

### Local
Cuando ejecutes el proyecto localmente, los endpoints estarán disponibles en:
- `http://localhost:3000/api/login`
- `http://localhost:3000/api/logout`
- `http://localhost:3000/api/entries`

## 🛠️ Tecnologías Utilizadas

- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **Vercel** - Plataforma de despliegue
- **node-fetch** - Cliente HTTP para Node.js
- **CORS** - Middleware para manejo de CORS

## 📦 Instalación y Configuración Local

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos para ejecutar localmente

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd vercel-cors-prox
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Accede a los endpoints**
   - Login: `http://localhost:3000/api/login`
   - Logout: `http://localhost:3000/api/logout`
   - Entries: `http://localhost:3000/api/entries`

## 🔧 Configuración de Vercel

El proyecto está configurado para desplegarse automáticamente en Vercel. El archivo `vercel.json` define las rutas:

```json
{
  "version": 2,
  "routes": [
    { "src": "/api/login", "dest": "/api/login.js" },
    { "src": "/api/logout", "dest": "/api/logout.js" },
    { "src": "/api/entries", "dest": "/api/entries.js" }
  ]
}
```

## 📡 Uso de los Endpoints

### POST /api/login
Autentica usuarios con la API de SuperLikers Labs.

**Request:**
```json
{
  "email": "usuario@ejemplo.com",
  "password": "contraseña"
}
```

**Response:**
```json
{
  "token": "jwt-token",
  "user": {
    "id": 123,
    "email": "usuario@ejemplo.com"
  }
}
```

### POST /api/logout
Cierra la sesión del usuario.

**Headers requeridos:**
```
Authorization: Bearer <token>
```

### POST /api/entries
Gestiona las entradas/actividades del usuario.

**Headers requeridos:**
```
Authorization: Bearer <token>
```

**Request:**
```json
{
  "data": "información de la entrada"
}
```

## 🔒 Configuración CORS

El proyecto incluye una utilidad CORS (`utils/cors.js`) que configura automáticamente los headers necesarios:

- `Access-Control-Allow-Origin: *`
- `Access-Control-Allow-Methods: GET,OPTIONS,PATCH,DELETE,POST,PUT`
- `Access-Control-Allow-Headers: X-CSRF-Token, X-Requested-With, Accept, Content-Type, Authorization`
- `Access-Control-Allow-Credentials: true`

## 🚀 Despliegue

Para desplegar en Vercel:

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente la configuración
3. Los endpoints estarán disponibles en tu dominio de Vercel

## 📝 Notas Importantes

- Todos los endpoints reenvían las peticiones a `https://api.superlikerslabs.com`
- El proxy maneja automáticamente los headers CORS
- Las respuestas mantienen el status code original de la API
- Los errores se capturan y devuelven con status 500

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles. 