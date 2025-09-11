/* eslint-disable react/prop-types */
import React from 'react'
import './StartingUI.css'

export default function StartingUI({ gameTimer, score, bestTime }) {
  return (
    <>
      <div className="topContainer">
        <MenuUI />
        <GameTimeUI gameTimer={gameTimer} />
        <div>
          <ScoreUI score={score} />
          <BestTimeUI bestTime={bestTime} />
        </div>
      </div>
    </>
  )
}

function MenuUI() {
  return (
    <div className="menuContainer">
      <button className="menuBtn">Menu</button>
    </div>
  )
}

function GameTimeUI({ gameTimer }) {
  return (
    <div className="gameTimeContainer">
      <p>Game ends in: {gameTimer} seconds</p>
    </div>
  )
}

function ScoreUI({ score }) {
  return (
    <div className="scoreContainer">
      <p>Score: {score}</p>
    </div>
  )
}

function BestTimeUI({ bestTime }) {
  return (
    <div className="scoreContainer">
      <p>Best Time: {bestTime} seconds</p>
    </div>
  )
}
