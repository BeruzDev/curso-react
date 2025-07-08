import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'

export const Products = ({ products }) => {
  const { addToCart,removeFromCart, cart } = useCart()

	const checkProductInCart = product => {
		return cart.some(item => item.id === product.id)
	}

  return (
    <main className="products">
      <ul>
        {products.slice(0, 15).map((product) => {
					const isProductInCart = checkProductInCart(product)
					
					return(
						<li key={product.id} className="product">
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>Rating - {product.rating}</div>
            <div>Stock - {product.stock}</div>
            <div>
              <button onClick={() => {
								isProductInCart
									? removeFromCart(product)
									: addToCart(product)
							}}>
                {
									isProductInCart
										? <RemoveFromCartIcon />
										: <AddToCartIcon />
								}
              </button>
            </div>
          </li>
					)
          
        })}
      </ul>
    </main>
  )
}
