import './Cart.css'
import { CartIcon, ClearCartIcon,} from './Icons.jsx'
import { useId } from 'react'
import { useCart } from '../hooks/useCart.js'

const CartItem = ({thumnail, price, title, quantity, addToCart}) => {
	return(
		<li>
						<img 
							src={thumnail}
							alt={title}
						/>
						<div>
							<strong>{title}</strong> - ${price}
						</div>

						<footer>
							<small >
								Qty: {quantity}
							</small>
							<button onClick={addToCart}>
								+
							</button>
						</footer>
					</li>
	)
}

const Cart = () => {
  const cartCheckBoxId = useId()
	const {cart, clearCart, addToCart} = useCart()

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
				<CartIcon />
			</label>
			<input id={cartCheckBoxId} type='checkbox' hidden />

			<aside className='cart'>
				<ul>
					{cart.map(product => (
						<CartItem 
							key={product.id} 
							addToCart = {() => addToCart(product)}
							{...product}
						/>
					))}
				</ul>

				<button onClick={clearCart}>
					<ClearCartIcon />
				</button>
			</aside>
    </>
  )
}

export default Cart
