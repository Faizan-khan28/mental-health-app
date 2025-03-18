import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Consultant() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:gap-40 justify-center mb-75">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-800 mt-6">
          Find A Psychiatrist Near You
        </h1>
        <button className="mt-6 px-18 py-3 cursor-pointer hover:scale-110 transition-transform duration-300 bg-purple-700 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-800">
          Find
        </button>
      </div>

      <div>
        <DotLottieReact
          className="sm:w-[500px] mt-2 w-100 sm:pl-15"
          src="https://lottie.host/e1d08939-d138-450f-bfe2-2150ee76344a/E2CfLkCurC.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
}
