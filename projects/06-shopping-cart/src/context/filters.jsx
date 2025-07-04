//Hook useContext

import { createContext, useState } from 'react'

// 1. Crear el Contexto
export const FiltersContext = createContext()

// 2. Crear el Provider -> proveer el contexto a los componentes
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
