import { Router } from 'express'

import { listarHoteles, hotelPorId, buscarHoteles, serviciosHotel } from './../controllers/hoteles.controllers.js'

const router = Router()
// Listar todos los hoteles
router.get('/api/hoteles', listarHoteles)

// Mostrar informacion de un Hotel por ID
router.get('/api/hoteles/:id', hotelPorId)

// Buscar hoteles
router.get('/api/buscar?ciudad=:ciudad&fechaEntrada=:fechaEntrada&fechaSalida=:fechaSalida&tipoHabitacion=:tipoHabitacion&cantidadHuespedes=:cantidadHuespedes', buscarHoteles)

// Listar los Servicios de un Hotel
router.get('/api/hoteles/:id/servicios', serviciosHotel)

export default router
