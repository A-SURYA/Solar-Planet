import { Link } from 'react-router-dom'
import Stars from '../components/Stars'

const features = [
  {
    icon: '🌌',
    title: 'Solar System',
    desc: 'See all planets orbiting the Sun!',
    path: '/solar-system',
    color: 'from-purple-900/60 to-purple-700/40',
    border: 'border-purple-500/30',
  },
  {
    icon: '🪐',
    title: 'All Planets',
    desc: 'Learn about all 8 amazing planets!',
    path: '/planets',
    color: 'from-blue-900/60 to-blue-700/40',
    border: 'border-blue-500/30',
  },
  {
    icon: '☀️',
    title: 'The Sun',
    desc: 'Discover our incredible star!',
    path: '/sun',
    color: 'from-yellow-900/60 to-orange-800/40',
    border: 'border-yellow-500/30',
  },
  {
    icon: '🎯',
    title: 'Space Quiz',
    desc: 'Test your space knowledge!',
    path: '/quiz',
    color: 'from-pink-900/60 to-pink-700/40',
    border: 'border-pink-500/30',
  },
  {
    icon: '✨',
    title: 'Fun Facts',
    desc: 'Wow your friends with cool facts!',
    path: '/facts',
    color: 'from-teal-900/60 to-teal-700/40',
    border: 'border-teal-500/30',
  },
]

const floatingPlanets = ['🪐', '🌍', '🔴', '🌙', '⭐', '☄️', '🚀', '👨‍🚀']

export default function Home() {
  return (
    <div className="min-h-screen starfield relative overflow-hidden">
      <Stars count={100} />

      {/* Floating decorative planets */}
      {floatingPlanets.map((p, i) => (
        <div
          key={i}
          className="fixed text-4xl pointer-events-none select-none"
          style={{
            left: `${[8, 88, 15, 82, 5, 92, 50, 70][i]}%`,
            top: `${[15, 25, 75, 65, 45, 50, 85, 10][i]}%`,
            animation: `float ${3 + i * 0.5}s ${i * 0.3}s ease-in-out infinite`,
            opacity: 0.4,
            fontSize: `${2 + Math.random()}rem`,
          }}
        >
          {p}
        </div>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-28 pb-20 text-center">
        {/* Hero */}
        <div className="mb-12 animate-slide-in">
          <div className="text-8xl mb-6 animate-float">🚀</div>
          <h1 className="font-display text-6xl md:text-8xl text-white mb-4 leading-tight">
            Solar System
            <span className="block text-yellow-300">Explorer!</span>
          </h1>
          <p className="text-white/70 text-xl md:text-2xl max-w-2xl mx-auto font-semibold">
            Blast off into space! 🌟 Learn about planets, the Sun, and amazing space facts!
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link
              to="/solar-system"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-lg rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-purple-900/50"
            >
              🌌 Start Exploring!
            </Link>
            <Link
              to="/quiz"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-full border border-white/20 transition-all duration-200 hover:scale-105"
            >
              🎯 Take the Quiz
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-16">
          {[
            { num: '8', label: 'Planets' },
            { num: '1', label: 'Star (The Sun)' },
            { num: '∞', label: 'Things to Learn!' },
          ].map(stat => (
            <div key={stat.label} className="glass-card rounded-2xl p-4">
              <div className="font-display text-4xl text-yellow-300">{stat.num}</div>
              <div className="text-white/60 text-sm font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <h2 className="font-display text-4xl text-white mb-8">What do you want to explore? 🔭</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <Link
              key={feature.path}
              to={feature.path}
              className={`glass-card rounded-2xl p-6 block hover:scale-105 transition-all duration-300 border ${feature.border} group`}
              style={{ animationDelay: `${i * 0.1}s`, animation: 'slideIn 0.5s ease-out both' }}
            >
              <div className="text-5xl mb-3 group-hover:animate-float inline-block">{feature.icon}</div>
              <h3 className="font-display text-2xl text-white mb-2">{feature.title}</h3>
              <p className="text-white/60 font-semibold">{feature.desc}</p>
              <div className="mt-4 text-purple-400 font-bold text-sm group-hover:text-purple-300">
                Let's go! →
              </div>
            </Link>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 fact-badge rounded-2xl p-4 max-w-lg mx-auto">
          <p className="text-white/80 font-semibold text-sm">
            🎓 <strong>School Project</strong> — Grade 3 | Subject: Science | Topic: Our Solar System
          </p>
        </div>
      </div>
    </div>
  )
}
