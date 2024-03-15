import { pool } from 'db.js'

export const buscarHoteles = async (req, res) => {
  const { ciudad } = req.params
  try {
    if (!ciudad) {
      res.status(400).json({ messaje: 'Debes especificar una ciudad' })
    }
    const query = `SELECT * FROM hoteles h
        INNER JOIN hoteles_ciudad hc ON h.id = hc.hotel_id
        INNER JOIN ciudad c ON hc.ciudad_id = c.id
    WHERE ciudad = ?`
    const hoteles = await pool.query(query, ciudad)
    if (hoteles.length === 0) {
      res.status(404).json({ messaje: 'No se han encontrado hoteles' })
    } else {
      res.json(hoteles)
    }
  } catch (error) {
    res.json({ messaje: 'Ha ocurrido un error; ' + error.message })
  }
}

export const listarHotelesFechas = async (req, res) => {
  try {
    const { ciudad, fecha_entrada: fechaEntrada, fecha_salida: fechaSalida, habitaciones, huespedes } = req.body
    console.log(ciudad, fechaEntrada, fechaSalida, habitaciones, huespedes)
    if (!ciudad) {
      res.status(400).json({ messaje: 'Debes especificar una ciudad' })
    }

    const query = `SELECT * FROM hoteles h
          INNER JOIN hoteles_ciudad hc ON h.id = ac.hotel_id
          INNER JOIN ciudad c ON hc.ciudad_id = c.id
      WHERE ciudad = ?`
    const hoteles = await pool.query(query, ciudad)
    if (hoteles.length === 0) {
      res.status(404).json({ messaje: 'No se han encontrado hoteles' })
    } else {
      res.json(hoteles)
    }
  } catch (error) {
    res.json({ messaje: 'Ha ocurrido un error; ' + error.message })
  }
}

// obtener todos los servicios
export const getServices = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM services')
    res.json(rows)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error al obtener los servicios' })
  }
}

// obtener un servicio por su id
export const getServiceById = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM servicios WHERE id = ?', [req.params.id])
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Servicio no encontrado' })
    }
    res.json(rows[0])
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error al obtener el servicio' })
  }
}

export const infoHoteles = async (req, res) => {
  const { hotel } = req.params
  try {
    if (!hotel) {
      res.status(400).json({ messaje: 'No se encontro el hotel' })
    }
    const query = `SELECT * FROM hoteles h
        INNER JOIN hoteles_habitaciones ha ON h.id = ha.hotel.id
        INNER JOIN huespedes hu ON hu.hotel.id = h.id
        WHERE hotel = ?`
    const informacionHoteles = await pool.query(query, hotel)
    if (informacionHoteles.length === 0) {
      res.status(404).json({ messaje: 'No se han encontrado hoteles' })
    } else {
      res.json(informacionHoteles)
    }
  } catch (error) {
    res.json({ messaje: 'Ha ocurrido un error; ' + error.message })
  }
}

// Obtener una reserva por su id
export const getReservaId = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM reservas WHERE id = ?', [req.params.id])
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Reserva no encontrada' })
    }
    res.json(rows[0])
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error al obtener la reserva' })
  }
}
