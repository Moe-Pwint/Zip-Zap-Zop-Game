/* eslint-disable react/prop-types */
import React, { useMemo } from 'react'
import { useState } from 'react'
import './StartingUI.css'

export default function CardsUI({
  winningScore,
  score,
  handleScore,
  gamePlaying,
  handleWrongCardLoss,
}) {
  const [correctCard, setCorrectCard] = useState('zip')

  function assignCorrectCard() {
    if (correctCard === 'zip') {
      setCorrectCard('zap')
    } else if (correctCard === 'zap') {
      setCorrectCard('zop')
    } else if (correctCard === 'zop') {
      setCorrectCard('zip')
    }
  }

  return (
    <>
      <div className="clueContainer">
        <p>{correctCard.toUpperCase()}</p>
      </div>
      <div className="cardsContainer">
        <Cards
          correctCard={correctCard}
          assignCorrectCard={assignCorrectCard}
          winningScore={winningScore}
          score={score}
          handleScore={handleScore}
          gamePlaying={gamePlaying}
          handleWrongCardLoss={handleWrongCardLoss}
        />
      </div>
    </>
  )
}

function Cards({
  correctCard,
  assignCorrectCard,
  winningScore,
  score,
  handleScore,
  gamePlaying,
  handleWrongCardLoss,
}) {
  const [arraySeq, setArraySeq] = useState(shuffle(['zip', 'zap', 'zop']))

  function shuffle(arraySeq) {
    const arrCopy = [...arraySeq]
    for (let i = arrCopy.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let k = arrCopy[i]
      arrCopy[i] = arrCopy[j]
      arrCopy[j] = k
    }
    return arrCopy
  }

  function checkCardClick(card) {
    if (card !== correctCard) {
      // e.target.classList.add('wrongCard')
      handleWrongCardLoss()
    } else {
      handleScore()
      createNextCards()
    }
  }

  function createNextCards() {
    if (score < winningScore - 1 && gamePlaying === true) {
      assignCorrectCard()
      setArraySeq((prev) => shuffle(prev))
    }
  }

  const cards = useMemo(
    () =>
      arraySeq.map((card) => (
        <button
          key={card}
          onClick={() => {
            checkCardClick(card)
          }}
          disabled={!gamePlaying}
          className={`card ${card}`}
        >
          <p>{card.toUpperCase()}</p>
        </button>
      )),
    [correctCard, arraySeq, gamePlaying],
  )

  return <>{cards}</>
}
