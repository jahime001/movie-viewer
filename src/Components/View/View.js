import React from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom';
import './View.css';

export default function View(props) {
  let allMovies = props.allMovies
  let { key } = useParams()
  console.log(key)
  let heroImage = `src/images/${allMovies[key].hero_image}`
  return (
    <div className='view'>
      <img src={heroImage} alt="" />
      <h1>{allMovies[key].title}</h1>
      <h2>Characters</h2>
      <div>
        {allMovies[key].main_characters.map(character => {
          return <h4>{character}</h4>
        })}
      </div>
      <h2>Decription</h2>
      <p className='description'>{allMovies[key].description}</p>
    </div>
  )
}
