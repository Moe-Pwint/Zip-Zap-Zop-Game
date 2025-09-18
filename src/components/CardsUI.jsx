/* eslint-disable react/prop-types */
import React from 'react'
import { useRef, useState } from 'react'
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

  if (gamePlaying !== null) {
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
  const arraySeq = useRef(shuffle(['zip', 'zap', 'zop']))

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
      e.target.classList.add('wrongCard')
      handleWrongCardLoss()
    } else {
      handleScore()
      createNextCards()
    }
  }

  function createNextCards() {
    if (score < winningScore - 1 && gamePlaying === true) {
      assignCorrectCard()
      const nextArr = shuffle(arraySeq.current)
      arraySeq.current = nextArr
      console.log(score)
      console.log(arraySeq.current)
    }
  }

  const cards = arraySeq.current.map((card) => (
    <button
      key={card}
      onClick={checkCardClick}
      disabled={!gamePlaying}
      className={`card ${card} ${card === correctCard ? 'true' : 'false'}`}
    >
      <p>{card.toUpperCase()}</p>
    </button>
  ))
  console.log('card created')

  return <>{cards}</>
}
