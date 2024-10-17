import React from 'react'

const CharacterData = ({ name, specie, location}) => {
  return (
    <div className='card-boby'>
        <h5 className='card-title'>name: {name}</h5>
        <hr/>
        <p>specie: {specie} </p>
        <p>location: {location} </p>
    </div>
  )
}

export default CharacterData