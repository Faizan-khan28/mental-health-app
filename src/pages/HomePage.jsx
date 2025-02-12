export default function HomePage() {
    return (
      <div className="bg-purple-500 w-screen h-screen flex flex-col items-center justify-center text-center px-4">
      
        <div className="mt-5">
          <img 
            src="/meditation.gif" 
            alt="Meditation GIF" 
            className="w-72 md:w-96 animate-fadeIn duration-100"
          />
        </div>
  
        
        <div className="mt-6">
          <h1 className="text-white text-3xl md:text-5xl font-bold animate-slideIn">
            Find Your Inner Peace ✨
          </h1>
          <p className="text-white text-lg md:text-xl mt-2 animate-fadeInSlow">
            A journey towards mindfulness and mental well-being starts here.
          </p>
  
        
          <button className="mt-6 cursor-pointer px-6 py-3 text-purple-500 font-semibold bg-white rounded-full text-lg transition-all duration-300 transform hover:scale-110 hover:bg-gray-200 animate-bounce">
            Get Started
          </button>
        </div>
      </div>
    );
  }
  