  import React, { useEffect, useState } from 'react'
import { ArrowLeft, Search } from 'react-feather'
import '../navbar/Navbar.css'
import { useNavigate } from 'react-router-dom'
// import { Navigation } from 'react-feather'


export default function Navbar({ onSearch }) {
  const categoryOptions = ['Action', 'Comedy', 'Drama', 'Suspense', 'Scifi']
  const [option, setoption] = useState(0);
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  // this useEffect is for changing the text Dynamically 
  useEffect(()=>{
    const intevalId = setInterval(()=> {
      setoption((prevIndex)=> (prevIndex + 1) %categoryOptions.length)
    }, 2000)

    return () => clearInterval(intevalId)
  },[categoryOptions.length])


  // useEffect(()=>{
    const fetchSearchMovie = async () =>{

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzAwOGExZWY0N2Y4ZjI3MDdhN2U2NjAwZmNiY2Q3MSIsIm5iZiI6MTcxOTM5ODU4MC41NjQxODMsInN1YiI6IjY2NzE0OTM5Nzc4M2ExNmQ5MmYyZjcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.84w4K_hhI7EEHixkoytdthZF1lkHCtuXGGcR3Naoh3Q'
        }
      };
    
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

      try {
        const response  = await fetch(url,options);

        if(!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('input search daata is fetched here')
        console.log(data)
        onSearch(data.results)


      } catch (error) {
        console.error(error)
      }

    }

    // handle form data /

    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch();
    };

  return (
    <>
      <div className='container'>
          <span className='name_1_part'>Movie<span className='name_2_part'>-Lib</span></span>
          
            <p className='nav_para'> Find the best movies in any category <span className='options'>{categoryOptions[option]}... </span></p>

            <div className='move-left'>
              <ArrowLeft size={18} onClick={() => {navigate(0)}} style={{ backgroundColor : '#2e2e2e', color:'white', padding :'7px', borderRadius : '10px'}}/>
           
              <form onSubmit={handleSubmit}>
                    <div className='search'>
                        <input
                        type='text'
                        className='search_box'  
                        placeholder='looking for...'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        />
                        <button type='submit' className='search_btn' onClick={fetchSearchMovie}><Search size={14}></Search></button>
                    </div>
              </form>
            </div>
        </div>
    </>
  )
}
