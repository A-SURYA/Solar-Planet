import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: '🏠 Home' },
  { path: '/solar-system', label: '🌌 Solar System' },
  { path: '/planets', label: '🪐 Planets' },
  { path: '/sun', label: '☀️ The Sun' },
  { path: '/quiz', label: '🎯 Quiz' },
  { path: '/facts', label: '✨ Fun Facts' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          <span className="font-display text-xl text-yellow-300">Solar Explorer</span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                location.pathname === link.path
                  ? 'bg-purple-600 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Mobile menu */}
        <div className="md:hidden flex items-center gap-1 overflow-x-auto max-w-[60vw]">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                location.pathname === link.path
                  ? 'bg-purple-600 text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {link.label.split(' ')[0]}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
