import React from 'react'
import '../header/Header.css'
import img1 from '../../assest/img-1.jpg'
import { ArrowRight, ArrowLeft } from 'react-feather'

export default function Header() {
  return (
    <div className='header'>
      <img src={img1} alt='img1' className='background_img'/>

      
        <div className='image_and_text'>
          <div className='frontend_img'>
            <img src={img1} alt='img2' className='front_img'/>
          </div>

          <div className='text_and_button_component'>
              <h1 className='movie-title'>Movie-title</h1>
              <p className='movie-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ea, placeat aperiam sed optio qui cum, tempora perspiciatis ratione dolore ipsum possimus provident. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, dolores illo, nesciunt iusto quis excepturi laudantium facilis ratione harum molestiae, corporis exercitationem at dignissimos! Eaque facere pariatur dolorem dolore amet?</p>
              <p className='rating'>imdb rating : 8+</p>
              <p className='release_date'>March-22, 2010, Thursday </p>
              <button className='watch_now'>Watch Now</button>
              <button className='add_to_list'>+ Add To List</button>
              
              {/* <div className="swipe">
                  <ArrowLeft className='swipe_left' size={15} />
                  <ArrowRight className='swipe_right' size={15}/>
              </div> */}
              
              
          </div>
      </div>
    </div>
  )
}
