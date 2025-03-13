import { useState } from "react"
import HomePage from "./pages/HomePage"
import Home from "./pages/Home";

function App() {
  const [pages , setPages] = useState(false);

  let Handlepages = () => {
    setPages(true)
  }
 
  return (
    <>
     {
      pages ? <Home/> : <HomePage Handlepages={Handlepages}/>
     }
    </>
  )
}

export default App
