import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-500 p-4 flex justify-between items-center w-full shadow-lg text-white relative">
      <h1 className="text-xl sm:text-2xl sm:pl-5 font-bold">FaiMind✨</h1>

      <div className="sm:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="cursor-pointer" size={30} /> : <Menu size={30} />}
      </div>

      <ul className="hidden sm:flex space-x-4 sm:text-xl font-bold sm:pr-5">
        <li className="hover:text-gray-300 cursor-pointer">Home</li>
        <li className="hover:text-gray-300 cursor-pointer">Stats</li>
        <li className="hover:text-gray-300 cursor-pointer">Profile</li>
        <li className="hover:text-gray-300 cursor-pointer">Settings</li>
      </ul>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%", opacity: 0, transition: { duration: 1 } }}
            transition={{ duration: 0.5 }}
            className="absolute z-40 top-0 right-0 h-screen w-3/4 bg-purple-600 shadow-lg flex flex-col items-center rounded-md space-y-6 pt-20 text-xl font-bold sm:hidden"
          >
            {["Home", "Stats", "Profile", "Settings"].map(item => (
              <li
                key={item}
                className="group relative w-full px-6 py-3 text-white cursor-pointer overflow-hidden text-center"
                onClick={() => setIsOpen(false)}
              >
                <span className="absolute inset-y-0 inset-x-0 bg-white/20 backdrop-blur-md scale-0 group-hover:scale-100 transition-transform duration-500 rounded-lg"></span>
                <span className="relative z-10">{item}</span>
              </li>
            ))}
            <div className="flex fixed  bottom-0">
             <h3 className="text-sm font-normal text-gray-200">Developer Faizan</h3>
            </div>
          </motion.ul>
        )}
      </AnimatePresence>

    </nav>
  );
}
