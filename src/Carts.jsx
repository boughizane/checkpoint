import React from 'react'

const Carts = ({el}) => {
  return (
    <div className='carts'>
        <img src={el.image}/>
        <h1>{el.name}</h1>
        <h2>{el.number}</h2>
        <h2>{el.age}</h2>
        <h2>{el.nationality}</h2>
    </div>
  )
}

export default Carts
