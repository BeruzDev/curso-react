import './App.css'
import Movies from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'
import movieResults from './mocks/with-results.json'

function App() {
  const movies = movieResults.Search
  const { movies: mappedMovies } = useMovies()
  const { search, setSearch, error } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ search })
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
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
            style={{border: '1px solid transparent', borderColor: error ? 'red' : 'transparent'}}
            onChange={handleChange}
            value={search}
          />
          <button type="submit" className="button">
            Search
          </button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        {movies.length > 0 ? (
          <Movies mappedMovies={mappedMovies} />
        ) : (
          <NoResults />
        )}
      </main>
    </div>
  )
}

export default App
