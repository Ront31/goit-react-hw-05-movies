import { getMovieCredits } from '../fetch/api';
import { useState, useEffect } from 'react';

export const useMovieCredits = movieId => {
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(ret => setMovieCredits(ret));
  }, [movieId]);
  return { movieCredits };
};
