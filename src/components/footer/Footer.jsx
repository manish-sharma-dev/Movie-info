import React from 'react'
import '../footer/Footer.css'
import { GitHub, Mail, Twitter } from 'react-feather'

export default function Footer() {
  return (
    <div className='footer'>

      <div className='footer_first_part'>
        <h2 className='footer_heading'>Moive-Lib</h2>
        <p className='footer_paragraph'>Enjoy exploring more movie on Movie-lib</p>

        <div className='footer_social'>
        
          <GitHub  style={{ cursor:"pointer",opacity:'0.6' }} size={14} />
          <Mail style={{ cursor:"pointer" ,opacity:'100'}} size={14} />
          <Twitter style={{ cursor:"pointer",opacity:'0.6' }} size={15} />

        </div>
      </div>

      <div className="newsletter">
        <button className='newletter-button'>Check On Github</button>
        {/* <p className='newsletter_para'>Subscribe to Our Newsletter to be updated...</p>
        <input className='email_option' type='email' required placeholder='enter your email'/><br />
        <button className='Subscribe_to_newsletter' >Suscribe to newsletter</button> */}
      </div>
    </div>
  )
}
