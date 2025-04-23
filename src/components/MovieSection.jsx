import React from 'react';
import MovieCard from './MovieCard';
/**re-usable grid component
 * Takes a list of movies and renders them using moviecard
 */
function MovieSection({ category, movies }) {
  return (
    <section style={{ marginBottom: '2rem' }}>
      <h2>{category}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.release_date?.split('-')[0]}
            poster={movie.poster_path}
            movieData={movie}
          />
        ))}
      </div>
    </section>
  );
}

export default MovieSection;
