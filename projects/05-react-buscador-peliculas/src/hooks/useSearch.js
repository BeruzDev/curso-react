import { useState, useEffect, useRef } from 'react'

export const useSearch = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
	const isFirstInput = useRef(true)

  useEffect(() => {
		if(isFirstInput.current){
			isFirstInput.current = search === ''
			return
		}

    if (search === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con numero')
      return
    }
    if (search.length < 3) {
      setError('No se puede buscar una pelicula con menos de tres caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}
