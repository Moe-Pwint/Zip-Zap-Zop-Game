/* eslint-disable react/prop-types */
import { useState, React } from 'react'
import './StartingUI.css'

export default function Cards({ handleFalseCard, incrementScore }) {
  const [array, setArray] = useState([
    { id: 'zip' },
    { id: 'zap' },
    { id: 'zop' },
  ])

  function handleShuffleArray(array) {
    console.log(array)
    const arrCopy = [...array]
    shuffleArray(arrCopy)
    console.log(arrCopy)
    setArray(arrCopy)
  }

  // const [zipState, setZipState] = useState(true)
  // const [zapState, setZapState] = useState(false)
  // const [zopState, setZopState] = useState(false)

  return (
    <div onClick={() => handleShuffleArray(array)} className="cardsContainer">
      <CreatingCards array={array} />
    </div>
  )
}

function CreatingCards({ array }) {
  // function handleZipClick() {
  //   if (zipState === false) {
  //     handleFalseCard()
  //     return
  //   }
  //   console.log(zipState, zapState, zopState)
  //   setZipState(false)
  //   setZapState(true)
  //   incrementScore()
  // }

  // function handleZapClick() {
  //   if (zapState === false) {
  //     handleFalseCard()
  //     return
  //   }
  //   console.log(zipState, zapState, zopState)
  //   setZapState(false)
  //   setZopState(true)
  //   incrementScore()
  // }

  // function handleZopClick() {
  //   if (zopState === false) {
  //     handleFalseCard()
  //     return
  //   }
  //   console.log(zipState, zapState, zopState)
  //   setZopState(false)
  //   setZipState(true)
  //   incrementScore()
  // }
  const arrCopy = array.slice()
  const arr = arrCopy.map((i) => (
    <button key={i.id} className={`card ${i}`}>
      <p>{i.id}</p>
    </button>
  ))
  return <>{arr}</>
}

// const zip = {id: 'zip',
//   onClick: 'handleZipClick'
// }

// function Zip() {
//   return (
//     <button className="card">
//       <p>ZIP</p>
//     </button>
//   )
// }

// function Zap() {
//   return (
//     <button className="card">
//       <p>ZAP</p>
//     </button>
//   )
// }

// function Zop() {
//   return (
//     <button className="card">
//       <p>ZOP</p>
//     </button>
//   )
// }

// function shuffleArray(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1))
//     var temp = array[i]
//     array[i] = array[j]
//     array[j] = temp
//   }
// }

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}
