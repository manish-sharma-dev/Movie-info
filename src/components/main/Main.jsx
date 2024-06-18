import React from 'react'
import { useState, useEffect } from 'react';
import '../main/Main.css'
// import img1 from '../../assest/img-1.jpg'



export default function Main() {
  const [movies, setMovies] = useState([]);

  // fetch data from movie api 
  useEffect(() => {
    const fetchMovies = async () => {
      const url = 'https://streaming-availability.p.rapidapi.com/shows/search/filters?country=us&series_granularity=show&order_direction=asc&order_by=original_title&genres_relation=and&output_language=en&show_type=movie';
  
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'ee1a7cd338msh0f6aa6f14d37614p1ddff4jsn46b7a5526b1c',
          'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
        }
      };
  
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
  
        // Assuming data is an array of movies, set it to state
        if (Array.isArray(data)) {
          setMovies(data.shows);
        } else {
          throw new Error('Fetched data is not an array');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchMovies();
  }, []);
  
  

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
          
            <div className='card' key={movies.id}>
              <img src='#' alt='movie_image' />
              <div className='card_text'>
                <span className='card_movie_title'>{movies.originalTitle}</span>
                <span className='card_movie_description'>Overview</span>
                <div className='rating_watch_movie'>
                  <button className='watch_movie'>Watch</button>
                  <span className='card_movie_rating'>{movies.rating}</span>
                </div>
              </div>
            </div>
          
        </div>
      
    </div>
  );  
}
