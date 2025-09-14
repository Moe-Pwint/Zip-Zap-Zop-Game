/* eslint-disable react/prop-types */
import React from 'react'
import { useRef, useState } from 'react'
import './StartingUI.css'

export default function StartingUI() {
  return (
    <>
      <Cards />
    </>
  )
}

function Cards() {
  const arraySeq = useRef(['zip', 'zap', 'zop'])
  const [correctCard, setCorrectCard] = useState('zip')
  const nextArr = shuffle(arraySeq.current)

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

  function assignCorrectCard() {
    if (correctCard === 'zip') {
      setCorrectCard('zap')
    } else if (correctCard === 'zap') {
      setCorrectCard('zop')
    } else if (correctCard === 'zop') {
      setCorrectCard('zip')
    }
  }

  function checkCardClick(e) {
    if (e.target.classList.contains('false')) {
      alert('Game Over')
    } else {
      assignCorrectCard()
    }
  }

  const cards = nextArr.map((card) => (
    <button
      key={card}
      onClick={checkCardClick}
      className={`${card} ${card === correctCard ? 'true' : 'false'}`}
    >
      {card}
    </button>
  ))
  return <>{cards}</>
}
