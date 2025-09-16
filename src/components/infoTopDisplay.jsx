/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useState, memo } from 'react'
import './StartingUI.css'

export default function InfoTopDisplay({ score }) {
  return (
    <div className="topContainer">
      <MenuUI />
      <TimeUI />
      <ScoreUI score={score} />
    </div>
  )
}

const TimeUI = memo(function TimeUI() {
  const [timer, setTimer] = useState(90)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(() => timer - 1)
    }, [1000])

    return () => {
      clearInterval(interval)
    }
  }, [timer])

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
