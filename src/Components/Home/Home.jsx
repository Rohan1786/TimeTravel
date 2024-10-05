import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TimeControl from '../TimeControl/TimeControl';
import TimeTravel from '../TimeTravel/TimeTravel';
import Navbar from '../Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function Home() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS for scroll animations
  }, []);

  // Function to handle Navbar visibility based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsNavbarVisible(false); // Hide Navbar on scroll down
      } else {
        setIsNavbarVisible(true); // Show Navbar on scroll up
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div className="bg-gray-100 text-gray-700">
        {/* Navbar */}
        <div className={`fixed w-full top-0 z-50 transition-transform duration-500 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
          <Navbar />
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-400 to-purple-600 text-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold">Travel Through Time with Precision</h2>
            <p className="mt-4 text-lg sm:text-xl">Our Timing Machine helps you control the past, present, and future. Discover the possibilities of time manipulation today.</p>
            <button className="mt-8 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition">Get Started</button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center px-4 sm:px-6 lg:px-8">
            <div className="shadow-lg p-6 rounded-lg bg-white" data-aos="fade-right">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/024/060/602/small_2x/time-traveler-s-journey-a-traveler-with-packed-suitcase-stands-before-a-giant-illuminated-clock-face-like-a-time-portal-ai-generated-free-photo.jpg" alt="Time Control" className=" rounded mx-auto w-24 h-24 sm:w-32 sm:h-32" />
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mt-4">Time Control</h3>
              <p className="mt-4 text-gray-600">Manipulate time effortlessly with our cutting-edge technology.</p>
            </div>
            <div className="shadow-lg p-6 rounded-lg bg-white" data-aos="fade-up">
              <img src="https://img.freepik.com/free-photo/glowing-sky-sphere-orbits-starry-galaxy-generated-by-ai_188544-15599.jpg" alt="Fast Travel" className=" rounded mx-auto w-24 h-24 sm:w-32 sm:h-32" />
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mt-4">Fast Travel</h3>
              <p className="mt-4 text-gray-600">Move between different eras instantly. Be where you need to be, when you need to be.</p>
            </div>
            <div className="shadow-lg p-6 rounded-lg bg-white" data-aos="fade-left">
              <img src="https://res.cloudinary.com/momentum-media-group-pty-ltd/image/upload/c_fill,q_auto:best,f_auto,e_unsharp_mask:80,w_830,h_478/Space%20Connect%2Fspace-exploration-sc_fm1ysf" alt="Predict the Future" className=" rounded mx-auto w-24 h-24 sm:w-32 sm:h-32" />
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mt-4">Predict the Future</h3>
              <p className="mt-4 text-gray-600">Foresee events and plan your life with unprecedented accuracy.</p>
            </div>
          </div>
        </section>

        {/* TimeTravel and TimeControl Sections */}
        <div className="bg-gray-100 text-gray-700">
          <div className="px-4 sm:px-6 lg:px-8" data-aos="fade-up">
            <TimeTravel />
          </div>
          <div className="px-4 sm:px-6 lg:px-8" data-aos="fade-up">
            <TimeControl />
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-blue-600 text-white py-8 text-center">
          <p>&copy; 2024 Timing Machine | All rights reserved</p>
        </footer>
      </div>
    </>
  );
}

export default Home;
