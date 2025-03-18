import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Breathing() {
  return (
    <div className="flex flex-col mt-25 sm:mt-2 mb-30 sm:mb-40 md:flex-row items-center justify-center sm:mr-40 gap-10 md:gap-40">

      <div className="flex justify-center">
        <DotLottieReact
          className="w-[600px] h-[300px] md:w-[800px] md:h-[400px]"
          src="https://lottie.host/9aafa868-5bae-4678-914e-b88742f59108/uORiVRJj4l.lottie"
          loop
          autoplay
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-800 mt-6">
          Start Breathing Exercise
        </h1>
        <button className="mt-6 px-6 py-3 cursor-pointer hover:scale-110 transition-transform duration-300 bg-purple-700 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-800">
          Start Breathing
        </button>
      </div>
    </div>
  );
}
