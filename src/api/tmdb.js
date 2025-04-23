import axios from 'axios';
// we fetch the movies from the tmbd-sites 
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMoviesByCategory = async (category) => {
  const categoryMap = {
    trending: '/trending/movie/week',
    'top-rated': '/movie/top_rated',
    upcoming: '/movie/upcoming'
  };
/**
 * To fetch/post/put/update/delete ->> we use the axios library
 * 
 */
  try {
    const res = await axios.get(`${BASE_URL}${categoryMap[category]}?api_key=${API_KEY}`);
    return res.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    return res.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};
