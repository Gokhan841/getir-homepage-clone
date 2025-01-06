import React from 'react';
import CardData from "../api/card.json";
import { useState, useEffect } from 'react';

const Card = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(CardData)
  }, [])
  return (
    <div className='grid md:grid-cols-3 gap-x-4 mt-3'>
      {cards && cards.map((card,index)=>(
        <div  key={index} className='flex flex-col items-center text-center bg-white p-10 rounded-lg shadow-sm'>
          <img className='w-[150] h-[150] mb-6' src={card.image}></img>
          <h6 className='text-lg font-semibold text-brand-color'>{card.title}</h6>
          <p className='mt-2 text-gray-700'> {card.description}</p>
        </div>
      ))}

    </div>
  )
}

export default Card