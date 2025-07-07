import { products as initalProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import Header from './components/Header.jsx'
import { useFilter } from './hooks/useFilter.js'
import Footer from './components/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'
import Cart from './components/Cart.jsx'

function App() {
  const { filterProducts } = useFilter()

  const filteredProducts = filterProducts(initalProducts)

  return (
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  )
}

export default App
