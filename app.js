import express from 'express'
import hotelesRoutes from './routes/hoteles.routes.js'
import ciudadesRoutes from './routes/ciudades.routes.js'
import reservasRoutes from './routes/reservas.routes.js'
import huespedesRoutes from './routes/huespedes.routes.js'
import valoracionesRoutes from './routes/valoraciones.routes.js'

const app = express()
app.use(express.json()) // Para poder recibir JSON en las peticiones HTTP

// Mostrar un archivo HTML de bienvenida
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de gestión de reservas de hoteles')
})

app.use(hotelesRoutes)
app.use(ciudadesRoutes)
app.use(reservasRoutes)
app.use(huespedesRoutes)
app.use(valoracionesRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
