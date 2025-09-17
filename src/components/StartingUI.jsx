/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from 'react'
import './StartingUI.css'
import CardsUI from './CardsUI'
import InfoTopDisplay from './InfoTopDisplay'
import WinLoseAlert from './WinLoseAlert'

export default function StartingUI() {
  const winningScore = useRef(3)
  const totalTime = useRef(3)
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
