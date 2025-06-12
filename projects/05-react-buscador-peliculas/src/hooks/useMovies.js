import { useMemo } from 'react'
import { searchMovies } from '../services/movies.js'
import { useState, useRef } from 'react'

export const useMovies = ({ search, sort }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useMemo(() => {
    return async () => {
      if (search === previousSearch.current) return

      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
  }, [search])

  const sortedMovies = useMemo(() => {
    console.log('useMemo')
    return sort ? [...movies].sort((a,b) => a.title.localeCompare(b.title)) : movies
  }, [sort, movies])


  return { movies: sortedMovies, loading, getMovies }
}
