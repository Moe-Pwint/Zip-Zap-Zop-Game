import { useEffect, useState } from 'react'
import React from 'react'
import './App.css'
import StartingUI from './components/StartingUI.jsx'

function App() {
  const [levelZ, setLevelZ] = useState({
    bestScore: 0,
    currentScore: 0,
  })

  const [gameTimer, setGameTimer] = useState(10)
  const [roundTimer, setRoundTimer] = useState(5)

  useEffect(() => {
    if (gameTimer > 0) {
      const timer = setInterval(() => {
        setGameTimer((gameTimer) => gameTimer - 1)
      }, 1000)

      return () => {
        clearInterval(timer)
      }
    }
  }, [gameTimer])

  return (
    <>
      <StartingUI
        currentScore={levelZ.currentScore}
        bestScore={levelZ.bestScore}
        gameTimer={gameTimer}
        roundTimer={roundTimer}
      />
    </>
  )
}

export default App
