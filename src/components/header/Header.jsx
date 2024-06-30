import React, { useEffect, useState } from 'react'
import '../header/Header.css'
// import img1 from '../../assest/img-1.jpg'
// import { ArrowRight, ArrowLeft } from 'react-feather'

export default function Header() {

  const [poster ,setPoster] = useState([])
  // const [poster ,setPoster] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(()=> {
    const fetchmoviePoster = async () =>{
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzAwOGExZWY0N2Y4ZjI3MDdhN2U2NjAwZmNiY2Q3MSIsIm5iZiI6MTcxOTA1MzEyNi41MzU1ODIsInN1YiI6IjY2NzE0OTM5Nzc4M2ExNmQ5MmYyZjcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7pzLOsCUYdY1hJ5z3q1aJ8eK-myVkD65A_RCbbPwAgg'
        }
      };

      const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=2';

      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const posterData = await response.json();
        console.log('poster data is here')
        // console.log(posterData.results)
        // setPoster(posterData.results[2])
        setPoster(posterData.results)

      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchmoviePoster()
  }, [])

  // for handlind index 
  useEffect(()=>{
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % poster.length); 
    }, 2000); 

    return () => clearInterval(interval);
  },[poster])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % poster.length);
    },10000);

    return () => clearInterval(interval);
  }, [poster]);

  if (poster.length === 0) {
    return <div>Loading...</div>;
  }

  const currentPoster = poster[currentIndex];

  // mfor stoping the sixw of the movie overview 

  function showSomeOverview(text,maxLength){
    if (maxLength >= text.length) {
      return text
    }

    return text.substring(0,maxLength)+'.....'
  }


  return (
    <div className='header'>
      <div className='poster-carousel'>

           <div className='poster-item'>
               <img src={`https://image.tmdb.org/t/p/w500${currentPoster.backdrop_path}`} alt='img1' className='background_img' />
                 <div className='image_and_text'>
                    <div className='frontend_img'>
                      <img src={`https://image.tmdb.org/t/p/w200${currentPoster.poster_path}`} alt='img2' className='front_img' />
                    </div>

                    <div className='text_and_button_component'>
                        <h1 className='movie-title'><span style={{color: 'darkorange'}}>Title: </span>{currentPoster.original_title}</h1>
                        <p className='movie-description'><p style={{color: 'crimson'}}>Overview: </p>{showSomeOverview(currentPoster.overview,150)}</p>
                        <p className='rating'>Rating : {parseInt(currentPoster.vote_average)}</p>
                        <p className='release_date'>Released Date :  {currentPoster.release_date}</p>
                        <button className='add_to_list'>Why Don't you give it a try...</button>
                    </div>
                 </div>
           </div>
        </div>
    </div>

    // <div className='header'>
    //   <div className='poster-carousel'>

    //        {/* <div className='poster-item'> */}
    //            <img src={`https://image.tmdb.org/t/p/w500${poster.backdrop_path}`} alt='img1' className='background_img' />
    //              <div className='image_and_text'>
    //                 <div className='frontend_img'>
    //                   <img src={`https://image.tmdb.org/t/p/w200${poster.poster_path}`} alt='img2' className='front_img' />
    //                 </div>

    //                 <div className='text_and_button_component'>
    //                     <h1 className='movie-title'>{poster.original_title}</h1>
    //                     <p className='movie-description'>{poster.overview}</p>
    //                     <p className='rating'>Average Vote :  {parseInt(poster.vote_average)}</p>
    //                     <p className='release_date'>{poster.release_date}</p>
    //                     <button className='watch_now'>Know more</button>
    //                     <button className='add_to_list'>+ Add To List</button>
    //                 </div>
    //              </div>
    //        {/* </div> */}

    //     </div>
    // </div>
  )
}
