// import express
import express from 'express'

// import function from controller
import { showProducts, updateProduct } from './../controllers/Product.js'

// init express router
const router = express.Router()

// Get All Product
router.get('/products', showProducts)

// Update Product
router.put('/products/:id', updateProduct)

// export default router
export default router
