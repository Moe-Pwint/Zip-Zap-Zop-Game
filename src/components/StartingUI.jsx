/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import './StartingUI.css'

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
      <div className="topContainer">
        <MenuUI />
        <ScoreUI score={score} />
      </div>
      <div className="cardsContainer">
        <Cards
          score={score}
          handleScore={handleScore}
          gamePlaying={gamePlaying}
          activateGameLoss={activateGameLoss}
        />
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

function ScoreUI({ score }) {
  console.log('score updated')
  return (
    <div className="scoreContainer">
      <div>Score: {score}</div>
    </div>
  )
}

function Cards({ score, handleScore, gamePlaying, activateGameLoss }) {
  const arraySeq = useRef(shuffle(['zip', 'zap', 'zop']))
  const [correctCard, setCorrectCard] = useState('zip')

  function shuffle(array) {
    const arrCopy = [...array]
    for (let i = arrCopy.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let k = arrCopy[i]
      arrCopy[i] = arrCopy[j]
      arrCopy[j] = k
    }
    return arrCopy
  }

  function checkCardClick(e) {
    if (e.target.classList.contains('false')) {
      activateGameLoss()
    } else {
      handleScore()
      createNextCards()
    }
  }

  function createNextCards() {
    if (score < 5 && gamePlaying === true) {
      assignCorrectCard()
      const nextArr = shuffle(arraySeq.current)
      arraySeq.current = nextArr
      console.log(score)
      console.log(arraySeq.current)
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

  const cards = arraySeq.current.map((card) => (
    <button
      key={card}
      onClick={checkCardClick}
      disabled={!gamePlaying}
      className={`card ${card} ${card === correctCard ? 'true' : 'false'}`}
    >
      <p>{card}</p>
    </button>
  ))
  console.log('card created')

  return <>{cards}</>
}
