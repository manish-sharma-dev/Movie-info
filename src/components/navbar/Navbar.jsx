import React from 'react'
import { Search } from 'react-feather'
import '../navbar/Navbar.css'

export default function Navbar() {
  return (
    <>
      <div className='container'>
          <span className='name_1_part'>Movie<span className='name_2_part'>-Lib</span></span>

          <p className='nav_para'>( Find the best movies in any category [category_name] )</p>

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
