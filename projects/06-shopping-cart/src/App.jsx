import { useState } from 'react'
import { products as initalProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import  Header from './components/Header.jsx'
import { useFilter } from './hooks/useFilter.js'
import Footer from './components/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'

function App() {
  const [products, setProducts] = useState(initalProducts)
  const {filters, filterProducts} = useFilter()
  
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header/>
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters}/>}
    </>
  )
}

export default App
