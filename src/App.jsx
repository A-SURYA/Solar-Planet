import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SolarSystem from './pages/SolarSystem'
import Planets from './pages/Planets'
import PlanetDetail from './pages/PlanetDetail'
import Sun from './pages/Sun'
import Quiz from './pages/Quiz'
import Facts from './pages/Facts'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solar-system" element={<SolarSystem />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/planets/:id" element={<PlanetDetail />} />
        <Route path="/sun" element={<Sun />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/facts" element={<Facts />} />
      </Routes>
    </div>
  )
}
