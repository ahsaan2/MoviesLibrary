import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MovieListProvider } from './context/MovieListContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieListProvider>
      <App />
    </MovieListProvider>
  </React.StrictMode>
);
