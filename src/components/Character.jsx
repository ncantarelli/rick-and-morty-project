import React from 'react'

function Character({character}) {
  return (
      <div>
          <p>{character.name}</p>
          <p>{character.gender}</p>
          <p>{character.species}</p>
          <p>{character.status}</p>
    </div>
  )
}

export default Character