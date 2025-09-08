/* eslint-disable react/prop-types */
import React from 'react'
// import React, { useState } from 'react'
import './StartingUI.css'

export default function StartingUI({
  currentScore,
  bestScore,
  gameTimer,
  roundTimer,
}) {
  return (
    <>
      <div className="topContainer">
        <MenuUI />
        <GameTimeUI gameTimer={gameTimer} />
        <ScoreUI currentScore={currentScore} bestScore={bestScore} />
      </div>

      <RoundTimeUI roundTimer={roundTimer} />
      <div className="cardsContainer">
        <Zip />
        <Zap />
        <Zop />
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

function ScoreUI({ currentScore, bestScore }) {
  return (
    <div className="scoreContainer">
      <p>Current score: {currentScore}</p>
      <p>Best score: {bestScore}</p>
    </div>
  )
}

function GameTimeUI({ gameTimer }) {
  return (
    <div className="gameTimeContainer">
      <p>Game ends in: {gameTimer}</p>
    </div>
  )
}

function RoundTimeUI({ roundTimer }) {
  return (
    <div className="roundTimeContainer">
      <p>{roundTimer}</p>
    </div>
  )
}

function Zip() {
  return (
    <button className="zipCard card">
      <p>ZIP</p>
    </button>
  )
}

function Zap() {
  return (
    <button className="zapCard card">
      <p>ZAP</p>
    </button>
  )
}

function Zop() {
  return (
    <button className="zopCard card">
      <p>ZOP</p>
    </button>
  )
}
