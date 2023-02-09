import React from 'react';
import {cards} from "../assets/data"
import Card from './Card';

const Cards = () => {
  return (
    <>
    <div className='flex  mx-40 flex-wrap'>
    {cards.slice(0, 6).map((card) => (
          <Card card={card} key={card.id} />
        ))} 
    </div>
    
     <button className='mx-[700px] rounded-[55px] border hover:bg-blue-400 hover:text-white text-[18px] font-bold h-[56px] w-[200px] text-blue-500 border-blue-400'>Learn More</button>
    </>
  )
}

export default Cards