import { CartIcon, ClearCartIcon,} from './Icons.jsx'
import './Cart.css'
import { useId } from 'react'

const Cart = () => {
  const cartCheckBoxId = useId()

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
				<CartIcon />
			</label>
			<input id={cartCheckBoxId} type='checkbox' hidden />

			<aside className='cart'>
				<ul>
					<li>
						<img 
							src='https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'
							alt='iPhone9'
						/>
						<div>
							<strong>iPhone</strong> - $1499
						</div>

						<footer>
							<small>
								Qty: 1
							</small>
							<button>
								+
							</button>
						</footer>
					</li>
				</ul>

				<button>
					<ClearCartIcon />
				</button>
			</aside>
    </>
  )
}

export default Cart
