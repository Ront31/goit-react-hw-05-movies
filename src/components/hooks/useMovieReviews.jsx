import { getMoviesReviews } from '../fetch/api';
import { useState, useEffect } from 'react';

export const useMovieReviews = movieId => {
  const [movieReviews, setReviews] = useState([]);

  useEffect(() => {
    getMoviesReviews(movieId).then(ret => setReviews(ret));
  }, [movieId]);
  return { movieReviews };
};
