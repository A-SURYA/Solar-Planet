import { useState } from 'react'
import { Link } from 'react-router-dom'
import Stars from '../components/Stars'
import { planets } from '../data/planets'

const orbitData = [
  { radius: 70, speed: 4, size: 14 },
  { radius: 110, speed: 7, size: 16 },
  { radius: 155, speed: 10, size: 18 },
  { radius: 195, speed: 13, size: 14 },
  { radius: 250, speed: 22, size: 30 },
  { radius: 300, speed: 30, size: 26 },
  { radius: 345, speed: 42, size: 20 },
  { radius: 385, speed: 52, size: 19 },
]

export default function SolarSystem() {
  const [selectedPlanet, setSelectedPlanet] = useState(null)
  const [isPaused, setIsPaused] = useState(false)

  const selected = selectedPlanet ? planets.find(p => p.id === selectedPlanet) : null

  return (
    <div className="min-h-screen starfield relative overflow-hidden">
      <Stars count={120} />

      <div className="relative z-10 pt-20 pb-8 px-4">
        <div className="text-center mb-6">
          <h1 className="font-display text-5xl text-white mb-2">Our Solar System 🌌</h1>
          <p className="text-white/60 font-semibold">Click on a planet to learn about it!</p>
          <button
            onClick={() => setIsPaused(p => !p)}
            className="mt-3 px-4 py-2 glass-card rounded-full text-sm font-bold text-white/80 hover:text-white transition-all"
          >
            {isPaused ? '▶ Resume Orbit' : '⏸ Pause Orbit'}
          </button>
        </div>

        {/* Orrery */}
        <div className="relative flex items-center justify-center" style={{ height: '820px' }}>
          {/* Orbit rings */}
          {orbitData.map((orbit, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-white/10"
              style={{
                width: orbit.radius * 2,
                height: orbit.radius * 2,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}

          {/* Sun */}
          <div
            className="absolute z-10 cursor-pointer"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            onClick={() => setSelectedPlanet(null)}
          >
            <div
              className="rounded-full flex items-center justify-center text-4xl"
              style={{
                width: 72, height: 72,
                background: 'radial-gradient(circle at 35% 35%, #fff7a0, #FFD700, #FF8C00)',
                boxShadow: '0 0 40px #FFD70080, 0 0 80px #FF8C0040',
                animation: 'pulse-glow 2s ease-in-out infinite',
              }}
            >
              ☀️
            </div>
          </div>

          {/* Orbiting Planets */}
          {planets.map((planet, i) => {
            const orbit = orbitData[i]
            return (
              <div
                key={planet.id}
                className="absolute"
                style={{
                  top: '50%',
                  left: '50%',
                  width: 0,
                  height: 0,
                  animationPlayState: isPaused ? 'paused' : 'running',
                  animation: `orbit ${orbit.speed}s linear infinite`,
                  '--orbit-radius': `${orbit.radius}px`,
                }}
              >
                <button
                  onClick={() => setSelectedPlanet(selectedPlanet === planet.id ? null : planet.id)}
                  className="absolute rounded-full flex items-center justify-center transition-all duration-200 hover:scale-150 z-10"
                  style={{
                    width: orbit.size,
                    height: orbit.size,
                    transform: `translate(-50%, -50%)`,
                    background: `radial-gradient(circle at 35% 35%, ${planet.glowColor}, ${planet.color})`,
                    boxShadow: selectedPlanet === planet.id
                      ? `0 0 20px ${planet.color}, 0 0 40px ${planet.color}80`
                      : `0 0 8px ${planet.color}80`,
                    fontSize: orbit.size * 0.6,
                  }}
                  title={planet.name}
                />
              </div>
            )
          })}
        </div>

        {/* Planet list below */}
        <div className="max-w-4xl mx-auto -mt-32">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {planets.map(planet => (
              <button
                key={planet.id}
                onClick={() => setSelectedPlanet(selectedPlanet === planet.id ? null : planet.id)}
                className={`px-3 py-1.5 rounded-full text-sm font-bold transition-all border ${
                  selectedPlanet === planet.id
                    ? 'bg-white/20 border-white/50 text-white scale-110'
                    : 'glass-card border-white/10 text-white/70 hover:text-white hover:border-white/30'
                }`}
              >
                {planet.emoji} {planet.name}
              </button>
            ))}
          </div>

          {/* Selected planet info */}
          {selected && (
            <div className="glass-card rounded-3xl p-6 border border-white/20 animate-slide-in">
              <div className="flex items-start gap-4">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-4xl flex-shrink-0"
                  style={{
                    background: `radial-gradient(circle at 35% 35%, ${selected.glowColor}, ${selected.color})`,
                    boxShadow: `0 0 30px ${selected.color}60`,
                  }}
                >
                  {selected.emoji}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="font-display text-3xl text-white">{selected.name}</h2>
                    <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-white/10 text-white/60">
                      Planet #{selected.order}
                    </span>
                  </div>
                  <p className="text-white/70 font-semibold mb-4">{selected.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    {[
                      { label: '🌙 Moons', val: selected.moons },
                      { label: '📅 Year', val: selected.yearLength },
                      { label: '🌡️ Temp', val: selected.temperature },
                      { label: '📏 Size', val: selected.size },
                    ].map(item => (
                      <div key={item.label} className="bg-white/5 rounded-xl p-3">
                        <div className="text-white/50 text-xs mb-1">{item.label}</div>
                        <div className="text-white font-bold text-sm">{item.val}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <div className="fact-badge rounded-xl p-3 flex-1">
                      <p className="text-yellow-300 font-bold text-sm">⭐ Did you know?</p>
                      <p className="text-white/80 text-sm mt-1">{selected.funFact}</p>
                    </div>
                    <Link
                      to={`/planets/${selected.id}`}
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all self-end whitespace-nowrap"
                    >
                      Full Details →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
