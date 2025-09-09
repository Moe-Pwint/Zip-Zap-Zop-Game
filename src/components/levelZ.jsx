import StartingUI from './StartingUI.jsx'
import { useEffect, useState } from 'react'
import React from 'react'
import Cards from './Cards'

export default function LevelZ() {
  const [score, setScore] = useState(0)
  const [gameTimer, setGameTimer] = useState(10)
  const [bestTime, setBestTime] = useState(0)
  // const [gameWin, setGameWin] = useState(false)
  // const [gameLose, setGameLose] = useState(false)

  function gameWin() {
    console.log('You Won!')
    handleBestTime()
  }

  function gameLose() {
    console.log('You Lost!')
  }

  function incrementScore() {
    setScore((score) => score + 1)
    if (score === 2) {
      gameWin()
    }
  }

  function handleBestTime() {
    if (gameTimer > bestTime) {
      setBestTime(gameTimer)
    }
  }

  useEffect(() => {
    if (gameTimer > 0 && score < 3) {
      const timer = setInterval(() => {
        setGameTimer((gameTimer) => gameTimer - 1)
      }, 1000)

      return () => {
        clearInterval(timer)
      }
    }
    if (gameTimer === 0) {
      gameLose()
    }
  }, [gameTimer])

  return (
    <>
      <StartingUI gameTimer={gameTimer} score={score} bestTime={bestTime} />
      <Cards handleFalseCard={gameLose} incrementScore={incrementScore} />
    </>
  )
}
