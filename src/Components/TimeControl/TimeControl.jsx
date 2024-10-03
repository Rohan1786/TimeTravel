import React, { useState, useEffect } from 'react';

function TimeControl() {
  const [time, setTime] = useState(new Date());
  const [speed, setSpeed] = useState(1); // Speed multiplier

  useEffect(() => {
    // Update the time every second (or faster/slower based on speed)
    const interval = setInterval(() => {
      setTime(prevTime => new Date(prevTime.getTime() + 1000 * speed));
    }, 1000 / speed);

    return () => clearInterval(interval); // Clean up on unmount
  }, [speed]);

  return (
    <div className="p-6 bg-gray-100 rounded-lg text-center">
      <h2 className="text-2xl font-bold text-blue-700">Time Control</h2>
      <p className="mt-4 text-gray-600">Current Time: {time.toLocaleTimeString()}</p>

      <div className="mt-4">
        <label className="text-gray-600">Speed: </label>
        <input 
          type="range" 
          min="0.5" 
          max="5" 
          step="0.5" 
          value={speed} 
          onChange={(e) => setSpeed(parseFloat(e.target.value))}
          className="mt-4 w-full"
        />
      </div>

      <p className="mt-4 text-gray-600">Current Speed: {speed}x</p>
    </div>
  );
}

export default TimeControl;
