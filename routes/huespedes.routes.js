import { Router } from 'express'
import { reservasUsuario } from './../controllers/huespedes.controllers.js'

const router = Router()

// Mostrar todas las Reservas de un Usuario
router.get('/api/usuarios/:id/reservas', reservasUsuario)

export default router
