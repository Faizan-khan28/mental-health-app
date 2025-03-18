import cards from "../data/data";

export default function Cards() {
  return (
    <div className="p-6  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
        >
          <img
            src={card.img || "/placeholder.jpg"} // Default image agar koi na ho
            alt={card.title}
            className="w-full h-full object-cover rounded-md"
          />
          <h2 className="text-lg font-semibold text-purple-900 mt-3">
            {card.title}
          </h2>
          <p className="text-sm text-gray-600 mt-2">{card.description}</p>
          <button className="mt-4 cursor-pointer px-20 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-700 transition">
            {card.button}
          </button>
        </div>
      ))}
    </div>
  );
}
