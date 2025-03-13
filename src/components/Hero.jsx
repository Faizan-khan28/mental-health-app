import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center p-6 md:p-10 w-screen bg-purple-200 rounded-lg shadow-lg">
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.9 }}
        className="w-full md:w-1/2 px-4"
      >
        <h1 className="text-2xl sm:text-xl md:text-3xl font-bold text-purple-900 leading-tight">
          Take Care of Your Mental Health 💜
        </h1>
        <p className="mt-2 text-sm sm:text-sm md:text-lg text-purple-700 max-w-[90%] mx-auto">
          Your journey to a happier life starts here. Track your mood & practice mindfulness.
        </p>
      </motion.div>

      <div className="w-full md:w-auto h-auto max-w-90 md:max-w-[400px] max-h-86 md:max-h-[400px] mt-4 md:mt-0 object-contain">
        <DotLottieReact
          src="https://lottie.host/36843132-cc4a-42e5-98f1-b534bf0acb7e/alGKassUHD.lottie"
          autoplay
          loop
        />
      </div>
    </div>
  );
}
