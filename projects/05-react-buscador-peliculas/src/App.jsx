import './App.css'
import { useState } from 'react'
import Movies from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'
import debounce from 'just-debounce-it'
import { useCallback } from 'react'

function App() {
  const [sort, setSort] = useState(false);

  const { search, setSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
  debounce((search) => {
    getMovies({ search })
  }, 300)
, [getMovies])

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({search})
  }


  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Avengers, Star Wars, The Matrix..."
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent',
            }}
            onChange={handleChange}
            value={search}
          />
          <button type="submit" className="button">
            Search
          </button>
          <input type='checkbox' onChange={handleSort} checked={sort} />
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {loading ? <p>loading...</p> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
