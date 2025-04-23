import React from 'react';
import { useMovieList } from '../context/MovieListContext';
import MovieSection from '../components/MovieSection';

/**Display movies saved to localstorage via context
 * 
 */
function MyList() {
  const { myList } = useMovieList();

  return (
    <div>
      <h2>My Watchlist</h2>
      {myList.length === 0 ? (
        <p>You haven’t added any movies yet.</p>
      ) : (
        <MovieSection category="My List" movies={myList} />
      )}
    </div>
  );
}

export default MyList;
