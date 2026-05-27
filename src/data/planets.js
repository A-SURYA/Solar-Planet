export const planets = [
  {
    id: 'mercury',
    name: 'Mercury',
    emoji: '🪨',
    color: '#B5B5B5',
    glowColor: '#d0d0d0',
    bgGradient: 'from-gray-600 to-gray-400',
    size: 'Tiny (4,879 km wide)',
    distanceFromSun: '57.9 million km',
    dayLength: '59 Earth days',
    yearLength: '88 Earth days',
    moons: 0,
    temperature: '-180°C to 430°C',
    type: 'Rocky Planet',
    funFact: 'Mercury has NO atmosphere, so it gets super hot during the day and freezing cold at night!',
    description: 'Mercury is the smallest planet and closest to the Sun. It looks like our Moon with lots of craters. Even though it\'s closest to the Sun, it\'s NOT the hottest planet!',
    coolFacts: [
      'Smallest planet in the solar system',
      'Has no atmosphere or weather',
      'A day on Mercury is longer than its year!',
      'Full of craters like our Moon',
      'Has ice in shadowy craters near its poles'
    ],
    order: 1
  },
  {
    id: 'venus',
    name: 'Venus',
    emoji: '☁️',
    color: '#E8C97A',
    glowColor: '#f0d890',
    bgGradient: 'from-yellow-600 to-orange-400',
    size: 'Similar to Earth (12,104 km wide)',
    distanceFromSun: '108.2 million km',
    dayLength: '243 Earth days',
    yearLength: '225 Earth days',
    moons: 0,
    temperature: '465°C (super hot!)',
    type: 'Rocky Planet',
    funFact: 'Venus spins backwards! If you were on Venus, the Sun would rise in the west and set in the east!',
    description: 'Venus is the HOTTEST planet, even hotter than Mercury! It\'s covered in thick yellow clouds of acid. It\'s sometimes called Earth\'s twin because they\'re similar in size.',
    coolFacts: [
      'Hottest planet in the solar system',
      'Spins in the opposite direction to most planets',
      'Covered in volcanic mountains',
      'Has thick poisonous clouds',
      'Brightest object in night sky after the Moon'
    ],
    order: 2
  },
  {
    id: 'earth',
    name: 'Earth',
    emoji: '🌍',
    color: '#4A90E2',
    glowColor: '#6aade8',
    bgGradient: 'from-blue-600 to-green-500',
    size: '12,756 km wide',
    distanceFromSun: '149.6 million km',
    dayLength: '24 hours',
    yearLength: '365.25 days',
    moons: 1,
    temperature: '-88°C to 58°C',
    type: 'Rocky Planet',
    funFact: 'Earth is the only known planet with life! About 71% of Earth\'s surface is covered in water.',
    description: 'Our home! Earth is the only planet we know of that has life on it. It has liquid water, a perfect atmosphere with oxygen, and is just the right distance from the Sun — not too hot, not too cold!',
    coolFacts: [
      'Only known planet with life',
      '71% of surface is covered in water',
      'Has a protective magnetic field',
      'Home to over 8 million species of animals',
      'The Moon helps control our tides'
    ],
    order: 3
  },
  {
    id: 'mars',
    name: 'Mars',
    emoji: '🔴',
    color: '#C1440E',
    glowColor: '#e05020',
    bgGradient: 'from-red-700 to-orange-600',
    size: 'Half of Earth (6,779 km wide)',
    distanceFromSun: '227.9 million km',
    dayLength: '24 hours 37 minutes',
    yearLength: '687 Earth days',
    moons: 2,
    temperature: '-125°C to 20°C',
    type: 'Rocky Planet',
    funFact: 'Mars has the biggest volcano in the whole solar system — Olympus Mons. It\'s 3 times taller than Mount Everest!',
    description: 'The Red Planet! Mars gets its rusty-red color from iron oxide (rust) on its surface. Scientists are sending robots called rovers to explore Mars, and someday humans might visit!',
    coolFacts: [
      'Called the Red Planet due to rusty soil',
      'Has the tallest volcano in the solar system',
      'Has the longest canyon — Valles Marineris',
      'Has two tiny moons: Phobos and Deimos',
      'Robots called rovers are exploring it now!'
    ],
    order: 4
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    emoji: '🟠',
    color: '#C88B3A',
    glowColor: '#e0a040',
    bgGradient: 'from-orange-600 to-yellow-500',
    size: 'GIANT! (139,820 km wide)',
    distanceFromSun: '778.5 million km',
    dayLength: '10 hours',
    yearLength: '11.9 Earth years',
    moons: 95,
    temperature: '-145°C',
    type: 'Gas Giant',
    funFact: 'Jupiter\'s Great Red Spot is a storm that has been raging for over 350 years — and it\'s bigger than Earth!',
    description: 'The biggest planet! Jupiter is so huge that 1,300 Earths could fit inside it! It\'s a gas giant, meaning it has no solid surface — it\'s made of gas and liquid. It has a massive storm called the Great Red Spot.',
    coolFacts: [
      'Largest planet — 1,300 Earths fit inside!',
      'Has a storm bigger than Earth',
      'Has 95 known moons',
      'Acts as a shield protecting inner planets',
      'Famous moon Europa might have life!'
    ],
    order: 5
  },
  {
    id: 'saturn',
    name: 'Saturn',
    emoji: '🪐',
    color: '#E4D094',
    glowColor: '#f0e0a0',
    bgGradient: 'from-yellow-500 to-amber-400',
    size: 'Very big! (116,460 km wide)',
    distanceFromSun: '1.43 billion km',
    dayLength: '10.7 hours',
    yearLength: '29.5 Earth years',
    moons: 146,
    temperature: '-178°C',
    type: 'Gas Giant',
    funFact: 'Saturn is so light it could actually float on water! It\'s the least dense planet in our solar system.',
    description: 'Famous for its beautiful rings! Saturn\'s rings are made of billions of pieces of ice and rock. Some are tiny as dust, others as big as a house. Saturn is a gas giant and could float on water!',
    coolFacts: [
      'Most beautiful rings in the solar system',
      'Rings are made of ice and rock',
      'Could float on water — very light!',
      'Has the most moons — 146!',
      'A day on Saturn is only 10.7 hours'
    ],
    order: 6
  },
  {
    id: 'uranus',
    name: 'Uranus',
    emoji: '🔵',
    color: '#7DE8E8',
    glowColor: '#90f0f0',
    bgGradient: 'from-cyan-500 to-teal-400',
    size: 'Big (50,724 km wide)',
    distanceFromSun: '2.87 billion km',
    dayLength: '17 hours 14 minutes',
    yearLength: '84 Earth years',
    moons: 27,
    temperature: '-224°C (coldest planet!)',
    type: 'Ice Giant',
    funFact: 'Uranus rolls around the Sun on its side! Its tilt is 98 degrees — like a ball rolling instead of spinning like a top.',
    description: 'The sideways planet! Uranus is tilted so much it rotates on its side. It\'s an ice giant with a blue-green color from methane gas. It\'s the coldest planet in our solar system.',
    coolFacts: [
      'Rotates on its side!',
      'Coldest planet in the solar system',
      'Blue-green color from methane gas',
      'Has 13 rings (but hard to see)',
      'Named after the Greek god of the sky'
    ],
    order: 7
  },
  {
    id: 'neptune',
    name: 'Neptune',
    emoji: '💙',
    color: '#4169E1',
    glowColor: '#6080f0',
    bgGradient: 'from-blue-700 to-indigo-600',
    size: 'Big (49,244 km wide)',
    distanceFromSun: '4.5 billion km',
    dayLength: '16 hours',
    yearLength: '165 Earth years',
    moons: 16,
    temperature: '-214°C',
    type: 'Ice Giant',
    funFact: 'Neptune has the strongest winds in the solar system — up to 2,100 km/h! That\'s faster than the speed of sound!',
    description: 'The farthest planet! Neptune is so far away it takes 165 Earth years to go around the Sun once. It has supersonic winds and a giant storm called the Great Dark Spot. It\'s a beautiful deep blue color.',
    coolFacts: [
      'Farthest planet from the Sun',
      'Has supersonic winds!',
      'Takes 165 years to orbit the Sun',
      'Has a giant storm like Jupiter',
      'Was discovered using math before being seen!'
    ],
    order: 8
  }
]

