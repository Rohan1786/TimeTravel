import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';


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
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Navbar' element={<Navbar/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Services' element={<Services/>}></Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App