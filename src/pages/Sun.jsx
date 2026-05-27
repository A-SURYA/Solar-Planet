import Stars from '../components/Stars'
import { sunData } from '../data/planets'

const sunFacts = [
  { icon: '📏', label: 'Diameter', value: '1,392,700 km' },
  { icon: '🌡️', label: 'Surface Temp', value: '5,500°C' },
  { icon: '🔥', label: 'Core Temp', value: '15,000,000°C!' },
  { icon: '⚡', label: 'Age', value: '4.6 billion years' },
  { icon: '💡', label: 'Light to Earth', value: '8 minutes' },
  { icon: '🌍', label: 'Earths Inside', value: '1,300,000!' },
]

const sunLayers = [
  { name: 'Core', color: '#FFE066', desc: 'Where nuclear fusion happens. Temperature: 15 million°C!' },
  { name: 'Radiative Zone', color: '#FFB800', desc: 'Energy travels out slowly as light. Takes 100,000 years!' },
  { name: 'Convective Zone', color: '#FF8C00', desc: 'Hot plasma bubbles up like boiling soup.' },
  { name: 'Photosphere', color: '#FFA040', desc: 'The visible "surface" we see. Temperature: 5,500°C.' },
  { name: 'Chromosphere', color: '#FF6040', desc: 'A thin layer above the surface. Seen during eclipses!' },
  { name: 'Corona', color: '#FF4060', desc: 'The Sun\'s outer atmosphere — over 1 million°C!' },
]

export default function Sun() {
  return (
    <div className="min-h-screen starfield relative">
      <Stars />

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-28 pb-16">
        {/* Hero */}
        <div className="text-center mb-10">
          <div
            className="w-36 h-36 mx-auto rounded-full flex items-center justify-center text-7xl mb-6 animate-float"
            style={{
              background: 'radial-gradient(circle at 35% 35%, #fff7a0, #FFD700, #FF8C00)',
              boxShadow: '0 0 60px #FFD70080, 0 0 100px #FF8C0040',
              animation: 'float 3s ease-in-out infinite',
            }}
          >
            ☀️
          </div>
          <h1 className="font-display text-6xl text-white mb-3">The Sun ☀️</h1>
          <p className="text-white/70 text-lg font-semibold max-w-xl mx-auto">
            {sunData.description}
          </p>
        </div>

        {/* Fun fact banner */}
        <div
          className="rounded-3xl p-5 mb-8 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(255,165,0,0.2), rgba(255,69,0,0.2))', border: '1px solid rgba(255,165,0,0.3)' }}
        >
          <p className="text-yellow-300 font-bold text-lg">⭐ {sunData.funFact}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {sunFacts.map(fact => (
            <div key={fact.label} className="glass-card rounded-2xl p-4">
              <div className="text-2xl mb-1">{fact.icon}</div>
              <div className="text-white/40 text-xs font-semibold uppercase tracking-wide mb-1">{fact.label}</div>
              <div className="text-yellow-300 font-bold">{fact.value}</div>
            </div>
          ))}
        </div>

        {/* What is the Sun? */}
        <div className="glass-card rounded-3xl p-6 mb-8">
          <h2 className="font-display text-3xl text-white mb-4">What is the Sun? 🌟</h2>
          <div className="space-y-3 text-white/70 font-semibold">
            <p>The Sun is a <span className="text-yellow-300">STAR</span> — a giant ball of hot gas! It sits at the center of our Solar System and everything orbits (goes around) it.</p>
            <p>The Sun makes energy through a process called <span className="text-yellow-300">nuclear fusion</span> — where tiny atoms (hydrogen) smash together to make new atoms (helium) and release HUGE amounts of energy as light and heat!</p>
            <p>Without the Sun, there would be no life on Earth. Plants need sunlight to make food, and all animals (including us!) depend on plants for energy.</p>
          </div>
        </div>

        {/* Layers */}
        <div className="glass-card rounded-3xl p-6 mb-8">
          <h2 className="font-display text-3xl text-white mb-6">Layers of the Sun 🧅</h2>
          <div className="space-y-3">
            {sunLayers.map((layer, i) => (
              <div key={layer.name} className="flex items-start gap-4 bg-white/5 rounded-xl p-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{ background: layer.color, color: '#000' }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1" style={{ color: layer.color }}>{layer.name}</h3>
                  <p className="text-white/60 text-sm font-semibold">{layer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why is the Sun important? */}
        <div className="glass-card rounded-3xl p-6 mb-8">
          <h2 className="font-display text-3xl text-white mb-5">Why is the Sun Important? 💡</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '🌱', title: 'Plants grow', desc: 'Sunlight helps plants make food through photosynthesis.' },
              { icon: '🌊', title: 'Weather happens', desc: 'Sun heats the air and water, creating wind and rain.' },
              { icon: '🌡️', title: 'Keeps us warm', desc: 'Without the Sun, Earth would be -270°C — way too cold!' },
              { icon: '⚡', title: 'Solar energy', desc: 'We can use solar panels to turn sunlight into electricity!' },
            ].map(item => (
              <div key={item.title} className="bg-white/5 rounded-xl p-4">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h4 className="font-bold text-yellow-300 mb-1">{item.title}</h4>
                <p className="text-white/60 text-sm font-semibold">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cool facts */}
        <div
          className="rounded-3xl p-6"
          style={{ background: 'linear-gradient(135deg, rgba(255,140,0,0.15), rgba(255,69,0,0.1))', border: '1px solid rgba(255,140,0,0.2)' }}
        >
          <h2 className="font-display text-3xl text-white mb-4">⭐ Sun's Amazing Facts</h2>
          <div className="space-y-2">
            {sunData.coolFacts.map((fact, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-yellow-400 font-bold">✦</span>
                <p className="text-white/80 font-semibold">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
