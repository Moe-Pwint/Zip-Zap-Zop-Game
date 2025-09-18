/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from 'react'
import './StartingUI.css'
import CardsUI from './CardsUI'
import InfoTopDisplay from './InfoTopDisplay'
import WinLoseAlert from './WinLoseAlert'

// localStorage.clear()

export default function StartingUI() {
  const winningScore = useRef(21)
  const totalTime = useRef(60)
  const [score, setScore] = useState(0)
  const [gameWin, setGameWin] = useState(null)
  const [gamePlaying, setGamePlaying] = useState(null)
  const [timeOutLoss, setTimeOutLoss] = useState(null)
  const [wrongCardLoss, setWrongCardLoss] = useState(null)
  const [newBestTime, setHasNewBestTime] = useState(null)

  function beginGame() {
    setGamePlaying(true)
  }

  function handleScore() {
    setScore((score) => score + 1)
  }

  function handleWrongCardLoss() {
    setWrongCardLoss(true)
    activateGameLoss()
  }

  function activateGameLoss() {
    setGamePlaying(false)
    setGameWin(false)
  }

  function activateGameWin() {
    setGamePlaying(false)
    setGameWin(true)
  }

  function hasNewBestTime() {
    setHasNewBestTime(true)
  }

  useEffect(() => {
    if (score === winningScore.current) {
      activateGameWin()
    }
  })

  useEffect(() => {
    if (gamePlaying) {
      const timeOutId = setTimeout(() => {
        setTimeOutLoss(true)
        activateGameLoss()
      }, [(totalTime.current + 1) * 1000])
      return () => {
        clearTimeout(timeOutId)
      }
    }
  })

  return (
    <>
      {gamePlaying === null && <GameInfoUI beginGame={beginGame} />}
      <WinLoseAlert
        gameWin={gameWin}
        timeOutLoss={timeOutLoss}
        wrongCardLoss={wrongCardLoss}
        newBestTime={newBestTime}
      />
      <InfoTopDisplay
        totalTime={totalTime.current}
        score={score}
        gamePlaying={gamePlaying}
        gameWin={gameWin}
        hasNewBestTime={hasNewBestTime}
      />
      <CardsUI
        winningScore={winningScore.current}
        score={score}
        handleScore={handleScore}
        gamePlaying={gamePlaying}
        handleWrongCardLoss={handleWrongCardLoss}
      />
    </>
  )
}

function GameInfoUI({ beginGame }) {
  return (
    <div className="gameInfoContainer">
      <p>Time: 60 seconds</p>
      <p>Tap the cards &quot;Zip, Zap, Zop&quot; in a row.</p>
      <p>Gain 21 scores to win level.</p>

      <button onClick={beginGame}>Play Game</button>
    </div>
  )
}
