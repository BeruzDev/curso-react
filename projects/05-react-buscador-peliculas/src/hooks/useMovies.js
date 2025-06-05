import movieResults from '../mocks/with-results.json'

export const useMovies = () => {
  const movies = movieResults.Search

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Type,
    poster: movie.Poster,
  }))

  return { movies: mappedMovies }
}
