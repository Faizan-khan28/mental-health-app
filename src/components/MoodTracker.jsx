
export default function MoodTracker () {
    return (
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-xl font-bold">How are you feeling today?</h2>
          <div className="flex gap-4 justify-center mt-4">
            <button className="bg-green-300 p-2 rounded-lg">😊 Happy</button>
            <button className="bg-yellow-300 p-2 rounded-lg">😐 Neutral</button>
            <button className="bg-red-300 p-2 rounded-lg">😔 Sad</button>
          </div>
        </div>
      );
}