export const sunData = {
  name: 'The Sun',
  emoji: '☀️',
  color: '#FFD700',
  description: 'The Sun is our star — a giant ball of hot gas at the center of our solar system! Everything orbits around it. The Sun is so big that 1 million Earths could fit inside it.',
  funFact: 'The Sun is 4.6 billion years old and will keep shining for another 5 billion years!',
  coolFacts: [
    '1 million Earths could fit inside it',
    'Surface temperature: 5,500°C',
    'Core temperature: 15 million°C!',
    'Light takes 8 minutes to reach Earth',
    'Has been shining for 4.6 billion years'
  ]
}

export const quizQuestions = [
  {
    question: 'Which is the biggest planet in our solar system?',
    options: ['Saturn', 'Jupiter', 'Neptune', 'Uranus'],
    answer: 1,
    explanation: 'Jupiter is the biggest! 1,300 Earths could fit inside it!'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mercury', 'Mars', 'Neptune'],
    answer: 2,
    explanation: 'Mars is red because of rust (iron oxide) on its surface!'
  },
  {
    question: 'Which planet has beautiful rings around it?',
    options: ['Jupiter', 'Mars', 'Earth', 'Saturn'],
    answer: 3,
    explanation: 'Saturn has amazing rings made of billions of ice and rock pieces!'
  },
  {
    question: 'Which planet do WE live on?',
    options: ['Mars', 'Earth', 'Venus', 'Saturn'],
    answer: 1,
    explanation: 'We live on Earth — the only planet we know of with life!'
  },
  {
    question: 'Which planet is the hottest?',
    options: ['Mercury', 'Mars', 'Venus', 'Jupiter'],
    answer: 2,
    explanation: 'Venus is the hottest at 465°C because of its thick greenhouse atmosphere!'
  },
  {
    question: 'How many planets are in our solar system?',
    options: ['7', '9', '8', '10'],
    answer: 2,
    explanation: 'There are 8 planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune!'
  },
  {
    question: 'Which planet rotates on its side?',
    options: ['Saturn', 'Neptune', 'Mercury', 'Uranus'],
    answer: 3,
    explanation: 'Uranus is tilted 98 degrees and rolls around the Sun like a ball!'
  },
  {
    question: 'What is the center of our solar system?',
    options: ['The Moon', 'Earth', 'The Sun', 'Jupiter'],
    answer: 2,
    explanation: 'The Sun is at the center! All planets orbit around it.'
  }
]
