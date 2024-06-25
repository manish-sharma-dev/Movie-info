import React, { useEffect, useState } from 'react'
import './recently.css'
// import logo from '../../assest/img-1.jpg'

export default function Recently() {
  const [fetchedTrendingData , setFetchedTrendingData] = useState([]);

  useEffect(()=>{
    const fetchtrendingMovies = async() =>{
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzAwOGExZWY0N2Y4ZjI3MDdhN2U2NjAwZmNiY2Q3MSIsIm5iZiI6MTcxOTI5MjEzMi44NDUyNzEsInN1YiI6IjY2NzE0OTM5Nzc4M2ExNmQ5MmYyZjcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fR5mz9mKowDqFnBmbUpz6cVwLy1lcCS36QtZvHOm6CE'
        }
      };

      const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';

      try {

        const response = await fetch(url, options)

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('recently watched data is fetching here')
        setFetchedTrendingData(data.results)
        // console.log(data.results)

        
      } catch (error) {
        console.log(error)
      }
    } 

    fetchtrendingMovies()
  },[])



  return (
    <>
    {/* this is for the whole recently viewed card  */}

    
    <div className="recently_viewed " >
    {fetchedTrendingData.map((trendindData,index) => (
      <div className='recently_viewed_card'key={index}>
         <img src={`https://image.tmdb.org/t/p/w500${trendindData.backdrop_path}`} alt='recently_viewed_movie_img ' className='recently-section-img' />
         <div className='recently_viewed_card_text'>
          <p className='recently-watched-movie'>{trendindData.title? trendindData.title : trendindData.name }</p>
          <span className='movie-rating'>{parseInt(trendindData.vote_average)}+</span>
         </div>
      </div>
       ))}
    </div>
    </>
  )
}
