import { Router } from 'express'
import { nuevaValoracion, mostrarValoraciones, udpateValoracionById, deleteValoracion } from './../controllers/valoraciones.controllers.js'

const routes = Router()

// Añadir valoración
routes.post('/api/hoteles/:idHotel/valoraciones/:idHuesped', nuevaValoracion)

// Mostras valoracion y comentarios
routes.get('/api/hoteles/:idHotel/valoraciones', mostrarValoraciones)

// Actualizar valoracion
routes.put('/api/hoteles/:idHotel/valoracion/:idValoracion', udpateValoracionById)

// Borrar Valoracion
routes.delete('/api/hoteles/:idHotel/valoracion/:idValoracion', deleteValoracion)

export default routes
