// Import function from Product Model
import { getProducts, updateProductById } from '../models/productModel.js'

// Get All Products
export const showProducts = (req, res) => {
  getProducts((err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}

// Update Product
export const updateProduct = (req, res) => {
  const data = req.body
  const id = req.params.id
  updateProductById(data, id, (err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}
