import React, { useEffect, useState } from 'react';
import MovieSection from '../components/MovieSection';
import { fetchMoviesByCategory } from '../api/tmdb';
/**Fetch and display all categoris on one page
 * Calls the TMDB fore trending, top-rated, and upcoming movies
 * uses movieSection to show each
 * 
 */
function Home() {
  const [sections, setSections] = useState({
    // we will have the list of movies, that will get stored here
    trending: [],
    'top-rated': [],
    upcoming: []
  });

  useEffect(() => {
    async function loadData() {
      const trending = await fetchMoviesByCategory('trending');
      const topRated = await fetchMoviesByCategory('top-rated');
      const upcoming = await fetchMoviesByCategory('upcoming');
      setSections({ trending, 'top-rated': topRated, upcoming });
    }

    loadData();
  }, []);

  return (
    <div>
      <MovieSection category="Trending" movies={sections.trending} />
      <MovieSection category="Top Rated" movies={sections["top-rated"]} />
      <MovieSection category="Upcoming" movies={sections.upcoming} />
    </div>
  );
}

export default Home;
