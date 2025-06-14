const API_KEY = '8a5d89a7'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    )
    const json = await response.json()
    const movies = json.Search

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }))
  } catch (error) {
    throw new Error('Error searching movies')
  }
}
