import { useState } from 'react'
import { products as initalProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import  Header from './components/Header.jsx'

function App() {
  const [products, setProducts] = useState(initalProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
    rating: 0,
    stock: 0,
  })

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.rating === 0 || product.rating >= filters.rating) &&
        (filters.category === 'all' || product.category === filters.category) &&
        (filters.stock === 0 || product.stock >= filters.stock)
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters}/>
      <Products products={filteredProducts} />
    </>
  )
}

export default App
