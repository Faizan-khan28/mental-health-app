export default function Activities() {
  return (
    <div className="flex  flex-col md:flex-row items-center justify-center sm:gap-50 sm:mt-20 px-6 py-10">
      {/* Left Section */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-800 mt-6">
          Self-Care Activities
        </h1>
        <button className="mt-6 px-18 py-3 cursor-pointer hover:scale-110 transition-transform duration-300 bg-purple-700 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-800">
          Explore
        </button>
      </div>

      {/* Right Section (Image) */}
      <div>
        <img
          className="w-72 md:w-[500px] object-cover"
          src="/selfcare.jpg"
          alt="Self Care"
        />
      </div>
    </div>
  );
}
