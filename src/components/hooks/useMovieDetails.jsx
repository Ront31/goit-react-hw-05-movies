import { getMovieDetails } from '../fetch/api';
import { useState, useEffect } from 'react';

export const useMovieDetails = movieId => {
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    getMovieDetails(movieId).then(movieDetailsReturnedFromApi =>
      setMovieDetails(movieDetailsReturnedFromApi)
    );
  }, [movieId]);

  return { movieDetails };
};
