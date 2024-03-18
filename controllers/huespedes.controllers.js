import { pool } from '../src/db.js'

// Listar todas las reservas de un usuario
export const reservasUsuario = async (req, res) => {
  const { id } = req.params
  try {
    if (!id || !Number.isInteger(parseInt(id))) {
      res.status(400).json({ message: 'Debe ingresar un ID válido' })
    } else {
      const existe = 'SELECT * FROM huespedes WHERE id = ?'
      const [usuario] = await pool.execute(existe, [id])
      if (usuario.length === 0) {
        res.status(404).json({ message: 'No se ha encontrado un usuario con el ID indicado' })
      } else {
        const detallesQuery = `SELECT u.id AS huesped_id, u.nombre AS nombre_huesped
          FROM huespedes u
          WHERE u.id = ?;`
        const [perfilUsuario] = await pool.query(detallesQuery, [id])
        const reservasQuery = `SELECT r.id AS id_reserva, huesped.nombre AS huesped, h.nombre AS hotel, r.fecha_ingreso, r.fecha_salida, r.cantidad_huespedes AS huespedes, hab.nombre AS tipo_habitacion, er.estado FROM reservas r
          INNER JOIN hoteles h ON h.id = r.hotel_id 
          INNER JOIN huespedes huesped ON huesped.id = r.huesped_id
          INNER JOIN estados_reservas er ON er.id = r.estado_id
          INNER JOIN hotel_habitaciones hr ON hr.id = r.habitacion_id
          INNER JOIN habitaciones hab ON hab.id = r.habitacion_id
          WHERE huesped_id = ?`
        const [reservas] = await pool.query(reservasQuery, [id])

        res.json(perfilUsuario.concat(reservas))
      }
    }
  } catch (error) {
    res.json({ messaje: 'Ha ocurrido un error; ' + error.message })
  }
}
