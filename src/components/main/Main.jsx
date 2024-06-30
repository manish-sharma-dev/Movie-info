import React from 'react'
import { useState, useEffect } from 'react';
import '../main/Main.css'
import { ArrowLeft, ArrowRight } from 'react-feather'




export default function Main() {
  const [movies, setMovies] = useState([]);
  const [mainQuery, setMainQuery] = useState('');
  const [page,setpage] = useState(3)

  // fetch data from movie api 
   useEffect(() => {
    const fetchMovies = async () => {

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzAwOGExZWY0N2Y4ZjI3MDdhN2U2NjAwZmNiY2Q3MSIsIm5iZiI6MTcxOTI5MjEzMi44NDUyNzEsInN1YiI6IjY2NzE0OTM5Nzc4M2ExNmQ5MmYyZjcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fR5mz9mKowDqFnBmbUpz6cVwLy1lcCS36QtZvHOm6CE'
        }
      };

      

      // const url1 = `https://api.themoviedb.org/3/discover/movie?language=en-US&page=20&sort_by=popularity.desc&with_genres=${mainQuery}`;

      try {
        let url = `https://api.themoviedb.org/3/discover/movie?language=en-US&page=${page}&sort_by=popularity.desc`;

        if(mainQuery){
          url += `&with_genres=${mainQuery}`;
        }

        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log(data);
        setMovies(data.results)
        // setMovies(prevMovies => [...prevMovies, ...data.results]);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchMovies();
  });

  // for load more movies --------------------

    function loadmoremovies(){
      setpage(prev => prev+1)
    }

    function loadprevious(){
      setpage(prev => prev-1)
    }

  // for shorter description -----------------------------
  
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
          <li className='category_list' onClick={() => setMainQuery('28')}>Action</li>
          <li className='category_list' onClick={() => setMainQuery('35')}>Comedy</li>
          <li className='category_list' onClick={() =>setMainQuery('10752')}>War</li> 
          <li className='category_list' onClick={() => setMainQuery('27')}>Horror</li>
          <li className='category_list' onClick={() => setMainQuery('9648')}>Suspense</li>
          <li className='category_list' onClick={() => setMainQuery('53')}>Thriller</li>
        </ul>
      </div>

      <div className='loadmore_container'>
        <div style={{ display: 'flex', alignItems:'center',justifyContent: 'center', backgroundColor : 'darkorange', color:'white', padding: '5px 10px', borderRadius : '5px'}}>
          <ArrowLeft size={15}   onClick={loadprevious}>prev</ArrowLeft>
          <span style={{ fontSize : '14px', cursor: 'pointer'}}  onClick={loadprevious}>prev</span>
        </div>

        <div style={{ display: 'flex', alignItems:'center' ,justifyContent: 'center', backgroundColor : 'darkorange', color:'white', padding: '5px 10px', borderRadius : '5px'}}>
          <span  style={{ fontSize : '14px' , cursor: 'pointer'}} onClick={loadmoremovies}>next</span>
          <ArrowRight size={15}  onClick={loadmoremovies}/>
        </div>
      </div>
      
      {/* 10749 */}

        <div className='movie_card_component'>
            {movies.map((movie, id) => (

              <div className='card' key={id}>
                <img  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt='movie_image' className='card_image_section' />
                <div className='card_text'>
                  <span className='card_movie_title'>{showSomeOriginaltext(movie.original_title,20)}</span>

                  <p className='card_movie_description'>{showSomeOverview(movie.overview,70)}</p>

                  <div className='rating_watch_movie'>
                    <p className='watch_movie'>{parseInt(movie.vote_average)}+ rating..</p>
                    <span className='card_movie_rating'>{movie.release_date}</span>
                  </div>
                </div>
              </div>              
            ))}
        </div> 

        
    </div>
  );  
}
