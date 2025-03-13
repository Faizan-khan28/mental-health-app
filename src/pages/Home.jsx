import Footer from "../components/Footer"
import Main from "../components/Main";
import Navbar from "../components/NavBar";

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-purple-700">
      <Navbar />
      <Main />
      {/* <Footer/> */}
    </div>
  );
}
