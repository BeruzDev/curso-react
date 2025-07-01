import { useState } from 'react'
import './Filters.css'

const Filters = ({ changeFilters }) => {
	const [minPrice, setMinPrice] = useState(0);

	const handleChangeMinPrice = (event) => {
		setMinPrice(event.target.value)

		changeFilters(prevState => ({
			...prevState,
			minPrice: event.target.value
		}))
	}

	return (
		<section className="filters">

			<div>
				<label htmlFor="price">Min Price</label>
				<input type="range" id="price" min="0" max="1500" onChange={handleChangeMinPrice}/>
				<span>${minPrice}</span>
			</div>

			<div>
				<label htmlFor="category">Category</label>
				<select id="category">
					<option value="all">All</option>
					<option value="laptops">Laptops</option>
					<option value="smartphones">Smartphones</option>
				</select>
			</div>

		</section>
	)
}

export default Filters
