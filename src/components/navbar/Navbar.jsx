import React, { useEffect, useState } from 'react'
import { Search } from 'react-feather'
import '../navbar/Navbar.css'

export default function Navbar() {
  const categoryOptions = ['Action', 'Comedy', 'Drama', 'Suspense', 'Scifi']
  const [option, setoption] = useState(0);

  useEffect(()=>{
    const intevalId = setInterval(()=> {
      setoption((prevIndex)=> (prevIndex + 1) %categoryOptions.length)
    }, 2000)

    return () => clearInterval(intevalId)
  },[categoryOptions.length])

 

  return (
    <>
      <div className='container'>
          <span className='name_1_part'>Movie<span className='name_2_part'>-Lib</span></span>

          
            <p className='nav_para'> Find the best movies in any category <span className='options'>{categoryOptions[option]}... </span></p>
         
              <div className='search'>
                  <input
                  type='text'
                  className='search_box' 
                  placeholder='looking for...'
                  />
                  <button className='search_btn'><Search size={14}></Search></button>
              </div>
        </div>
    </>
  )
}
