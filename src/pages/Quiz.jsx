import { useState } from 'react'
import Stars from '../components/Stars'
import { quizQuestions } from '../data/planets'

export default function Quiz() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [answers, setAnswers] = useState([])

  const question = quizQuestions[current]

  const handleSelect = (idx) => {
    if (selected !== null) return
    setSelected(idx)
    const correct = idx === question.answer
    if (correct) setScore(s => s + 1)
    setAnswers(a => [...a, { correct, selected: idx, answer: question.answer }])
  }

  const handleNext = () => {
    if (current + 1 >= quizQuestions.length) {
      setFinished(true)
    } else {
      setCurrent(c => c + 1)
      setSelected(null)
    }
  }

  const handleRestart = () => {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
    setAnswers([])
  }

  const percentage = Math.round((score / quizQuestions.length) * 100)

  const getResult = () => {
    if (percentage === 100) return { emoji: '🏆', msg: 'PERFECT! You\'re a space genius!', color: 'text-yellow-300' }
    if (percentage >= 75) return { emoji: '🌟', msg: 'Amazing! You know so much about space!', color: 'text-green-400' }
    if (percentage >= 50) return { emoji: '🚀', msg: 'Good job! Keep learning about space!', color: 'text-blue-400' }
    return { emoji: '🔭', msg: 'Keep exploring — you\'ll get better!', color: 'text-pink-400' }
  }

  if (finished) {
    const result = getResult()
    return (
      <div className="min-h-screen starfield relative flex items-center justify-center">
        <Stars />
        <div className="relative z-10 max-w-lg mx-auto px-4 text-center animate-slide-in">
          <div className="text-8xl mb-6 animate-float">{result.emoji}</div>
          <div className="glass-card rounded-3xl p-8">
            <h1 className="font-display text-5xl text-white mb-3">Quiz Complete! 🎉</h1>
            <p className={`font-bold text-2xl mb-6 ${result.color}`}>{result.msg}</p>

            <div className="mb-8">
              <div
                className="w-36 h-36 mx-auto rounded-full flex items-center justify-center mb-3"
                style={{
                  background: `conic-gradient(#7B2FBE ${percentage * 3.6}deg, rgba(255,255,255,0.1) 0deg)`,
                  padding: '6px',
                }}
              >
                <div className="w-full h-full rounded-full glass-card flex flex-col items-center justify-center">
                  <span className="font-display text-4xl text-white">{score}</span>
                  <span className="text-white/50 text-sm font-semibold">/ {quizQuestions.length}</span>
                </div>
              </div>
              <p className="text-white/60 font-bold text-lg">{percentage}% correct!</p>
            </div>

            {/* Review answers */}
            <div className="space-y-2 mb-8 text-left">
              {quizQuestions.map((q, i) => (
                <div key={i} className={`flex items-center gap-3 rounded-xl p-3 ${answers[i]?.correct ? 'bg-green-900/20' : 'bg-red-900/20'}`}>
                  <span className="text-lg">{answers[i]?.correct ? '✅' : '❌'}</span>
                  <span className="text-white/70 text-sm font-semibold flex-1">{q.question}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleRestart}
              className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-lg rounded-2xl transition-all hover:scale-105"
            >
              🔄 Try Again!
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen starfield relative">
      <Stars />

      <div className="relative z-10 max-w-2xl mx-auto px-4 pt-28 pb-16">
        <div className="text-center mb-8">
          <h1 className="font-display text-5xl text-white mb-2">Space Quiz! 🎯</h1>
          <p className="text-white/60 font-semibold">Test your solar system knowledge!</p>
        </div>

        {/* Progress */}
        <div className="glass-card rounded-2xl p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/60 text-sm font-bold">Question {current + 1} of {quizQuestions.length}</span>
            <span className="text-yellow-300 font-bold">⭐ Score: {score}</span>
          </div>
          <div className="h-3 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${((current) / quizQuestions.length) * 100}%`,
                background: 'linear-gradient(90deg, #7B2FBE, #FF6B9D)',
              }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="glass-card rounded-3xl p-8 mb-4 animate-slide-in">
          <div className="text-6xl mb-4 text-center animate-float">🌌</div>
          <h2 className="font-display text-3xl text-white text-center mb-8 leading-tight">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((opt, i) => {
              let cls = 'quiz-option glass-card border border-white/10'
              if (selected !== null) {
                if (i === question.answer) cls += ' correct'
                else if (i === selected && i !== question.answer) cls += ' wrong'
              }
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={selected !== null}
                  className={`${cls} w-full text-left p-4 rounded-2xl flex items-center gap-3 transition-all`}
                >
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                    style={{ background: 'rgba(123,47,190,0.3)', color: '#c084fc' }}
                  >
                    {['A', 'B', 'C', 'D'][i]}
                  </span>
                  <span className="text-white font-semibold text-lg">{opt}</span>
                  {selected !== null && i === question.answer && (
                    <span className="ml-auto text-green-400 text-xl">✓</span>
                  )}
                  {selected !== null && i === selected && i !== question.answer && (
                    <span className="ml-auto text-red-400 text-xl">✗</span>
                  )}
                </button>
              )
            })}
          </div>

          {/* Explanation */}
          {selected !== null && (
            <div className="mt-5 fact-badge rounded-2xl p-4 animate-slide-in">
              <p className="text-yellow-300 font-bold mb-1">
                {selected === question.answer ? '🎉 Correct!' : '😅 Not quite...'}
              </p>
              <p className="text-white/80 font-semibold">{question.explanation}</p>
            </div>
          )}
        </div>

        {selected !== null && (
          <button
            onClick={handleNext}
            className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xl rounded-2xl transition-all hover:scale-105 animate-slide-in"
          >
            {current + 1 >= quizQuestions.length ? '🏆 See Results!' : 'Next Question →'}
          </button>
        )}
      </div>
    </div>
  )
}
