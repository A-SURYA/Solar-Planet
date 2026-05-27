import { useState } from 'react'
import Stars from '../components/Stars'
import PlanetCard from '../components/PlanetCard'
import { planets } from '../data/planets'

const filters = ['All', 'Rocky Planet', 'Gas Giant', 'Ice Giant']

export default function Planets() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = planets.filter(p => {
    const matchType = activeFilter === 'All' || p.type === activeFilter
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchType && matchSearch
  })

  return (
    <div className="min-h-screen starfield relative">
      <Stars />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-16">
        <div className="text-center mb-10">
          <h1 className="font-display text-6xl text-white mb-3">All 8 Planets 🪐</h1>
          <p className="text-white/60 font-semibold text-lg">Click any planet to learn more!</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full font-bold text-sm transition-all border ${
                activeFilter === f
                  ? 'bg-purple-600 border-purple-500 text-white'
                  : 'glass-card border-white/10 text-white/60 hover:text-white hover:border-white/30'
              }`}
            >
              {f}
            </button>
          ))}
          <input
            type="text"
            placeholder="🔍 Search planet..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-4 py-2 glass-card rounded-full border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500 bg-transparent font-semibold"
          />
        </div>

        {/* Order guide */}
        <div className="glass-card rounded-2xl p-4 mb-8 flex flex-wrap gap-2 justify-center items-center">
          <span className="text-white/50 text-sm font-semibold mr-2">Order from Sun:</span>
          {planets.map(p => (
            <div key={p.id} className="flex items-center gap-1 text-sm font-bold text-white/70">
              <span>{p.emoji}</span>
              <span className="text-white/40 text-xs">{p.order}.</span>
              <span>{p.name}</span>
              {p.order < 8 && <span className="text-white/20 mx-1">→</span>}
            </div>
          ))}
        </div>

        {/* Planet grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔭</div>
            <p className="text-white/50 font-semibold text-xl">No planets found! Try a different search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((planet, i) => (
              <PlanetCard key={planet.id} planet={planet} index={i} />
            ))}
          </div>
        )}

        {/* Size comparison */}
        <div className="glass-card rounded-3xl p-6 mt-12">
          <h2 className="font-display text-3xl text-white mb-6 text-center">Size Comparison 📏</h2>
          <div className="flex items-end justify-center gap-3 flex-wrap">
            {[
              { name: 'Mercury', size: 16, color: '#B5B5B5', emoji: '🪨' },
              { name: 'Venus', size: 22, color: '#E8C97A', emoji: '☁️' },
              { name: 'Earth', size: 24, color: '#4A90E2', emoji: '🌍' },
              { name: 'Mars', size: 18, color: '#C1440E', emoji: '🔴' },
              { name: 'Jupiter', size: 80, color: '#C88B3A', emoji: '🟠' },
              { name: 'Saturn', size: 72, color: '#E4D094', emoji: '🪐' },
              { name: 'Uranus', size: 50, color: '#7DE8E8', emoji: '🔵' },
              { name: 'Neptune', size: 48, color: '#4169E1', emoji: '💙' },
            ].map(p => (
              <div key={p.name} className="flex flex-col items-center gap-2">
                <div
                  className="rounded-full flex items-center justify-center"
                  style={{
                    width: p.size, height: p.size,
                    background: `radial-gradient(circle at 35% 35%, white20, ${p.color})`,
                    boxShadow: `0 0 10px ${p.color}60`,
                    fontSize: p.size * 0.55,
                  }}
                >
                  {p.emoji}
                </div>
                <span className="text-white/50 text-xs font-semibold">{p.name}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-white/40 text-sm mt-4 font-semibold">
            Jupiter is so big that all other planets could fit inside it!
          </p>
        </div>
      </div>
    </div>
  )
}
