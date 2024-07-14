import axios from 'axios';

const API_KEY = 'acbe04d9b6826898170f4d9e0758e12a';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
};
// https://developer.themoviedb.org/reference
// /trending-movies
export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day`);
  return response.data.results;
};

// search-movie
export const fetchMovieByQuery = async movieName => {
  const response = await axios.get(`search/movie?query=${movieName}`);
  return response.data.results;
};

// movie-details
export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}`);
  return response.data;
};

// movie-credits
export const fetchMovieCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?`);
  return response.data.cast;
};

// movie-reviews
export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews?`);
  return response.data.results;
};