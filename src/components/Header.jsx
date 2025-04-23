import React from 'react';
import { Link } from 'react-router-dom';
import { useMovieList } from '../context/MovieListContext';
/**
 * renders the top-navigation
 *  
 * 
 */
function Header() {
  const { myList } = useMovieList();

  return (
    <header style={styles.header}>
      <h1 style={styles.logo}><Link to="/" style={styles.logoLink}>🎬 Movie App</Link></h1>
      <Link to="/my-list" style={styles.button}>
        My List {myList.length > 0 && <span style={styles.badge}>{myList.length}</span>}
      </Link>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#222',
    color: '#fff',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    margin: 0
  },
  logoLink: {
    color: '#fff',
    textDecoration: 'none'
  },
  button: {
    backgroundColor: '#f50057',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    position: 'relative'
  },
  badge: {
    backgroundColor: 'yellow',
    color: '#222',
    borderRadius: '50%',
    padding: '0.2rem 0.5rem',
    fontSize: '0.8rem',
    marginLeft: '0.5rem'
  }
};

export default Header;
