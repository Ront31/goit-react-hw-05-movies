import { searchMovies } from '../fetch/api';
import { useState, useEffect } from 'react';

export const useSearchMovies = input => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies(input).then(ret => setMovies(ret));
  }, [input]);
  return { movies };
};
