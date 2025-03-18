import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";

export default function TrackMood() {
  //   const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center  justify-center min-h-screen bg-white px-6 md:px-10">
      {/* Left Section - Animation, Heading, Button */}
      <div className="w-full md:w-1/2 flex flex-col items-center sm:items-start  ml-4 md:pl-60">
        <DotLottieReact
          src="https://lottie.host/006c2366-dd74-4775-81a8-6dbc577ee2bc/RPinKF1u3J.lottie"
          loop
          autoplay
          style={{ width: 250, height: 250 }}
        />

        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-purple-800 mt-6">
            Track Your Mood
          </h2>

          <button
            className="mt-6 px-6 py-3 cursor-pointer hover:scale-110 transition-transform duration-300 bg-purple-700 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-800"
            onClick={() => navigate("/mood-tracker")}
          >
            Start Tracking
          </button>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src="/mood.jpg"
          alt="Mood"
          className="w-72 h-72 md:w-96 md:h-96 object-cover"
        />
      </div>
    </div>
  );
}
