import { mysql2 } from 'mysql2/promise'
import { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } from './config.js'
export const pool = mysql2.createPool({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE
})
