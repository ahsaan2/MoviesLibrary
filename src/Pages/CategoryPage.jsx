import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesByCategory } from '../api/tmdb';
import MovieSection from '../components/MovieSection';

function CategoryPage() {
  const { category } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const data = await fetchMoviesByCategory(category);
      setMovies(data);
    }

    loadMovies();
  }, [category]);

  const formattedTitle = category
    .replace('-', ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div>
      <MovieSection category={formattedTitle} movies={movies} />
    </div>
  );
}

export default CategoryPage;
