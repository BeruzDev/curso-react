import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'

export const useFilter = () => {
  // 3. Consumir contexto
  const {filters, setFilters} = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  return { filters, setFilters, filterProducts }
}
