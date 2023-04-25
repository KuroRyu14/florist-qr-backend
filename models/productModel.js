// import connection
import db from './../config/database.js'

// Get All Products
export const getProducts = (result) => {
  db.query('SELECT * FROM tblInvoice', (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}

// Update Product to Database
export const updateProductById = (data, id, result) => {
  db.query('UPDATE tblInvoice SET balSettle = ? WHERE id = ?', [data.balSettle, id], (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}
