const Movies = ({ mappedMovies }) => {

  return (
    <div>
      <ul>
        {mappedMovies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Movies
