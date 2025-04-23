import React, { createContext, useContext, useState, useEffect } from 'react';
/**Implemented the context-api to globally manage the "My-List" feature
 * Two main functions are exposed-> addToList, removeFromList
 * Context-api => used for passing data deeply throughtout the component tree without needing to prop drill. 
 * We use it to manage state that needs to be accessed by multiple componnets
 * localStorage->> to save the state, on component mount, we read from localStorage to initilize the state.
 * 
 */
const MovieListContext = createContext();
const STORAGE_KEY = 'myMovieList';

export const MovieListProvider = ({ children }) => {
  const [myList, setMyList] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(myList));
  }, [myList]);

  const addToList = (movie) => {
    if (!myList.find((m) => m.id === movie.id)) {
      setMyList([...myList, movie]);
    }
  };

  const removeFromList = (id) => {
    setMyList(myList.filter((movie) => movie.id !== id));
  };

  const isInList = (id) => {
    return myList.some((movie) => movie.id === id);
  };

  return (
    <MovieListContext.Provider value={{ myList, addToList, removeFromList, isInList }}>
      {children}
    </MovieListContext.Provider>
  );
};

export const useMovieList = () => useContext(MovieListContext);
