import express from 'express'
import { buscarHoteles, crearReserva, cancelarReserva, getServices, getServiceById, añadirValoracion } from './controller.js'

const app = express()
app.use(express.json()) // Para poder recibir JSON en las peticiones HTTP

// Mostrar un archivo HTML de bienvenida
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de gestión de reservas de hoteles')
})

// Buscar hoteles
app.get('/api/hoteles/:ciudad', buscarHoteles)

// Crear una reserva
app.post('/api/reservas', crearReserva)

// Cancelar una reserva
app.delete('/api/reservas/:id', cancelarReserva)

// Obtener servicios adicionales del hotel
app.get('/api/servicios', getServices)
app.get('/api/servicios/:id', getServiceById)

// Añadir valoración y comentario sobre un hotel
app.post('/api/valoraciones', añadirValoracion)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
