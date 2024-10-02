import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

const About = () => {
    
  return (
    <div className='flex bg-white text-pink font-extrbold justify-center gap-3'>
        <h1>your in About Page</h1>
         <Link to='/'>
        <button className='rounded'>Home Page </button></Link>
    </div>
  )
}

export default About