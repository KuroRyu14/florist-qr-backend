import mysql from 'mysql2'

// create the connection to database
const db = mysql.createConnection({
  host: 'sympathy-db.hishk.com',
  user: 'myuser',
  password: 'Td#1ksj89!',
  port: '3317',
  database: 'main'
})

export default db
