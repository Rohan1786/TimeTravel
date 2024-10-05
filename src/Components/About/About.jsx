import React from 'react';
import Navbar from '../Navbar/Navbar';

function About() {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-red-600 text-center mb-6  shadow-slate-700 ">
          About the Timing Machine
        </h1>
        
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to the <span className="text-pink-500 font-semibold">Timing Machine</span> - a journey across time and space! 
          Our goal is to help you explore different timelines, travel to the past, visit the future, and imagine alternate realities. 
          Whether you want to relive historical moments or peek into the distant future, the Timing Machine makes time travel possible 
          right from the comfort of your screen.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">Why the Timing Machine?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Time is a fascinating concept that governs everything in our universe. At the Timing Machine, we wanted to create a unique way 
            for users to interact with time, whether for fun or education. Our platform is designed to offer:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 text-lg">
            <li className="mb-2">Engaging time travel simulations</li>
            <li className="mb-2">Creative predictions of future events</li>
            <li className="mb-2">Historical insights and alternate realities</li>
            <li className="mb-2">Fun experiments with time speed manipulation</li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">Who Is This For?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            The Timing Machine is for anyone who has ever wondered about the nature of time, how it affects us, and what it might be like 
            to experience different eras. Whether you’re a history buff, a science fiction fan, or just someone curious about the future, 
            this platform is designed for you.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">Get Started!</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Ready to travel through time? Use our intuitive interface to pick a date, speed up time, or slow it down. Whether you're heading 
            to the past or zooming into the future, the Timing Machine is here to guide your journey. Enjoy your adventure!
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
