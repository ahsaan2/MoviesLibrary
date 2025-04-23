import React from 'react';
import { Link } from 'react-router-dom';
import { useMovieList } from '../context/MovieListContext';
/**
 * Display individual movie info: poster, title, release year
 * Includes a button to add/remove from the list
 * Use the moviesList() to update the global state
 * 
 */
function MovieCard({ id, title, year, poster, movieData }) {
  const { addToList, removeFromList, isInList } = useMovieList();
  const inList = isInList(id);

  const handleClick = () => {
    inList ? removeFromList(id) : addToList(movieData);
  };

  return (
    <div style={styles.card}>
      <Link to={`/movie/${id}`} style={styles.link}>
        {poster && (
          <img
            src={`https://image.tmdb.org/t/p/w200${poster}`}
            alt={title}
            style={{ width: '100%', borderRadius: '8px' }}
          />
        )}
        <h3>{title}</h3>
        <p>📅 {year}</p>
      </Link>
      <button style={styles.button} onClick={handleClick}>
        {inList ? 'Remove from List' : 'Add to List'}
      </button>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#fff',
    padding: '0.5rem',
    margin: '0.5rem',
    borderRadius: '8px',
    width: '200px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  button: {
    marginTop: '0.5rem',
    padding: '0.3rem 0.6rem',
    fontSize: '0.9rem',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default MovieCard;
