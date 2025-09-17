/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useState, useRef, memo } from 'react'
import './StartingUI.css'

export default function InfoTopDisplay({
  totalTime,
  score,
  gamePlaying,
  gameWin,
  hasNewBestTime,
}) {
  if (localStorage.getItem('bestTime') === null) {
    localStorage.setItem('bestTime', totalTime)
  }
  const bestTime = useRef(localStorage.getItem('bestTime'))

  return (
    <>
      <div className="topContainer">
        <MenuUI />
        <TimeUI
          bestTime={bestTime.current}
          totalTime={totalTime}
          gamePlaying={gamePlaying}
          gameWin={gameWin}
          hasNewBestTime={hasNewBestTime}
        />
        <ScoreUI score={score} />
      </div>
      <BestTimeUI bestTime={bestTime.current} />
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
  bestTime,
  totalTime,
  gamePlaying,
  gameWin,
  hasNewBestTime,
}) {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    if (gamePlaying && timer < totalTime) {
      const interval = setInterval(() => {
        setTimer(() => timer + 1)
      }, [1000])

      return () => {
        clearInterval(interval)
      }
    }
  }, [gamePlaying, timer])

  function updateNewTime() {
    if (timer < bestTime) {
      localStorage.setItem('bestTime', timer)
      hasNewBestTime()
    }
  }

  useEffect(() => {
    if (gamePlaying === false && gameWin) {
      updateNewTime()
    }
  })

  return (
    <div className="gameTimeContainer">
      <p>Time Passed: {timer} seconds</p>
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
