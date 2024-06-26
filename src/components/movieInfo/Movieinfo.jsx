import React from 'react'
import './movie-info.css'
import { ArrowLeft } from 'react-feather'
import { useNavigate } from 'react-router-dom'

export default function Movieinfo() {
  const navigate = useNavigate();
  
  return (
    <div className='info'>
      <ArrowLeft size={15} onClick={() => {navigate(0)}}/>
    </div>
  )
}
