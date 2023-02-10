import { useEffect, useRef, useState } from "react";

export const useSearch = () => {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const firstTimeSearch = useRef(true);

  useEffect(() => {
    if (firstTimeSearch.current) {
      firstTimeSearch.current = search === "";
      return;
    }
    if (search === "") {
      setError("La busqueda no puede estar vacia");
      return;
    }

    if (search.length < 3) {
      setError("La busqueda debe tener al menos 3 caracteres");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
};
