// import express
import express from 'express'
// import cors
import cors from 'cors'

// const bodyParser = require('body-parser')

// import routes
import Router from './routes/routes.js'

// init express
const app = express()

// use express json
app.use(express.json())

// use cors
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// use router
app.use(Router)

// app.listen(5000, () => console.log('Server running at port 5000'))
app.listen(process.env.PORT || 5500)
console.log('Server running at port 5500')
