import { products as initalProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import Header from './components/Header.jsx'
import { useFilter } from './hooks/useFilter.js'
import Footer from './components/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'
import Cart from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'

function App() {
  const { filterProducts } = useFilter()

  const filteredProducts = filterProducts(initalProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
