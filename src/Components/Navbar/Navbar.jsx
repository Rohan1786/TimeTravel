// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
//         <header class="bg-blue-600 py-6">
//         <div class="container mx-auto flex justify-between items-center px-4">
            
//             <div class="flex items-center space-x-3">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScTt3-QsjSZjgDdDtIQrYST7Oc0IKwtt1MgA&s" alt="Logo" class="w-12 h-12 rounded-lg"/>
//                 <span class="text-white text-2xl font-bold">Brand</span>
//             </div>
          
//             <nav class="space-x-6">
//                 <a href="/" class="text-white hover:text-gray-300">Home</a>
//                 <a href="shop" class="text-white hover:text-gray-300">Shop</a>
//                 <a href="about" class="text-white hover:text-gray-300">About</a>
//                 <a href="contact" class="text-white hover:text-gray-300">Contact</a>
//                 <a href="login" class="text-white hover:text-gray-300">Login</a>
//                 <a href="register" class="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg">Sign Up</a>
//             </nav>
//         </div>
        
//     </header>
//     </div>
//   )
// }

// export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../Services'
import About from '../About'
import Home from '../Home'


const Navbar = () => {

  return (
    <div className='flex rounded justify-center'>
<div className='flex justify-between'>
  <ul>
    <Link to='/'>Home</Link>
    <Link to='/Services'>Services</Link>
    <Link to='/About'>About</Link>
  </ul>
</div>
    </div>
  )
}

export default Navbar