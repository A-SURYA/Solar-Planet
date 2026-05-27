import { useState } from 'react'
import Stars from '../components/Stars'
import { planets } from '../data/planets'

const categories = [
  {
    id: 'mind-blowing',
    label: '🤯 Mind-Blowing',
    facts: [
      { fact: 'The Sun is so massive that 1 million Earths could fit inside it!', emoji: '☀️' },
      { fact: 'Light from the Sun takes 8 minutes to reach Earth — but 5.5 hours to reach Neptune!', emoji: '💡' },
      { fact: 'Space is completely silent because there is no air to carry sound waves.', emoji: '🔇' },
      { fact: 'One day on Venus is longer than one year on Venus!', emoji: '⏰' },
      { fact: 'Jupiter is so big that all other planets could fit inside it!', emoji: '🪐' },
      { fact: 'There are more stars in the universe than grains of sand on all Earth\'s beaches!', emoji: '⭐' },
    ]
  },
  {
    id: 'temperature',
    label: '🌡️ Hot & Cold',
    facts: [
      { fact: 'The surface of the Sun is 5,500°C — hot enough to melt ANY metal!', emoji: '🔥' },
      { fact: 'Uranus is the coldest planet at -224°C, even colder than Neptune!', emoji: '🧊' },
      { fact: 'Venus is hotter than Mercury even though Mercury is closer to the Sun.', emoji: '♨️' },
      { fact: 'The Sun\'s core reaches 15 million degrees Celsius!', emoji: '⚡' },
      { fact: 'Mars nights can get as cold as -125°C — that\'s much colder than any place on Earth!', emoji: '🌙' },
    ]
  },
  {
    id: 'records',
    label: '🏆 Space Records',
    facts: [
      { fact: 'Jupiter\'s storm (Great Red Spot) has been going for over 350 years!', emoji: '🌀' },
      { fact: 'Neptune has the fastest winds — up to 2,100 km/h (faster than sound)!', emoji: '💨' },
      { fact: 'Olympus Mons on Mars is the biggest volcano in the solar system — 3x taller than Everest!', emoji: '🌋' },
      { fact: 'Saturn could float on water because it\'s less dense than water!', emoji: '🛁' },
      { fact: 'Mercury has the most extreme temperature changes of any planet.', emoji: '📊' },
      { fact: 'Saturn has the most moons with 146 known moons!', emoji: '🌙' },
    ]
  },
  {
    id: 'weird',
    label: '😜 Super Weird',
    facts: [
      { fact: 'Uranus rotates completely on its side — it rolls around the Sun like a bowling ball!', emoji: '🎳' },
      { fact: 'Venus spins backwards — so the Sun rises in the west there!', emoji: '🔄' },
      { fact: 'There might be a "diamond rain" inside Neptune and Uranus!', emoji: '💎' },
      { fact: 'A year on Mercury is only 88 Earth days but a day is 59 Earth days!', emoji: '🗓️' },
      { fact: 'Saturn\'s rings are only about 30 meters thick — very thin for how wide they are!', emoji: '💍' },
    ]
  },
  {
    id: 'exploration',
    label: '🚀 Space Exploration',
    facts: [
      { fact: 'Humans first landed on the Moon on July 20, 1969 — over 50 years ago!', emoji: '👨‍🚀' },
      { fact: 'NASA\'s Voyager 1 launched in 1977 and is now in interstellar space!', emoji: '🛸' },
      { fact: 'Mars has rovers on it right now — Perseverance is exploring it!', emoji: '🤖' },
      { fact: 'The James Webb Space Telescope can see galaxies 13 billion light years away!', emoji: '🔭' },
      { fact: 'Scientists are planning to send humans to Mars in the 2030s!', emoji: '🏕️' },
    ]
  }
]

export default function Facts() {
  const [activeCategory, setActiveCategory] = useState('mind-blowing')
  const [revealed, setRevealed] = useState(new Set())

  const currentCat = categories.find(c => c.id === activeCategory)

  const toggleReveal = (idx) => {
    setRevealed(prev => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx)
      else next.add(idx)
      return next
    })
  }

  return (
    <div className="min-h-screen starfield relative">
      <Stars />

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-28 pb-16">
        <div className="text-center mb-10">
          <h1 className="font-display text-6xl text-white mb-3">Fun Facts! ✨</h1>
          <p className="text-white/60 font-semibold text-lg">
            Wow your friends and family with these amazing space facts!
          </p>
        </div>

        {/* Planet fun facts */}
        <div className="glass-card rounded-3xl p-6 mb-10">
          <h2 className="font-display text-3xl text-white mb-5">🪐 One Amazing Fact Per Planet</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {planets.map(planet => (
              <div
                key={planet.id}
                className="bg-white/5 rounded-2xl p-4 flex items-start gap-3 hover:bg-white/10 transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 mt-0.5"
                  style={{
                    background: `radial-gradient(circle at 35% 35%, ${planet.glowColor}, ${planet.color})`,
                  }}
                >
                  {planet.emoji}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{planet.name}</h4>
                  <p className="text-white/60 text-sm font-semibold">{planet.funFact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category tabs */}
        <h2 className="font-display text-3xl text-white mb-5 text-center">🌟 More Space Facts</h2>
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setRevealed(new Set()) }}
              className={`px-4 py-2 rounded-full font-bold text-sm transition-all border ${
                activeCategory === cat.id
                  ? 'bg-purple-600 border-purple-500 text-white'
                  : 'glass-card border-white/10 text-white/60 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Facts for current category */}
        <div className="space-y-3">
          {currentCat.facts.map((item, i) => (
            <button
              key={i}
              onClick={() => toggleReveal(i)}
              className="w-full text-left glass-card rounded-2xl p-5 flex items-start gap-4 hover:border-white/20 border border-white/10 transition-all"
            >
              <span className="text-3xl flex-shrink-0 mt-0.5">{item.emoji}</span>
              <div className="flex-1">
                <p className={`font-semibold text-lg transition-all ${revealed.has(i) ? 'text-white' : 'text-white/80'}`}>
                  {item.fact}
                </p>
                {revealed.has(i) && (
                  <p className="text-purple-400 text-sm mt-1 font-bold animate-slide-in">
                    ✨ Cool, right? Click to hide
                  </p>
                )}
              </div>
              <span className="text-white/30 text-xl ml-2">{revealed.has(i) ? '−' : '+'}</span>
            </button>
          ))}
        </div>

        {/* Share your knowledge */}
        <div
          className="mt-12 rounded-3xl p-8 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(123,47,190,0.3), rgba(255,107,157,0.2))', border: '1px solid rgba(123,47,190,0.3)' }}
        >
          <div className="text-6xl mb-4">🎓</div>
          <h2 className="font-display text-4xl text-white mb-3">You\'re a Space Expert!</h2>
          <p className="text-white/70 font-semibold text-lg max-w-md mx-auto">
            Now go share these amazing facts with your friends, family, and classmates!
            Space is incredible and there\'s always more to discover! 🚀
          </p>
        </div>
      </div>
    </div>
  )
}
