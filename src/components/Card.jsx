import React from 'react'

const Card = ({card}) => {
  return (
    <>
    <div className='m-10 border shadow-xl h-[320px] px-5 rounded-3xl w-[350px] '>
        <div className='mt-14'>
            <img className='h-24 w-24' src={card.image} alt="" />
        </div>
        <h1 className='text-[24px] text-black font-bold mt-5'>

            {card.heading}
        </h1>

        <p className='text-[16px] font-light text-gray-400 mt-1'>
            {card.desc}
        </p>
    </div>
    </>
  )
}

export default Card