import React from 'react';
import { Link } from 'react-router-dom';
/**
 * renders the links to different categories, use the context to access the saved movies
 * 
 */
function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <h3>Categories</h3>
      <ul style={styles.list}>
        <li><Link to="/category/trending">Trending</Link></li>
        <li><Link to="/category/top-rated">Top Rated</Link></li>
        <li><Link to="/category/upcoming">Upcoming</Link></li>
        <li><Link to="/my-list">My List</Link></li>
      </ul>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: '200px',
    padding: '1rem',
    backgroundColor: '#eee',
    height: '100vh'
  },
  list: {
    listStyle: 'none',
    paddingLeft: 0,
    lineHeight: '1.8'
  }
};

export default Sidebar;
