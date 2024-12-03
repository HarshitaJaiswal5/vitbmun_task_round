import React from 'react'

const Cards = ({number,text}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-3  '>
        <div className='text-2xl font-semibold'>{number}+</div>
        <p className='text-center capitalize'> {text}</p>
    </div>
  )
}

export default Cards