import { useCallback, useRef, useState } from 'react';
import { searchMovies } from '../services/movies';

export const useMovies = (search) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  const getMovies = useCallback(async ({ search }) => {
    // para que cuando busque lo mismo y le de todo el rato al enter que no se vuelva a ejecutar la request
    if (search === previousSearch.current) return;

    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const movies = await searchMovies(search);
      setMovies(movies);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { movies, loading, error, getMovies };
};
