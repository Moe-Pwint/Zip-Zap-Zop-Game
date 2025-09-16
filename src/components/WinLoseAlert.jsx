/* eslint-disable react/prop-types */
import React from 'react'
import './StartingUI.css'

export default function WinLoseAlert({ gameWin }) {
  if (gameWin) return <WinAlert />
  else if (gameWin === false) return <LossAlert />
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
