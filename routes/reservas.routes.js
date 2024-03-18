import { Router } from 'express'

import { realizarReserva, cancelarReserva, eliminarReserva, modificarReserva } from './../controllers/reservas.controllers.js'

const router = Router()

// Crear una reserva
router.post('/api/reservas', realizarReserva)

// Cancelar una reserva
router.put('/api/reservas/:id', cancelarReserva)

// Eliminar una reserva
router.delete('/api/reservas/:id', eliminarReserva)

// Modificar una reserva
router.patch('/api/reservas/:id', modificarReserva)

export default router
