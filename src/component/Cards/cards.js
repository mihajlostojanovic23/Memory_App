import React from 'react'
import {useState} from 'react'
import './cards.css'
import Card from '../Card/card'

function Cards() {
    const [items, setItems] = useState([
        {id: '1' ,src: 'img/picture1.png', stat: ""},
        {id: '1' ,src: 'img/picture1.png', stat: ""},
        {id: '2' ,src: 'img/picture2.png', stat: ""},
        {id: '2' ,src: 'img/picture2.png', stat: ""},
        {id: '3' ,src: 'img/picture3.png', stat: ""},
        {id: '3' ,src: 'img/picture3.png', stat: ""},
        {id: '4' ,src: 'img/picture4.png', stat: ""},
        {id: '4' ,src: 'img/picture4.png', stat: ""},
        {id: '5' ,src: 'img/picture5.png', stat: ""},
        {id: '5' ,src: 'img/picture5.png', stat: ""},
        {id: '6' ,src: 'img/picture6.png', stat: ""},
        {id: '6' ,src: 'img/picture6.png', stat: ""},
        {id: '7' ,src: 'img/picture7.png', stat: ""},
        {id: '7' ,src: 'img/picture7.png', stat: ""},
        {id: '8' ,src: 'img/picture8.png', stat: ""},
        {id: '8' ,src: 'img/picture8.png', stat: ""},
    ].sort(() => Math.random() -0.5))
    const [prev, setPrev] = useState(-1)
    
   
   
    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 10)
        }
    }

    function handleClick(id2){
        if(prev === -1){
            items[id2].stat = "active"
            setItems([...items])
            setPrev(id2)
        }else{
            check(id2)
        }
    }
  return (
    <div className='container2'>
            {items.map((item, index) => (
               <Card key={index} item={item} idd={index} handleClick={handleClick} /> )
            )}
    </div>
  )
}

export default Cards