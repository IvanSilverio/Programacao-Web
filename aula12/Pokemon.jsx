import React from 'react'

export default function Pokemon({nome, imgUrl}) {
    
  return (
    <div>
        <p>{nome}</p>
        <img src={imgUrl} alt="Um pokemon" />
    </div>
    )
}
