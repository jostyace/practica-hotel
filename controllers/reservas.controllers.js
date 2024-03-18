import { pool } from '../src/db.js'

// Realizar una Reserva
export const realizarReserva = async (req, res) => {
  const { huesped_id: huespedId, hotel_id: hotelId, fecha_ingreso: fechaIngreso, fecha_salida: fechaSalida, cantidad_huespedes: cantidadHuespedes, habitacion_id: habitacionId, estado } = req.params
  if (!huespedId || !hotelId || !fechaIngreso || !fechaSalida || !cantidadHuespedes || !habitacionId || !estado) {
    res.status(200).json({ messaje: 'Debe ingresar todos los datos para realizar la reserva' })
  } else {
    try {
      const queryHotel = 'SELECT id FROM hoteles h WHERE id = ?'
      const queryHuesped = 'SELECT id FROM huespedes h WHERE id = ?'
      const queryHabitacion = 'SELECT id FROM habitaciones h WHERE id = ?'
      const [hotel] = await pool.query(queryHotel, [queryHotel])
      const [huesped] = await pool.query(queryHuesped, [queryHuesped])
      const [habitacion] = await pool.query(queryHabitacion, [queryHabitacion])
      if (hotel.length === 0 || huesped.length === 0 || habitacion.length === 0) {
        res.status(404).json({ messaje: 'Verifique la información ingresada, el ID del Hotel, huesped o Habitación no es correcto' })
      } else {
        const reserva = `INSERT INTO reservas (huesped_id, hotel_id, fecha_ingreso, fecha_salida, cantidad_huespedes, habitacion_id, estado)
          VALUES (?, ?, ?, ?, ?, ?, ?)`
        const values = [huespedId, hotelId, fechaIngreso, fechaSalida, cantidadHuespedes, habitacionId, estado]
        await pool.query(reserva, values)
        res.json({ messaje: 'Se ha realizado la reserva correctamente' })
      }
    } catch (error) {
      res.json({ messaje: 'Ha ocurrido un error; ' + error.message })
    }
  }
}

// Cancelar la Reserva
export const cancelarReserva = async (req, res) => {
  const { id } = req.params
  try {
    if (!id || !Number.isInteger(parseInt(id))) {
      res.status(400).json({ message: 'Debe ingresar un ID válido' })
    } else {
      const existe = 'SELECT * FROM reservas WHERE id = ?'
      const reserva = await pool.execute(existe, [id])
      if (reserva[0].length === 0) {
        res.status(404).json({ message: 'No existe la reserva con el ID indicado' })
      } else {
        const query = 'UPDATE reservas SET estado_id =? WHERE id =?'
        const values = [1, id]
        await pool.query(query, values)
        res.json({ messaje: 'Se ha cancelado la reserva correctamente ' })
      }
    }
  } catch (error) {
    res.json({ messaje: 'Ha ocurrido un error; ' + error.message })
  }
}

// Eliminar la Reserva
export const eliminarReserva = async (req, res) => {
  const { id } = req.params
  try {
    if (!id || !Number.isInteger(parseInt(id))) {
      res.status(400).json({ message: 'Debe ingresar un ID válido' })
    } else {
      const existe = 'SELECT * FROM reservas WHERE id = ?'
      const reserva = await pool.execute(existe, [id])
      if (reserva[0].length === 0) {
        res.status(404).json({ message: 'No existe la reserva con el ID indicado' })
      } else {
        const query = 'DELETE FROM reservas WHERE id =?'
        await pool.query(query, [id])
        res.json({ messaje: 'Se ha eliminado la reserva correctamente ' })
      }
    }
  } catch (error) {
    res.json({ messaje: 'Ha ocurrido un error; ' + error.message })
  }
}

// Modificar una Reserva
export const modificarReserva = async (req, res) => {
  const { reserva_id: reservaId, huesped_id: huespedId, hotel_id: hotelId, fecha_ingreso: fechaIngreso, fecha_salida: fechaSalida, cantidad_huespedes: cantidadHuespedes, habitacion_id: habitacionId, estado } = req.params
  if (!huespedId || !hotelId || !fechaIngreso || !fechaSalida || !cantidadHuespedes || !habitacionId || !estado) {
    res.status(200).json({ messaje: 'Debe ingresar todos los datos para modificar la reserva' })
  } else {
    try {
      const queryReserva = 'SELECT id FROM reservas WHERE id = ?'
      const reserva = await pool.query(queryReserva, [reservaId])

      if (reserva[0].length === 0) {
        res.status(404).json({ messaje: 'No hay Reserva con el ID indicado' })
      } else {
        const reserva = `UPDATE reservas
          SET huesped_id = ?, hotel_id = ?, fecha_ingreso = ?, fecha_salida = ?, cantidad_huespedes = ?, habitacion_id = ?, estado = ?
          WHERE id = ?`
        const values = [huespedId, hotelId, fechaIngreso, fechaSalida, cantidadHuespedes, habitacionId, estado]
        await pool.query(reserva, values)
        res.json({ messaje: 'Se ha actualizado la reserva correctamente' })
      }
    } catch (error) {
      res.json({ messaje: 'Ha ocurrido un error; ' + error.message })
    }
  }
}
