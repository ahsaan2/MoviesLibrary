import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import Home from './Pages/Home';
import MovieDetails from './Pages/MovieDetails';
import MyList from './Pages/MyList';
import CategoryPage from './Pages/CategoryPage';




function App() {
  return (
    <Router>
      <Header />
      <div style={styles.container}>
        <Sidebar />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/my-list" element={<MyList />} />
            <Route path="/category/:category" element={<CategoryPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const styles = {
  container: {
    display: 'flex',
    padding: '1rem'
  },
  main: {
    flex: 1,
    paddingLeft: '2rem'
  }
};

export default App;
