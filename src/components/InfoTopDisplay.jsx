/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useState, memo } from 'react'
import './StartingUI.css'

export default function InfoTopDisplay({
  totalTime,
  score,
  gamePlaying,
  gameWin,
}) {
  const [bestTime, setBestTime] = useState(localStorage.getItem('bestTime'))

  function updateBestTime(newTime) {
    if (newTime < localStorage.getItem('bestTime')) {
      setBestTime(newTime)
      localStorage.setItem('bestTime', newTime)
    }
  }

  return (
    <>
      <div className="topContainer">
        <MenuUI />
        <TimeUI
          updateBestTime={updateBestTime}
          totalTime={totalTime}
          gamePlaying={gamePlaying}
          gameWin={gameWin}
        />
        <ScoreUI score={score} />
      </div>
      <BestTimeUI bestTime={bestTime} />
    </>
  )
}

const MenuUI = memo(function MenuUI() {
  return (
    <div className="menuContainer">
      <button className="menuBtn">Menu</button>
    </div>
  )
})

const TimeUI = memo(function TimeUI({
  updateBestTime,
  totalTime,
  gamePlaying,
  gameWin,
}) {
  const [timer, setTimer] = useState(totalTime)

  useEffect(() => {
    if (gamePlaying && timer > 0) {
      const interval = setInterval(() => {
        setTimer(() => timer - 1)
      }, [1000])

      return () => {
        clearInterval(interval)
      }
    }
  }, [gamePlaying, timer])

  useEffect(() => {
    if (gamePlaying === false && gameWin) {
      updateBestTime(totalTime - timer)
    }
  })

  return (
    <div className="gameTimeContainer">
      <p>Timer: {timer} seconds</p>
    </div>
  )
})

const ScoreUI = memo(function ScoreUI({ score }) {
  console.log('score updated')
  return (
    <div className="scoreContainer">
      <div>Score: {score}</div>
    </div>
  )
})

const BestTimeUI = memo(function BestTimeUI({ bestTime }) {
  return (
    <div className="bestTimeContainer">
      <p>Best Time: {bestTime} seconds </p>
    </div>
  )
})
