import React from 'react'
import Navbar from './Navbar/Navbar'
import { Link } from 'react-router-dom'
import About from './About'
import Services from './Services'

function Home() {
    
  return (
    <div className='bg-white text-pink-400 flex justify-center gap-2'>
        <Link to='/'>Home Page</Link>
        {/* <Link to='/Navbar'>Navbar</Link> */}
        <Link to='/About'>About</Link>
        <Link to='/Services'>Services</Link>



<div className="py-12 bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    <div className="shadow-lg p-6 rounded-lg">
      <h3 className="text-2xl font-semibold text-pink-500">Wide Collection</h3>
      <p className="mt-4 text-gray-600">Explore a variety of categories with hand-picked collections.</p>
    </div>
    <div className="shadow-lg p-6 rounded-lg">
      <h3 className="text-2xl font-semibold text-pink-500">Exclusive Discounts</h3>
      <p className="mt-4 text-gray-600">Grab the best deals, only available here.</p>
    </div>
    <div className="shadow-lg p-6 rounded-lg">
      <h3 className="text-2xl font-semibold text-pink-500">Fast Delivery</h3>
      <p className="mt-4 text-gray-600">Get your products delivered within 24 hours!</p>
    </div>
  </div>
</div>
        
    </div>
  )
}

export default Home;