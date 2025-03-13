
export default function Activites () {
    return (
        <div className="p-6 bg-blue-50 shadow-lg rounded-lg">
          <h2 className="text-xl font-bold text-center">Explore Self-Care Activities</h2>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <button className="p-3 bg-purple-300 rounded-lg">🧘 Meditation</button>
            <button className="p-3 bg-yellow-300 rounded-lg">📖 Journaling</button>
            <button className="p-3 bg-green-300 rounded-lg">💨 Breathing Exercise</button>
          </div>
        </div>
      );
}