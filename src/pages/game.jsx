import React, { useState } from "react";

export default function BubbleWrapPopper() {
  const [bubbles, setBubbles] = useState(Array(36).fill(true)); // 6x6 grid

  const popBubble = (index) => {
    const newBubbles = [...bubbles];
    newBubbles[index] = false;
    setBubbles(newBubbles);
    
    // Play pop sound
    new Audio("/pop.mp3").play();
  };

  const resetBubbles = () => {
    setBubbles(Array(36).fill(true));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">Bubble Wrap Popper</h2>
      
      {/* Bubble Wrap Grid */}
      <div className="grid grid-cols-6 gap-3 p-4 bg-white shadow-lg rounded-lg">
        {bubbles.map((isPopped, index) => (
          <button
            key={index}
            className={`w-12 h-12 rounded-full transition-all duration-200 
              ${isPopped ? "bg-purple-300 hover:bg-purple-400" : "bg-gray-300 scale-90"}`}
            onClick={() => popBubble(index)}
          />
        ))}
      </div>

      {/* Reset Button */}
      <button
        onClick={resetBubbles}
        className="mt-6 px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-800 transition"
      >
        Reset Bubbles
      </button>
    </div>
  );
}
