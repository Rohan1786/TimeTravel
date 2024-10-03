import React from 'react';
import { Link } from 'react-router-dom';
import TimeControl from '../TimeControl/TimeControl';
import TimeTravel from '../TimeTravel/TimeTravel';
import Navbar from '../Navbar/Navbar';

function Home() {
 
  return (
    <div className='bg-gray-100 text-gray-700'>
      {/* Navbar */}
     
        
       
        <Navbar/>
      
      

      {/* Hero Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700">Travel Through Time with Precision</h2>
          <p className="mt-4 text-xl text-gray-600">Our Timing Machine helps you control the past, present, and future. Discover the possibilities of time manipulation today.</p>
          <button className="mt-8 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="shadow-lg p-6 rounded-lg bg-white">
            <img src="https://files.oaiusercontent.com/file-aI9n5SU9o9Az4oEBa3hvixCq?se=2024-10-03T20%3A56%3A48Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db2543c55-627c-487b-985d-520b5de2ac80.webp&sig=1VG6M7TKuaEoXbvrD8lhwL2r0jzryBdTsfm7fzrnUhw%3D" alt="Time Control" className="mx-20 w-32 h-32"/>
            <h3 className="text-2xl font-semibold text-blue-600 mt-4">Time Control</h3>
            <p className="mt-4 text-gray-600">Manipulate time effortlessly with our cutting-edge technology.</p>
          </div>
          <div className="shadow-lg p-6 rounded-lg bg-white">
            <img src="https://media.istockphoto.com/id/834557758/photo/time-traveler-time-machine-and-the-dinosaur-omeisaurus.jpg?s=1024x1024&w=is&k=20&c=EmRdogbrfCWG8iJgYmigTCmdBxQWJz8L2Wa_o0kR8sk=" alt="Fast Travel" className="mx-20 w-32 h-32"/>
            <h3 className="text-2xl font-semibold text-blue-600 mt-4">Fast Travel</h3>
            <p className="mt-4 text-gray-600">Move between different eras instantly. Be where you need to be, when you need to be.</p>
          </div>
          <div className="shadow-lg p-6 rounded-lg bg-white">
            <img src="https://images.pexels.com/photos/5029576/pexels-photo-5029576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Predict the Future" className="mx-20 w-32 h-32"/>
            <h3 className="text-2xl font-semibold text-blue-600 mt-4">Predict the Future</h3>
            <p className="mt-4 text-gray-600">Foresee events and plan your life with unprecedented accuracy.</p>
          </div>
        </div>
      </section>
      <div className="bg-gray-100 text-gray-700">
      <TimeTravel />
      <TimeControl />
    </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8 text-center">
        <p>&copy; 2024 Timing Machine | All rights reserved</p>
      </footer>
    </div>
  );
}

export default Home;
