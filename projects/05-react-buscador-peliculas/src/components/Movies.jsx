const Movies = ({ mappedMovies }) => {

  return (
      <ul className="movies">
        {mappedMovies.map((movie) => (
          <li key={movie.id} className="movie">
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))}
      </ul>
  )
}

export default Movies
