import StartingUI from './StartingUI.jsx'
import { useEffect, useState } from 'react'
import React from 'react'
import Cards from './Cards'

export default function LevelZ() {
  //winning conditions = reach winningScore before timeout
  //losing conditions = timeout, falseCard
  //When won,  stop score, disable cards, stop timer, update best time
  //When lose, stop score, disable cards, stop timer
  const allotedTime = 20
  const winningScore = 3
  const [score, setScore] = useState(0)
  const [gameTimer, setGameTimer] = useState(allotedTime)
  const [bestTime, setBestTime] = useState(0)
  const [playing, setPlaying] = useState(false)

  function gameWin() {
    console.log('You Won!')
    stopGame()
    handleBestTime()
  }

  function handleBestTime() {
    if (gameTimer > bestTime) {
      setBestTime(allotedTime - gameTimer)
    }
  }

  function gameLose() {
    console.log('You Lost!')
    stopGame()
  }

  function incrementScore() {
    if (playing === true) {
      const newScore = score + 1
      setScore(newScore)
      checkWinningScore(newScore)
    }
  }

  function checkWinningScore(score) {
    if (score === winningScore) {
      gameWin()
    }
  }

  function checkLosingTimeout() {
    if (gameTimer === 0) {
      gameLose()
    }
  }

  function startGame() {
    // setGameTimer(allotedTime)
    setPlaying(true)
  }

  function stopGame() {
    setPlaying(false)
  }

  useEffect(() => {
    if (playing === true) {
      const timer = setInterval(() => {
        setGameTimer((gameTimer) => gameTimer - 1)
      }, 1000)

      checkLosingTimeout(gameTimer)

      if (playing === false) {
        clearInterval(timer)
      }

      return () => {
        clearInterval(timer)
      }
    }
  }, [playing, gameTimer])

  return (
    <>
      <StartingUI gameTimer={gameTimer} score={score} bestTime={bestTime} />
      <button onClick={startGame}> Play </button>
      <Cards
        gameLose={gameLose}
        incrementScore={incrementScore}
        playing={playing}
        stopGame={stopGame}
      />
    </>
  )
}
