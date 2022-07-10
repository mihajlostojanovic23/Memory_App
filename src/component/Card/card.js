import React from 'react'
import { useState } from 'react'
import './card.css'

function Card({item, handleClick, idd}) {
  const itemClass = item.stat ?  "active" + " " + item.stat : ""
  return (
    <div className={'card' + itemClass} onClick={() => 
        handleClick(idd)
    }>
        <img src={item.src}/>
    </div>
  )
}

export default Card