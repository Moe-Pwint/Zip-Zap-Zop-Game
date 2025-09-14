/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import './StartingUI.css'

export default function StartingUI() {
  const [score, setScore] = useState(0)
  const [gameWin, setGameWin] = useState(null)

  function handleScore() {
    setScore((score) => score + 1)
  }

  useEffect(() => {
    if (score === 6) {
      setGameWin(true)
    }
  })

  return (
    <>
      {gameWin && <WinAlert />}
      <ScoreUI score={score} />
      <Cards score={score} handleScore={handleScore} />
    </>
  )
}

function WinAlert() {
  console.log('winAlert')
  return (
    <div>
      <div>You Win!</div>
    </div>
  )
}

function ScoreUI({ score }) {
  console.log('score updated')
  return <div>Score: {score}</div>
}

function Cards({ score, handleScore }) {
  const arraySeq = useRef(['zip', 'zap', 'zop'])
  const [correctCard, setCorrectCard] = useState('zip')

  function shuffle(array) {
    const arrayCopy = [...array]
    for (let i = arrayCopy.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let k = arrayCopy[i]
      arrayCopy[i] = arrayCopy[j]
      arrayCopy[j] = k
    }
    return arrayCopy
  }

  function checkCardClick(e) {
    if (e.target.classList.contains('false')) {
      alert('Game Over')
    } else {
      handleScore()
      createNextCards()
    }
  }

  function createNextCards() {
    if (score !== 6) {
      assignCorrectCard()
    }
  }

  function assignCorrectCard() {
    if (correctCard === 'zip') {
      setCorrectCard('zap')
    } else if (correctCard === 'zap') {
      setCorrectCard('zop')
    } else if (correctCard === 'zop') {
      setCorrectCard('zip')
    }
  }

  const cards = shuffle(arraySeq.current).map((card) => (
    <button
      key={card}
      onClick={checkCardClick}
      className={`${card} ${card === correctCard ? 'true' : 'false'}`}
    >
      {card}
    </button>
  ))
  console.log('card created')

  return <>{cards}</>
}
