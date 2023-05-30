import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../fetch/api';
import { useEffect, useState } from 'react';
import { TrendingList } from '../TrendingList/TrendingList';

export const SearchForm = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    setSearchParams({ query: e.target[0].value });
    e.preventDefault();
    return;
  };

  useEffect(() => {
    const movieTitle = searchParams.get('query');
    if (movieTitle) {
      searchMovies(movieTitle).then(ret => setMovies(ret));
    }
  }, [searchParams]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..."></input>
        <button type="submit">Search</button>
      </form>
      <TrendingList movies={movies} />
    </div>
  );
};
