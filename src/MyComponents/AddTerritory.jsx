import React from 'react'

const AddTerritory = (word,Land) => {
  if(Land){
    return (
      <>{word} sot</>
    ) 
  }
  return (
    <>{word} m²</>
  )
}

export default AddTerritory