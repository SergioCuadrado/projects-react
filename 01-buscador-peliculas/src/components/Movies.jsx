const WithResults = ({ movies }) => {
  return movies.map((movie) => (
    <li key={movie.id}>
      <h2>{movie.title}</h2>
      <p>{movie.year}</p>
      <img src={movie.poster} alt={movie.title} />
    </li>
  ));
};

const WithoutResults = () => {
  return <p>No hay resultados</p>;
};

export const Movies = ({ movies }) => {
  const haveMovies = movies?.length > 0;
  return (
    <ul className="movies">
      {haveMovies ? <WithResults movies={movies} /> : <WithoutResults />}
    </ul>
  );
};
