import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api/tmdb';
/**Dynamic router
 * fetches and displays detailed info about one move
 * 
 */
function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function loadMovie() {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    }

    loadMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{movie.title}</h2>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Overview:</strong> {movie.overview}</p>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ width: '300px', marginTop: '1rem' }}
        />
      )}
    </div>
  );
}

export default MovieDetails;
