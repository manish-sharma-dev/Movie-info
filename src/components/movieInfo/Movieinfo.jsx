import React from 'react'
import logo from '../../assest/img-1.jpg'
import './movie-info.css'

export default function Movieinfo() {
  return (
    <div>
        <div className="movie-info">
            <img src={logo} alt='movi-info' width={230} height={280}/>
            <div className='text-part-movie-info'>
                <h2>Movie Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quibusdam dolorem voluptates doloribus voluptatibus hic est quod deleniti similique ad corrupti mollitia quidem quis tempora, blanditiis quasi aliquam unde iusto.relo Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor fugiat voluptas consequatur exercitationem quae ducimus, reprehenderit dolorem qui ab laborum aperiam repudiandae architecto unde similique autem. Eligendi molestiae tempore sequi?lore.100 loree Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quis cumque aperiam ut mollitia quidem, pariatur accusantium iste cupiditate debitis velit nostrum deleniti dolore asperiores quibusdam a quos, temporibus tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate eius consequuntur, fuga assumenda reprehenderit eligendi rerum obcaecati quaerat delectus necessitatibus dignissimos doloribus sequi repellendus earum maiores dicta libero, fugit accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum tenetur vero repellendus fugit impedit dicta amet, ipsam, est non corrupti veniam necessitatibus aperiam! Saepe ipsum aliquid in perferendis! Atque.moerm Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi minus repudiandae magni nisi voluptatum optio, id dignissimos nesciunt molestias voluptas laborum, eaque earum, nam obcaecati sequi tempore. Excepturi, hic perspiciatis!</p>
            </div>
      </div>

      <div className='cast-section'>
        <img src='#' alt='cast-info' />
      </div>
    </div>
  )
}
