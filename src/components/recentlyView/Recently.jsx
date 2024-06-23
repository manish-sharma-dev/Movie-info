import React from 'react'

export default function Recently() {
  return (
    //this is for the whole recently viewed card component
      <div className="recently_viewed">
        {/* this is for the card component */}
        <div className='recently_viewed_card'>
           <img src='#' alt='recently_viewed_movie_img' />
           <div className='recently_viewed_card_text'>
            <p>moviename</p>
            <span>rating</span>
           </div>
        </div>
      </div>
  )
}
