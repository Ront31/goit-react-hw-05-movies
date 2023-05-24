import { getTrending } from '../fetch/api';
import { useState, useEffect } from 'react';

export const useTrendingList = () => {
  const [trendingMovies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(e => setMovies(e));
  }, []);

  return { trendingMovies };
};
