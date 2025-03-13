import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-purple-500 text-white py-6 px-4 text-center w-full mb-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h2 className="text-xl font-bold">Get in Touch</h2>
          <p className="text-sm mt-1">We're here to support your mental health journey.</p>
          <p className="mt-2">📧 support@mentalhealthweb.com</p>
          <p>📞 7906264376</p>
        </div>

        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:scale-110 transition-transform">
            <FaLinkedin className="text-[#0077B5] text-3xl" />
          </a>
          <a href="#" className="hover:scale-110 transition-transform">
            <FaInstagram className="text-[#E4405F] text-3xl" />
          </a>
          <a href="#" className="hover:scale-110 transition-transform">
            <FaXTwitter className="text-white text-3xl" />
          </a>
        </div>

        <p className="text-sm opacity-80">© 2025 Mental Health Web. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
