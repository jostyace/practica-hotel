import { pool } from '../src/db.js'

export const nuevaValoracion = async (req, res) => {
  try {
    const { idHotel, idHuesped } = req.params
    if (!idHotel || !idHuesped) {
      res.status(404).json({ messaje: 'No se proporcionaron los datos correctos' })
    }
    const query = 'SELECT * FROM huespedes hu WHERE hu.id = ?'
    const [huesped] = await pool.execute(query, [idHuesped])

    if (huesped.length > 0) {
      const valor = Math.floor(Math.random() * (10 - 6) + 6)
      const val = 'INSERT INTO hotel_valoracion(hotel_id, valoracion, huesped_id) VALUES (?,?,?)'
      await pool.execute(val, [idHotel, valor, idHuesped])
      res.json({ mensaje: 'Gracias por su valoracion' })
    } else {
      res.status(404).json({ messaje: 'El huesped no esta registrado' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error de busqueda datos no son correctos' })
  }
}

export const mostrarValoraciones = async (req, res) => {
  try {
    const { idHotel } = req.params
    if (!idHotel) {
      res.status(404).json({ messaje: 'No se encontro el hotel' })
    }
    const query = 'SELECT hv.valoracion FROM hotel_valoracion hv WHERE hv.hotel_id = ?'
    const [datos] = await pool.execute(query, [idHotel])

    if (datos.length > 0) {
      res.json(datos)
    } else {
      res.status(404).json({ messaje: 'No se encontraron valoracion para el hotel' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error de busqueda, los datos proporcionados no son correctos' })
  }
}

export const udpateValoracionById = async (req, res) => {
  try {
    const { idHotel, idValoracion } = req.params
    if (!idHotel || !idValoracion) {
      res.status(404).json({ messaje: 'No se proporcionaron los datos correctos' })
    }
    const query = 'SELECT * FROM hotel_valoracion hv WHERE hv.id = ? AND hv.hotel_id= ?'
    const [valoracion] = await pool.execute(query, [idValoracion, idHotel])
    if (valoracion.length > 0) {
      const valor = Math.floor(Math.random() * (10 - 6) + 6)
      const upValorar = 'UPDATE hotel_valoracion hv SET hv.valoracion = ? WHERE hv.hotel_id= ? AND hv.id = ?'
      await pool.execute(upValorar, [valor, idHotel, idValoracion])
      res.json({ mensaje: `La actualizacion se ha hecho satisfactoriamente con una valoracion de: ${valor}` })
    } else {
      res.status(404).json({ messaje: 'No existe valoracion a este hotel con ese ID' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error de actualizacion. La actualizacion no se puede procesar' })
  }
}

export const deleteValoracion = async (req, res) => {
  try {
    const { idHotel, idValoracion } = req.params
    if (!idHotel || !idValoracion) {
      res.status(404).json({ messaje: 'No se proporcionaron los datos correctos' })
    }
    const query = 'SELECT * FROM hotel_valoracion hv WHERE hv.id = ? AND hv.hotel_id= ?'
    const valoracion = await pool.execute(query, [idValoracion, idHotel])

    if (valoracion[0].length > 0) {
      const deleteVal = 'DELETE FROM hotel_valoracion WHERE hotel_valoracion.id = ?'
      await pool.execute(deleteVal, [idValoracion])
      res.json({ mensaje: 'Borrado existoso' })
    } else {
      res.status(404).json({ messaje: 'No existe valoracion a este hotel con ese ID' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'La eliminacion no se puede concretar' })
  }
}
