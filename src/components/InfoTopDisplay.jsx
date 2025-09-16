/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useState, memo } from 'react'
import './StartingUI.css'

export default function InfoTopDisplay({ totalTime, score, gamePlaying }) {
  return (
    <div className="topContainer">
      <MenuUI />
      <TimeUI totalTime={totalTime} gamePlaying={gamePlaying} />
      <ScoreUI score={score} />
    </div>
  )
}

const TimeUI = memo(function TimeUI({ totalTime, gamePlaying }) {
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

const MenuUI = memo(function MenuUI() {
  return (
    <div className="menuContainer">
      <button className="menuBtn">Menu</button>
    </div>
  )
})
