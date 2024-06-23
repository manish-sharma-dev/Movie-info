import React from 'react'
import { useState, useEffect } from 'react';
import '../main/Main.css'
// import img1 from '../../assest/img-1.jpg'



export default function Main() {
  const [movies, setMovies] = useState([]);

  // fetch data from movie api 
   useEffect(() => {
    const fetchMovies = async () => {

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzAwOGExZWY0N2Y4ZjI3MDdhN2U2NjAwZmNiY2Q3MSIsIm5iZiI6MTcxOTA1MzEyNi41MzU1ODIsInN1YiI6IjY2NzE0OTM5Nzc4M2ExNmQ5MmYyZjcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7pzLOsCUYdY1hJ5z3q1aJ8eK-myVkD65A_RCbbPwAgg'
        }
      };

      const url = 'https://api.themoviedb.org/3/discover/movie?language=en-US&page=20&sort_by=popularity.desc';

      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log(data);
        setMovies(data.results)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchMovies();
  }, []);
  
  function showSomeOverview(text,maxLength){
    if (maxLength >= text.length) {
      return text
    }

    return text.substring(0,maxLength)+'.....'
  }

  function showSomeOriginaltext(text,maxLength){
    if (maxLength >= text.length) {
      return text
    }

    return text.substring(0,maxLength)+'...'
  }

  return (
    <div className='main'>

      <div className="categories">
        <ul className='category_name'>
          <li className='category_list'>Action</li>
          <li className='category_list'>Comedy</li>
          <li className='category_list'>Drama</li>
          <li className='category_list'>Romance</li>
          <li className='category_list'>Suspense</li>
        </ul>
      </div>
      
   
        <div className='movie_card_component'>
            {movies.map((movie, id) => (

              <div className='card' key={id}>
                <img  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt='movie_image' className='card_image_section' />
                <div className='card_text'>
                  <span className='card_movie_title'>{showSomeOriginaltext(movie.original_title,20)}</span>

                  <p className='card_movie_description'>{showSomeOverview(movie.overview,70)}</p>

                  <div className='rating_watch_movie'>
                    <button className='watch_movie'>Discover it..</button>
                    <span className='card_movie_rating'>{movies.release_date}</span>
                  </div>
                </div>
              </div>              
            ))}
        </div> 

        <div className='loadmore_container'><button className='loadmore'>Load more..</button> </div>
    </div>
  );  
}
