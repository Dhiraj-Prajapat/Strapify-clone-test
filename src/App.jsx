
import Hero from "./pages/Hero"
import Navbar from "./pages/Navbar"
import "./styles/style.css"


const App = () => {
  return (
    <>
    <div className="bg-[#0c0c0c] h-full w-full">
      <Navbar />
      <Hero />
    </div>
    </>
  )
}

export default App
