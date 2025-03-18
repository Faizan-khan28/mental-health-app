import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

export default function MoodTracker() {
  const [mood, setMood] = useState("");
  const [moodHistory, setMoodHistory] = useState([]);

  useEffect(() => {
    const savedMoods = JSON.parse(localStorage.getItem("moods")) || [];
    setMoodHistory(savedMoods);
  }, []);

  const handleMoodSelect = (selectedMood) => {
    const newMoodEntry = { mood: selectedMood, date: new Date().toLocaleDateString() };
    const updatedMoods = [...moodHistory, newMoodEntry];

    setMood(selectedMood);
    setMoodHistory(updatedMoods);
    localStorage.setItem("moods", JSON.stringify(updatedMoods));
  };

  const handleClearHistory = () => {
    setMoodHistory([]);
    localStorage.removeItem("moods");
  };

  // Chart Data
  const moodCounts = moodHistory.reduce((acc, entry) => {
    acc[entry.mood] = (acc[entry.mood] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(moodCounts),
    datasets: [
      {
        label: "Mood Frequency",
        data: Object.values(moodCounts),
        backgroundColor: ["#8B5CF6", "#A78BFA", "#C4B5FD"],
      },
    ],
  };

  return (
    <div className="p-6 mb-30 bg-purple-200 shadow-lg rounded-lg text-center w-full mx-auto">
      <h2 className="text-2xl font-bold text-purple-800">How are you feeling today?</h2>

      <div className="flex gap-4 justify-center mt-4">
        <button
          className="bg-purple-500 cursor-pointer hover:scale-110 transition-transform duration-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg"
          onClick={() => handleMoodSelect("Happy")}
        >
          😊 Happy
        </button>
        <button
          className="bg-purple-500 cursor-pointer hover:scale-110 transition-transform duration-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg"
          onClick={() => handleMoodSelect("Neutral")}
        >
          😐 Neutral
        </button>
        <button
          className="bg-purple-500 cursor-pointer hover:scale-110 transition-transform duration-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg"
          onClick={() => handleMoodSelect("Sad")}
        >
          😔 Sad
        </button>
      </div>

      {/* Show Last Selected Mood */}
      {mood && <p className="mt-4 text-lg text-purple-900">You are feeling <strong>{mood}</strong> today.</p>}

      {/* Mood History List */}
      {moodHistory.length > 0 && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-purple-800">Mood History</h3>
          <ul className="mt-2 text-purple-900">
            {moodHistory.map((entry, index) => (
              <li key={index} className="text-sm">
                {entry.date} - {entry.mood}
              </li>
            ))}
          </ul>
          {/* Clear History Button */}
          <button
            className="mt-4 cursor-pointer bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            onClick={handleClearHistory}
          >
            🗑 Clear Mood History
          </button>
        </div>
      )}

      {/* Chart Visualization */}
      {moodHistory.length > 0 && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-purple-800">Mood Trends</h3>
          <Bar data={chartData} />
        </div>
      )}
    </div>
  );
}
