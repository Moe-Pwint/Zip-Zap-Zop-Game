/* eslint-disable react/prop-types */
import React from 'react'
import './StartingUI.css'

export default function WinLoseAlert({ gameWin }) {
  function playAgain() {
    window.location.reload()
  }

  if (gameWin) return <WinAlert playAgain={playAgain} />
  else if (gameWin === false) return <LossAlert playAgain={playAgain} />
}

function WinAlert({ playAgain }) {
  console.log('winAlert')
  return (
    <div className="winAlert">
      <div>You Win!</div>
      <div className="playAgnContainer">
        <p>Replay to beat your own time!</p>
        <button onClick={playAgain} className="playAgnBtn">
          Play Again
        </button>
      </div>
    </div>
  )
}

function LossAlert({ playAgain }) {
  console.log('lossAlert')
  return (
    <div className="lossAlert">
      <div>GAME OVER</div>
      <button onClick={playAgain} className="playAgnBtn">
        Play Again
      </button>
    </div>
  )
}
