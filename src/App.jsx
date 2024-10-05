import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';

import Contact from './Components/Contact/Contact';



const App = () => {

  const [user, setuser] = useState("");
  const getUser=()=>{
    setuser("Rohan");
    console.log(user);
  }
  return (
    
    <>
      {/* <button className='bg-white text-black'
     onClick={getUser} >Hello Click me</button>
      <Navbar user={user}/> */}
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}/>
      
      <Route path='/About' element={<About/>}></Route>
    
      <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App