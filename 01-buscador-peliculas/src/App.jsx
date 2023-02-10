import { useCallback } from "react";
import debounce from "just-debounce-it";

import { Movies } from "./components/Movies";
import { Loader } from "./components/Loader";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import "./App.css";

function App() {
  const { search, updateSearch, error: errorInput } = useSearch();
  const { movies, loading, error, getMovies } = useMovies(search);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (errorInput) return;
    await getMovies({ search });
  };

  const debounceGetMovies = useCallback(
    debounce((search) => {
      if (errorInput) return;
      getMovies({ search });
    }, 500),
    [getMovies]
  );

  const handleChange = async (event) => {
    const newSearch = event.target.value;
    await updateSearch(newSearch);
    if (errorInput) return;
    debounceGetMovies(newSearch);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={search}
            placeholder="Avengers, Batman..."
          />
          <button type="submit">Search</button>
        </form>
        {errorInput && <p style={{ color: "red" }}>{errorInput}</p>}
      </header>

      <main>{loading ? <Loader /> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
