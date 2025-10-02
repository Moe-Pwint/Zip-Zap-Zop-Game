/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useState, useRef, memo } from 'react'
import './StartingUI.css'
import menu from '../assets/menu.svg'

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
        <div className="topLeftWrapper">
          <MenuUI />
          <TimeUI
            bestTime={bestTime.current}
            totalTime={totalTime}
            gamePlaying={gamePlaying}
            gameWin={gameWin}
            hasNewBestTime={hasNewBestTime}
          />
        </div>
        <div className="topRightWrapper">
          <ScoreUI score={score} />

          <BestTimeUI bestTime={bestTime.current} />
        </div>
      </div>
    </>
  )
}

const MenuUI = memo(function MenuUI() {
  return (
    <div className="menuContainer">
      <div className="menuBtn">
        <img src={menu} alt="" />
      </div>
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
      <p>Time Passed: {timer} secs</p>
    </div>
  )
})

const ScoreUI = memo(function ScoreUI({ score }) {
  console.log('score updated')
  return (
    <div className="scoreContainer">
      <p>Score: {score}</p>
    </div>
  )
})

const BestTimeUI = memo(function BestTimeUI({ bestTime }) {
  return (
    <div className="bestTimeContainer">
      <p>Best Time: {bestTime} secs </p>
    </div>
  )
})
