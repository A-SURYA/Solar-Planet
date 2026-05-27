import { useParams, Link, useNavigate } from 'react-router-dom'
import Stars from '../components/Stars'
import { planets } from '../data/planets'

export default function PlanetDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const planet = planets.find(p => p.id === id)
  const prevPlanet = planets.find(p => p.order === (planet?.order ?? 1) - 1)
  const nextPlanet = planets.find(p => p.order === (planet?.order ?? 0) + 1)

  if (!planet) {
    return (
      <div className="min-h-screen starfield flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔭</div>
          <h2 className="font-display text-4xl text-white mb-4">Planet not found!</h2>
          <Link to="/planets" className="text-purple-400 font-bold">← Back to Planets</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen starfield relative">
      <Stars />

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-28 pb-16">
        {/* Back */}
        <Link to="/planets" className="inline-flex items-center gap-2 text-white/50 hover:text-white font-semibold mb-8 transition-colors">
          ← All Planets
        </Link>

        {/* Hero section */}
        <div className="glass-card rounded-3xl p-8 mb-6 animate-slide-in">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div
              className="w-40 h-40 rounded-full flex items-center justify-center text-7xl flex-shrink-0 animate-float"
              style={{
                background: `radial-gradient(circle at 35% 35%, ${planet.glowColor}, ${planet.color})`,
                boxShadow: `0 0 60px ${planet.color}60, 0 0 120px ${planet.color}30`,
              }}
            >
              {planet.emoji}
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-white/10 text-white/60">
                  #{planet.order} from the Sun
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-bold"
                  style={{ background: `${planet.color}30`, color: planet.glowColor }}>
                  {planet.type}
                </span>
              </div>
              <h1 className="font-display text-6xl text-white mb-3">{planet.name}</h1>
              <p className="text-white/70 text-lg font-semibold leading-relaxed">{planet.description}</p>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {[
            { icon: '📏', label: 'Size', value: planet.size },
            { icon: '☀️', label: 'Distance from Sun', value: planet.distanceFromSun },
            { icon: '🌡️', label: 'Temperature', value: planet.temperature },
            { icon: '🌙', label: 'Number of Moons', value: `${planet.moons} moon${planet.moons !== 1 ? 's' : ''}` },
            { icon: '☀️', label: 'Length of Year', value: planet.yearLength },
            { icon: '🔄', label: 'Length of Day', value: planet.dayLength },
          ].map(stat => (
            <div key={stat.label} className="glass-card rounded-2xl p-4">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-white/40 text-xs font-semibold uppercase tracking-wide mb-1">{stat.label}</div>
              <div className="text-white font-bold text-sm">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Fun fact */}
        <div className="fact-badge rounded-3xl p-6 mb-6">
          <div className="flex items-start gap-3">
            <span className="text-4xl">⭐</span>
            <div>
              <h3 className="font-display text-2xl text-yellow-300 mb-2">Did You Know?</h3>
              <p className="text-white/80 text-lg font-semibold">{planet.funFact}</p>
            </div>
          </div>
        </div>

        {/* Cool facts */}
        <div className="glass-card rounded-3xl p-6 mb-8">
          <h2 className="font-display text-3xl text-white mb-5">🚀 Cool Facts About {planet.name}</h2>
          <div className="space-y-3">
            {planet.coolFacts.map((fact, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-3">
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5"
                  style={{ background: `${planet.color}40`, color: planet.glowColor }}
                >
                  {i + 1}
                </span>
                <p className="text-white/80 font-semibold">{fact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation between planets */}
        <div className="flex justify-between items-center gap-4">
          {prevPlanet ? (
            <Link
              to={`/planets/${prevPlanet.id}`}
              className="glass-card rounded-2xl p-4 flex items-center gap-3 hover:border-white/30 border border-white/10 transition-all hover:scale-105 flex-1"
            >
              <div
                className="w-10 h-10 rounded-full flex-shrink-0"
                style={{ background: prevPlanet.color, boxShadow: `0 0 10px ${prevPlanet.color}60` }}
              />
              <div>
                <div className="text-white/40 text-xs">← Previous</div>
                <div className="text-white font-bold">{prevPlanet.name}</div>
              </div>
            </Link>
          ) : <div />}

          {nextPlanet ? (
            <Link
              to={`/planets/${nextPlanet.id}`}
              className="glass-card rounded-2xl p-4 flex items-center gap-3 hover:border-white/30 border border-white/10 transition-all hover:scale-105 flex-1 justify-end text-right"
            >
              <div>
                <div className="text-white/40 text-xs">Next →</div>
                <div className="text-white font-bold">{nextPlanet.name}</div>
              </div>
              <div
                className="w-10 h-10 rounded-full flex-shrink-0"
                style={{ background: nextPlanet.color, boxShadow: `0 0 10px ${nextPlanet.color}60` }}
              />
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  )
}
