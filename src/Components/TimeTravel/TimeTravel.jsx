import React, { useState } from 'react';

function TimeTravel() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [message, setMessage] = useState('');

  // Generate a message based on the selected date
  const handleTimeTravel = () => {
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
  };

  return (
    <div className="p-6 bg-blue-50 rounded-lg text-center">
      <h2 className="text-2xl font-bold text-blue-700">Time Travel</h2>
      <p className="mt-4 text-gray-600">Select a date to travel through time:</p>
      
      <input 
        type="date" 
        className="mt-4 p-2 border border-gray-300 rounded-lg"
        onChange={(e) => setSelectedDate(e.target.value)} 
      />
      
      <button 
        className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        onClick={handleTimeTravel}
      >
        Travel in Time
      </button>

      {message && (
        <div className="mt-6 p-4 bg-white shadow-lg rounded-lg text-blue-600">
          {message}
        </div>
      )}
    </div>
  );
}

export default TimeTravel;
