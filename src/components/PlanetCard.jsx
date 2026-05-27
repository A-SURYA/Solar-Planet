import { Link } from 'react-router-dom'

export default function PlanetCard({ planet, index }) {
  return (
    <Link
      to={`/planets/${planet.id}`}
      className="planet-card glass-card rounded-2xl p-5 block hover:scale-105 transition-all duration-300 hover:border-white/30 group"
      style={{
        animationDelay: `${index * 0.1}s`,
        animation: 'slideIn 0.5s ease-out both'
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="planet-emoji w-14 h-14 rounded-full flex items-center justify-center text-3xl flex-shrink-0"
          style={{
            background: `radial-gradient(circle at 35% 35%, ${planet.glowColor}, ${planet.color})`,
            boxShadow: `0 0 20px ${planet.color}40`
          }}
        >
          {planet.emoji}
        </div>
        <div>
          <h3 className="font-display text-xl text-white group-hover:text-yellow-300 transition-colors">
            {planet.name}
          </h3>
          <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/70">
            {planet.type}
          </span>
        </div>
        <div className="ml-auto text-white/30 text-2xl font-display">
          #{planet.order}
        </div>
      </div>

      <p className="text-white/60 text-sm leading-relaxed mb-3 line-clamp-2">
        {planet.description}
      </p>

      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white/5 rounded-lg p-2">
          <p className="text-white/40 text-xs">Moons</p>
          <p className="text-white font-bold text-lg">{planet.moons}</p>
        </div>
        <div className="bg-white/5 rounded-lg p-2">
          <p className="text-white/40 text-xs">From Sun</p>
          <p className="text-white font-semibold text-xs leading-tight mt-0.5">{planet.distanceFromSun}</p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-end gap-1 text-purple-400 text-sm font-semibold group-hover:gap-2 transition-all">
        Learn more <span>→</span>
      </div>
    </Link>
  )
}
