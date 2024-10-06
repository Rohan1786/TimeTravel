// import React, { useState } from 'react';

// function TimeTravel() {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [message, setMessage] = useState('');
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(false); // Loading state
//   const [error, setError] = useState(null); // Error state

//   const handleTimeTravel = async () => {
//     const today = new Date();
//     const selected = new Date(selectedDate);

//     if (!selectedDate) {
//       setMessage("Please select a date to travel through time.");
//       return;
//     }

//     if (selected < today) {
//       setMessage(`Welcome to the past! It's now ${selected.toDateString()}. What happened back then?`);
//     } else if (selected > today) {
//       setMessage(`Welcome to the future! The year is ${selected.getFullYear()}, let's see what's ahead.`);
//     } else {
//       setMessage("You're in the present moment. Enjoy today!");
//     }

//     // Fetch news for the selected date
//     fetchNews(selectedDate);
//   };

//   const fetchNews = async (date) => {
//     const apiKey = 'cc47a8f631bc45a081be61dcce32bfb3'; // Replace with your News API key
//     const formattedDate = new Date(date).toISOString().split('T')[0]; // Format date as YYYY-MM-DD
//     setLoading(true); // Set loading state
//     setError(null); // Reset error

//     try {
//       const response = await fetch(
//         `https://newsapi.org/v2/everything?q=world&from=${formattedDate}&to=${formattedDate}&sortBy=popularity&apiKey=${apiKey}`
//       );
//       const data = await response.json();

//       if (data.articles.length > 0) {
//         setNews(data.articles);
//       } else {
//         setNews([]);
//         setError('No news articles available for this date.');
//       }
//     } catch (error) {
//       setNews([]);
//       setError("Sorry, we couldn't fetch news for this date. Please try again later.");
//     }
//     setLoading(false); // Stop loading
//   };

//   return (
//     <div className="p-4 md:p-6 bg-blue-50 rounded-lg text-center max-w-lg mx-auto">
//       <h2 className="text-xl md:text-2xl font-bold text-blue-700">Time Travel</h2>
//       <p className="mt-2 md:mt-4 text-gray-600">Select a date to travel through time:</p>
      
//       <input 
//         type="date" 
//         className="mt-2 md:mt-4 p-2 border border-gray-300 rounded-lg w-full md:w-auto"
//         onChange={(e) => setSelectedDate(e.target.value)} 
//       />
      
//       <button 
//         className="mt-4 md:mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition w-full md:w-auto"
//         onClick={handleTimeTravel}
//       >
//         Travel in Time
//       </button>

//       {/* Time travel message */}
//       {message && (
//         <div className="mt-4 md:mt-6 p-4 bg-white shadow-lg rounded-lg text-blue-600">
//           {message}
//         </div>
//       )}

//       {/* Show loading message while fetching news */}
//       {loading && (
//         <div className="mt-4 md:mt-6 p-4 bg-yellow-100 text-yellow-600 rounded-lg">
//           Fetching news, please wait...
//         </div>
//       )}

//       {/* Show error message if API fails */}
//       {error && (
//         <div className="mt-4 md:mt-6 p-4 bg-red-100 text-red-600 rounded-lg">
//           {error}
//         </div>
//       )}

//       {/* Display news articles */}
//       {news.length > 0 && !loading && !error && (
//         <div className="mt-4 md:mt-6 text-left">
//           <h3 className="text-lg md:text-xl font-semibold text-blue-700">
//             News from {new Date(selectedDate).toDateString()}:
//           </h3>
//           <ul className="mt-4 space-y-4">
//             {news.map((article, index) => (
//               <li key={index} className="p-4 bg-white shadow rounded-lg">
//                 <a 
//                   href={article.url} 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="text-blue-500 hover:underline font-bold"
//                 >
//                   {article.title}
//                 </a>
//                 <p className="mt-2 text-gray-600">{article.description}</p>
//                 <p className="mt-2 text-sm text-gray-400">Source: {article.source.name}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default TimeTravel;

import React, { useState } from 'react';

function TimeTravel() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [message, setMessage] = useState('');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const handleTimeTravel = async () => {
    const today = new Date();
    const selected = new Date(selectedDate);

    if (!selectedDate) {
      setMessage("Please select a date to travel through time.");
      return;
    }

    if (selected < today) {
      setMessage(`Welcome to the past! It's now ${selected.toDateString()}. What happened back then?`);
    } else if (selected > today) {
      setMessage(`Welcome to the future! The year is ${selected.getFullYear()}, let's see what's ahead.`);
    } else {
      setMessage("You're in the present moment. Enjoy today!");
    }

    // Fetch news for the selected date
    fetchNews(selectedDate);
  };

  const fetchNews = async (date) => {
    const apiKey = 'cc47a8f631bc45a081be61dcce32bfb3'; // Replace with your News API key
    const formattedDate = new Date(date).toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    setLoading(true); // Set loading state
    setError(null); // Reset error

    try {
      // Fetch news with specific keywords related to planets and humanity
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=(planets OR humanity OR humans OR space OR science)&from=${formattedDate}&to=${formattedDate}&sortBy=popularity&apiKey=${apiKey}`
      );
      const data = await response.json();

      if (data.articles.length > 0) {
        // Limit to only 5 articles
        setNews(data.articles.slice(0, 5));
      } else {
        setNews([]);
        setError('No news articles available for this date.');
      }
    } catch (error) {
      setNews([]);
      setError("Sorry, we couldn't fetch news for this date. Please try again later.");
    }
    setLoading(false); // Stop loading
  };

  return (
    <div className="p-4 md:p-6 bg-blue-50 rounded-lg text-center max-w-lg mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-blue-700">Time Travel</h2>
      <p className="mt-2 md:mt-4 text-gray-600">Select a date to travel through time:</p>
      
      <input 
        type="date" 
        className="mt-2 md:mt-4 p-2 border border-gray-300 rounded-lg w-full md:w-auto"
        onChange={(e) => setSelectedDate(e.target.value)} 
      />
      
      <button 
        className="mt-4 md:mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition w-full md:w-auto"
        onClick={handleTimeTravel}
      >
        Travel in Time
      </button>

      {/* Time travel message */}
      {message && (
        <div className="mt-4 md:mt-6 p-4 bg-white shadow-lg rounded-lg text-blue-600">
          {message}
        </div>
      )}

      {/* Show loading message while fetching news */}
      {loading && (
        <div className="mt-4 md:mt-6 p-4 bg-yellow-100 text-yellow-600 rounded-lg">
          Fetching news, please wait...
        </div>
      )}

      {/* Show error message if API fails */}
      {error && (
        <div className="mt-4 md:mt-6 p-4 bg-red-100 text-red-600 rounded-lg">
          {error}
        </div>
      )}

      {/* Display news articles */}
      {news.length > 0 && !loading && !error && (
        <div className="mt-4 md:mt-6 text-left">
          <h3 className="text-lg md:text-xl font-semibold text-blue-700">
            News from {new Date(selectedDate).toDateString()}:
          </h3>
          <ul className="mt-4 space-y-4">
            {news.map((article, index) => (
              <li key={index} className="p-4 bg-white shadow rounded-lg">
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 hover:underline font-bold"
                >
                  {article.title}
                </a>
                <p className="mt-2 text-gray-600">{article.description}</p>
                <p className="mt-2 text-sm text-gray-400">Source: {article.source.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TimeTravel;
