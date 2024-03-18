import { Router } from 'express'

import { hotelesCiudad } from './../controllers/ciudades.controllers.js'

const router = Router()

// Mostrar todos los Hoteles de una Ciudad
router.get('/api/ciudad/:ciudad', hotelesCiudad)

export default router
