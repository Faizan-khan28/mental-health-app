import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Play() {
  return (
    <div className='flex flex-col  md:flex-row items-center justify-center  px-6 md:px-20'>
      <div className="flex flex-col items-center text-center md:w-1/2">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-800 mt-6">
          Start Playing Relax Game
        </h1>

        <img 
          className='w-40 h-36 md:w-60 md:h-52 mt-4'
          src="/headphones.jpg" 
          alt="headphones" 
        />

        <button className="mt-6 px-18 py-3 cursor-pointer hover:scale-110 transition-transform duration-300 bg-purple-700 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-800">
          Start
        </button>
      </div>

      <div className="md:w-1/2 sm:pl-35 flex justify-center">
        <DotLottieReact
          className='w-60 h-60 md:w-80 md:h-80'
          src="https://lottie.host/874ca580-c546-4eb9-a3d6-da9bb8d678e5/hDLMIsactJ.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
}
