import { pool } from '../src/db.js'

// Mostrar todos los hoteles
export const listarHoteles = async (req, res) => {
  try {
    const query = 'SELECT * FROM hoteles'
    const [hoteles] = await pool.execute(query)
    if (hoteles.length === 0) {
      res.status(404).json({ messaje: 'No se han encontrado hoteles' })
    } else {
      res.json(hoteles)
    }
  } catch (error) {
    res.json({ messaje: 'Ha ocurrido un error; ' + error.message })
  }
}

// Mostrar el perfil de un Hotel por ID
export const hotelPorId = async (req, res) => {
  const { id } = req.params
  try {
    if (!id || !Number.isInteger(parseInt(id))) {
      res.status(400).json({ message: 'Debe ingresar un ID válido' })
    } else {
      const existe = 'SELECT * FROM hoteles WHERE id = ?'
      const [hotel] = await pool.execute(existe, [id])
      if (hotel.length === 0) {
        res.status(404).json({ message: 'No se ha encontrado un hoteles con el ID indicado' })
      } else {
        const detallesQuery = `SELECT h.id AS hotel_id, h.nombre AS nombre_hotel, c.nombre AS ciudad
          FROM hoteles h
          JOIN hoteles_ciudad hc ON h.id = hc.hotel_id
          JOIN ciudad c ON hc.ciudad_id = c.id
          WHERE h.id = ?
          GROUP BY h.id;`
        const [detallesHotel] = await pool.query(detallesQuery, [id])
        res.json(detallesHotel)
      }
    }
  } catch (error) {
    res.json({ messaje: 'Ha ocurrido un error; ' + error.message })
  }
}
// Mostrar los hoteles de una ciudad
export const buscarHoteles = async (req, res, datatype) => {
  const { ciudad, fechaEntrada, fechaSalida, tipoHabitacion, cantidadHuespedes } = req.params
  console.log(ciudad, fechaEntrada, fechaSalida, tipoHabitacion, cantidadHuespedes)
  try {
    if (!ciudad || !fechaEntrada || !fechaSalida || !tipoHabitacion || !cantidadHuespedes) {
      res.status(400).json({ message: 'Los parámetros de búsqueda no estan completos' })
    } else {
      const query = `
      SELECT h.id AS hotel_id, h.nombre AS nombre_hotel
      FROM hoteles h
      INNER JOIN hoteles_ciudad hc ON h.id = hc.hotel_id
      INNER JOIN ciudad c ON hc.ciudad_id = c.id
      INNER JOIN hotel_habitaciones hh ON h.id = hh.hotel_id
      INNER JOIN habitaciones hab ON hh.habitacion_id = hab.id
      WHERE c.nombre = ? 
      AND hab.id = ? 
      AND hab.capacidad >= ? 
      AND NOT EXISTS (
        SELECT 1
        FROM reservas r
        WHERE r.habitacion_id = hab.id
        AND ((r.fecha_ingreso BETWEEN ? AND ?) OR (r.fecha_salida BETWEEN ? AND ?))
      )
    `
      const values = [ciudad, tipoHabitacion, cantidadHuespedes, fechaEntrada, fechaSalida, fechaEntrada, fechaSalida]

      const [hotelesDisponibles] = await pool.query(query, values)

      if (hotelesDisponibles.length === 0) {
        return res.status(404).json({ message: 'No se han encontrado hoteles disponibles con las fechas o datos indicados' })
      }

      res.status(200).json(hotelesDisponibles)
    }
  } catch (error) {
    res.json({ messaje: 'Ha ocurrido un error; ' + error.message })
  }
}

// Mostrar los servicios de un Hotel por ID
export const serviciosHotel = async (req, res) => {
  const { id } = req.params
  try {
    if (!id || !Number.isInteger(parseInt(id))) {
      res.status(400).json({ message: 'Debe ingresar un ID válido' })
    } else {
      const existe = 'SELECT * FROM hoteles WHERE id = ?'
      const [hotel] = await pool.execute(existe, [id])
      if (hotel.length === 0) {
        res.status(404).json({ message: 'No se ha encontrado un hoteles con el ID indicado' })
      } else {
        const detallesQuery = `SELECT h.id AS hotel_id, h.nombre AS nombre_hotel, GROUP_CONCAT(s.nombre) AS servicios
          FROM hoteles h
          JOIN hotel_servicios hs ON h.id = hs.hotel_id
          JOIN servicios s ON hs.servicio_id = s.id
          WHERE h.id = ?
          GROUP BY h.id;`
        const [perfilHotel] = await pool.query(detallesQuery, [id])
        res.json(perfilHotel)
      }
    }
  } catch (error) {
    res.json({ messaje: 'Ha ocurrido un error; ' + error.message })
  }
}
