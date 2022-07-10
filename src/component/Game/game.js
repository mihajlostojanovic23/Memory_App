import React from 'react'
import './game.css'
import Cards from '../Cards/cards'


function game() {
  return (
    <div className='game'>
        <h2 className='title'>Memory Game - React</h2>
        <div className='container'><Cards /></div>

        </div>
  )
}

export default game