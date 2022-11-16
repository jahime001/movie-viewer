
import { useEffect, useState } from 'react';
import './App.css';
import movies from './movies.json'
import View from './Components/View/View';
import { Link, Route, Routes, useParams } from 'react-router-dom';

function App() {
  const [allMovies, setAllMovies] = useState([])


  useEffect(() => {
    setAllMovies(movies.movies)
    console.log(movies.movies)
  }, [])

  return (
    <div className="App">
      <div className='nav'>
        {allMovies.map(movie => {
          let key = movie.episode_number - 1
          let posterImage = `src/images/${movie.poster}`
          return (
            <Link to={'/view' + key}>
              <div className='nav-tile' key={movie.episode_number}>
                <img src={posterImage} alt="o" />
                <h3>{movie.title}</h3>
                <h3>{movie.episode_number}</h3>
              </div>
            </Link>

          )
        })}
      </div>

      <main>
        <Routes>
          <Route path='view:key' element={<View allMovies={allMovies} />} />
        </Routes>
      </main>
    </div >
  );
}

export default App;
