/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from 'react'
import './StartingUI.css'
import CardsUI from './CardsUI'
import InfoTopDisplay from './InfoTopDisplay'
import WinLoseAlert from './WinLoseAlert'

// localStorage.clear()

export default function StartingUI() {
  const winningScore = useRef(3)
  const totalTime = useRef(3)
  const [score, setScore] = useState(0)
  const [gameWin, setGameWin] = useState(null)
  const [gamePlaying, setGamePlaying] = useState(null)

  function beginGame() {
    setGamePlaying(true)
  }

  function handleScore() {
    setScore((score) => score + 1)
  }

  function activateGameLoss() {
    setGamePlaying(false)
    setTimeout(() => setGameWin(false), 500)
  }

  function activateGameWin() {
    setGamePlaying(false)
    setTimeout(() => setGameWin(true), 500)
  }

  useEffect(() => {
    if (score === winningScore.current) {
      activateGameWin()
    }
  })

  useEffect(() => {
    if (gamePlaying) {
      const timeOutId = setTimeout(() => {
        activateGameLoss()
      }, [(totalTime.current + 1) * 1000])
      return () => {
        clearTimeout(timeOutId)
      }
    }
  })

  if (gamePlaying === null) {
    return <GameInfoUI beginGame={beginGame} />
  } else {
    return (
      <>
        <WinLoseAlert gameWin={gameWin} />
        <InfoTopDisplay
          totalTime={totalTime.current}
          score={score}
          gamePlaying={gamePlaying}
          gameWin={gameWin}
        />
        <CardsUI
          winningScore={winningScore.current}
          score={score}
          handleScore={handleScore}
          gamePlaying={gamePlaying}
          activateGameLoss={activateGameLoss}
        />
      </>
    )
  }
}

function GameInfoUI({ beginGame }) {
  return (
    <div className="gameInfoContainer">
      <p>Time: 60 seconds</p>
      <p>Tap the cards &quot;Zip, Zap, Zop&quot; in a row.</p>
      <p>Gain 20 scores to win level.</p>

      <button onClick={beginGame}>Play Game</button>
    </div>
  )
}
