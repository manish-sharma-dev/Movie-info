import React from 'react'
import './movie-info.css'
import { ArrowLeft } from 'react-feather'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'



export default function Movieinfo({ searchData }) {
  const navigate = useNavigate();

  if (!searchData) return null;

  function showSomeOverview(text,overviewLength){
    if(overviewLength >= text.length){
      return text
    }

    return text.substring(0,overviewLength)+'...'
  }
  
  return (
    <div className='info'>
      {/* <Link to='/home'>movebcak</Link> */}
      <ArrowLeft size={18} onClick={() => {navigate(0)}}>Return</ArrowLeft>
        {searchData.map((movie,ind) => (
          <div className="info-main-container"key={ind}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}  alt='back' className='back-images'/>
              <div className="info-container">
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt='front' className='front-images'/>
                  <div className='info-text-part'>
                    <h2>{movie.title}</h2>
                    <p className='info-movie-paragraph'>{showSomeOverview(movie.overview,200)}</p>
                    <p className='release_info_data'>{movie.release_date}</p>
                  </div>
              </div>

           </div>
        ))}
    </div>
  )
}