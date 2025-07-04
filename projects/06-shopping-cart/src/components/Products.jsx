import './Products.css'
import { AddToCartIcon } from './icons.jsx'

export const Products = ({ products }) => {
	return(
		<main className='products'>
			<ul>
				{products.slice(0,15).map((product)=> (
					<li key={product.id} className='product'>
						<img
							src={product.thumbnail}
							alt={product.title}
						/>
						<div>
							<strong>{product.title}</strong> - ${product.price}
						</div>
						<div>
							Rating - {product.rating} 
						</div>
						<div>
							Stock - {product.stock }
						</div>
						<div>
							<button>
								<AddToCartIcon />
							</button>
						</div>
					</li>
				))}
			</ul>
		</main>
	)
}