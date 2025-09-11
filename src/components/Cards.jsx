/* eslint-disable react/prop-types */
import { useState, React } from 'react'
import './StartingUI.css'

export default function Cards({ gameLose, incrementScore, playing, stopGame }) {
  const [array, setArray] = useState(
    shuffleArray([
      { id: 'zip', correctCard: true },
      { id: 'zap', correctCard: false },
      { id: 'zop', correctCard: false },
    ]),
  )

  function handleShuffleArray(array) {
    const arrCopy = [...array]
    const shuffled = shuffleArray(arrCopy)
    setArray(shuffled)
  }

  function handleCardClicks(e) {
    if (e.target.classList.contains('false')) {
      gameLose()
      stopGame()
    } else if (e.target.classList.contains('true')) {
      incrementScore()
      const nextArr = getNextArray(e.target)
      handleShuffleArray(nextArr)
    }
  }

  return (
    <div onClick={(e) => handleCardClicks(e)} className="cardsContainer">
      <CreatingCards array={array} disable={!playing} />
    </div>
  )
}

function CreatingCards({ array, disable }) {
  const arr = array.map((i) => (
    <button
      key={i.id}
      disabled={disable}
      className={`card ${i.id} ${i.correctCard}`}
    >
      <p>{i.id}</p>
    </button>
  ))
  return <>{arr}</>
}

function getNextArray(target) {
  let nextArray = []
  if (target.classList.contains('zip')) {
    nextArray = [
      { id: 'zip', correctCard: false },
      { id: 'zap', correctCard: true },
      { id: 'zop', correctCard: false },
    ]
  } else if (target.classList.contains('zap')) {
    nextArray = [
      { id: 'zip', correctCard: false },
      { id: 'zap', correctCard: false },
      { id: 'zop', correctCard: true },
    ]
  } else {
    nextArray = [
      { id: 'zip', correctCard: true },
      { id: 'zap', correctCard: false },
      { id: 'zop', correctCard: false },
    ]
  }
  return nextArray
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}
