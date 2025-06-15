import MayReplit from '@soymaycol/mayreplit'
import config from './config.js'
import fs from 'fs/promises'

console.log(`
╔══════════════════════════════════════════════════════════╗
║                     🚀 MayReplit v1.0                   ║
║                                                          ║
║              Mantén tu Replit activo 24/7                ║
║                Creado por SoyMaycol ❤️                  ║
╚══════════════════════════════════════════════════════════╝
`)

const validateConfig = () => {
  const errors = []

  if (!config.replitUrl || config.replitUrl === 'https://replit.com/@tuusuario/TuProyecto') {
    errors.push('❌ Por favor configura tu URL de Replit en config.js')
  }

  if (!config.cookiesPath) {
    errors.push('❌ Por favor especifica la ruta de tus cookies en config.js')
  }

  return errors
}

const checkCookiesFile = async () => {
  try {
    await fs.access(config.cookiesPath)
    console.log('✅ Archivo de cookies encontrado')
    return true
  } catch (error) {
    console.log(`❌ No se encontró el archivo de cookies: ${config.cookiesPath}`)
    console.log('💡 Asegúrate de tener un archivo JSON con tus cookies de Replit')
    return false
  }
}

const main = async () => {
  try {
    const configErrors = validateConfig()
    if (configErrors.length > 0) {
      console.log('\n🔥 Errores de configuración:')
      configErrors.forEach(error => console.log(error))
      console.log('\n📝 Edita el archivo config.js y vuelve a intentar')
      process.exit(1)
    }

    const cookiesExist = await checkCookiesFile()
    if (!cookiesExist) {
      process.exit(1)
    }

    console.log('\n⚙️  Configuración cargada:')
    console.log(`   🔗 URL: ${config.replitUrl}`)
    console.log(`   🍪 Cookies: ${config.cookiesPath}`)
    console.log(`   📸 Screenshots cada: ${config.screenshotInterval / 1000 / 60} minutos`)
    console.log(`   👁️  Modo headless: ${config.headless ? 'Sí' : 'No'}`)

    const mayReplit = new MayReplit({
      replitUrl: config.replitUrl,
      cookiesPath: config.cookiesPath,
      screenshotInterval: config.screenshotInterval,
      headless: config.headless
    })

    process.on('SIGINT', async () => {
      console.log('\n\n🛑 Deteniendo MayReplit...')
      await mayReplit.stop()
      console.log('👋 ¡Hasta luego!')
      process.exit(0)
    })

    process.on('SIGTERM', async () => {
      console.log('\n\n🛑 Proceso terminado, cerrando MayReplit...')
      await mayReplit.stop()
      process.exit(0)
    })

    if (config.showStats) {
      setInterval(() => {
        const screenshot = mayReplit.getScreenshot()
        if (screenshot) {
          const size = (screenshot.length / 1024).toFixed(2)
          console.log(`📊 Screenshot: ${size} KB | 🕐 ${new Date().toLocaleTimeString()}`)
        }
      }, 60 * 1000)
    }

    console.log('\n🚀 Iniciando MayReplit...')
    console.log('💡 Presiona Ctrl+C para detener')
    console.log('═'.repeat(60))

    await mayReplit.start()

  } catch (error) {
    console.error('\n💥 Error fatal:', error.message)
    console.log('\n🔧 Posibles soluciones:')
    console.log('   • Verifica tu archivo config.js')
    console.log('   • Asegúrate de tener el archivo de cookies')
    console.log('   • Verifica que la URL de Replit sea correcta')
    console.log('   • Reinstala las dependencias: npm install')
    process.exit(1)
  }
}

main()
