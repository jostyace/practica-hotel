import { pool } from '../src/db.js'

// Mostrar los hoteles de una ciudad
export const hotelesCiudad = async (req, res, datatype) => {
  const { ciudad } = req.params
  try {
    if (!ciudad) {
      res.status(400).json({ message: 'Debe ingresar una ciudad válida' })
    }
    const query = `SELECT h.nombre FROM hoteles h
          INNER JOIN hoteles_ciudad hc ON h.id = hc.hotel_id
          INNER JOIN ciudad c ON hc.ciudad_id = c.id
      WHERE c.nombre = ?`
    const [hoteles] = await pool.query(query, ciudad)
    if (hoteles.length === 0) {
      res.status(404).json({ message: 'No se han encontrado hoteles en la ciudad indicada' })
    } else {
      res.json(hoteles)
    }
  } catch (error) {
    res.json({ message: 'Ha ocurrido un error; ' + error.message })
  }
}
