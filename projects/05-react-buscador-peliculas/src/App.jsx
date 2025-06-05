import './App.css'
import Movies from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import movieResults from './mocks/with-results.json'

function App() {
  const movies = movieResults.Search
  const { movies: mappedMovies } = useMovies()

  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className="form">
          <input
            type="text"
            className="input"
            placeholder="Avengers, Star Wars, The Matrix..."
          />
          <button type="submit" className="button">
            Search
          </button>
        </form>
      </header>

      <main>
        {movies.length > 0 ? <Movies mappedMovies={mappedMovies} /> : <NoResults />}
      </main>
    </div>
  )
}

export default App
