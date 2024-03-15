import dotenv from 'dotenv'

dotenv.config()
export const PORT = process.env.PORT || 3000
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_DATABASE = process.env.DB_DATABASE || 'hoteles'
export const DB_USERNAME = process.env.DB_USERNAME || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || ''
