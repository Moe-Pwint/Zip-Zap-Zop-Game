/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useState } from 'react'
import './StartingUI.css'
import CardsUI from './CardsUI'
import InfoTopDisplay from './infoTopDisplay'

export default function StartingUI() {
  const [score, setScore] = useState(0)
  const [gameWin, setGameWin] = useState(null)
  const [gamePlaying, setGamePlaying] = useState(true)
  function handleScore() {
    setScore((score) => score + 1)
  }

  function activateGameLoss() {
    setGameWin(false)
    setGamePlaying(false)
  }

  function activateGameWin() {
    setGameWin(true)
    setGamePlaying(false)
  }

  useEffect(() => {
    if (score === 6) {
      activateGameWin()
    }
  })

  return (
    <>
      {gameWin && <WinAlert />}
      {gameWin === false && <LossAlert />}
      <InfoTopDisplay score={score} />
      <CardsUI
        score={score}
        handleScore={handleScore}
        gamePlaying={gamePlaying}
        activateGameLoss={activateGameLoss}
      />
    </>
  )
}

function WinAlert() {
  console.log('winAlert')
  return (
    <div className="winAlert">
      <div>You Win!</div>
    </div>
  )
}

function LossAlert() {
  console.log('lossAlert')
  return (
    <div className="lossAlert">
      <div>GAME OVER</div>
    </div>
  )
}
