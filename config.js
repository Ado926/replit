// ╔══════════════════════════════════════════════════════════╗
// ║                    🔧 CONFIGURACIÓN                     ║
// ║                     MayReplit v1.0                      ║
// ║                                                         ║
// ║        ¡Solo edita estos valores y ya está listo! 🚀   ║
// ╚══════════════════════════════════════════════════════════╝

export default {
  // 🔗 URL de tu Replit (REQUERIDO)
  // Copia la URL completa de tu proyecto de Replit aquí
  replitUrl: 'https://replit.com/@minexdt/LightblueSlipperyDecagon',

  // 🍪 Ruta del archivo de cookies (REQUERIDO)
  // Donde tienes guardadas las cookies de tu sesión de Replit
  cookiesPath: './cookies.json',

  // 📸 Intervalo de screenshots en milisegundos
  // Por defecto cada 5 minutos (5 * 60 * 1000)
  // Puedes cambiarlo a:
  // - 3 minutos: 3 * 60 * 1000
  // - 10 minutos: 10 * 60 * 1000
  // - 1 minuto: 1 * 60 * 1000
  screenshotInterval: 5 * 60 * 1000,

  // 👁️ Modo headless (sin ventana del navegador)
  // true = invisible (recomendado para servidores)
  // false = mostrar ventana del navegador (útil para debug)
  headless: true,

  // 📊 Mostrar estadísticas cada minuto
  // true = mostrar info del screenshot cada minuto
  // false = solo mostrar mensajes importantes
  showStats: true
}

// ═══════════════════════════════════════════════════════════
//                    📋 INSTRUCCIONES
// ═══════════════════════════════════════════════════════════
//
// 1. 🔗 CONFIGURAR URL:
//    - Ve a tu Replit
//    - Copia la URL completa
//    - Reemplaza 'https://replit.com/@tuusuario/TuProyecto'
//
// 2. 🍪 OBTENER COOKIES:
//    - Inicia sesión en Replit
//    - Presiona F12 (herramientas de desarrollador)
//    - Ve a Application → Cookies → https://replit.com
//    - Copia las cookies y guárdalas en cookies.json
//
// 3. 🚀 EJECUTAR:
//    - Guarda este archivo
//    - Ejecuta: node index.js
//    - ¡Listo! Tu Replit estará activo 24/7
//
// ═══════════════════════════════════════════════════════════