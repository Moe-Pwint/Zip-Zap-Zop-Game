/* eslint-disable react/prop-types */
import { useState, React } from 'react'
import './StartingUI.css'

export default function Cards({ handleFalseCard, incrementScore }) {
  const [zipState, setZipState] = useState(true)
  const [zapState, setZapState] = useState(false)
  const [zopState, setZopState] = useState(false)

  function handleZipClick() {
    if (zipState === false) {
      handleFalseCard()
      return
    }
    console.log(zipState, zapState, zopState)
    setZipState(false)
    setZapState(true)
    incrementScore()
  }

  function handleZapClick() {
    if (zapState === false) {
      handleFalseCard()
      return
    }
    console.log(zipState, zapState, zopState)
    setZapState(false)
    setZopState(true)
    incrementScore()
  }

  function handleZopClick() {
    if (zopState === false) {
      handleFalseCard()
      return
    }
    console.log(zipState, zapState, zopState)
    setZopState(false)
    setZipState(true)
    incrementScore()
  }

  return (
    <div className="cardsContainer">
      <Zip handleZipClick={handleZipClick} />
      <Zap handleZapClick={handleZapClick} />
      <Zop handleZopClick={handleZopClick} />
    </div>
  )
}

function Zip({ handleZipClick }) {
  return (
    <button className="card" onClick={handleZipClick}>
      <p>ZIP</p>
    </button>
  )
}

function Zap({ handleZapClick }) {
  return (
    <button className="card" onClick={handleZapClick}>
      <p>ZAP</p>
    </button>
  )
}

function Zop({ handleZopClick }) {
  return (
    <button className="card" onClick={handleZopClick}>
      <p>ZOP</p>
    </button>
  )
}

// function shuffleArray(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1))
//     var temp = array[i]
//     array[i] = array[j]
//     array[j] = temp
//   }
// }
