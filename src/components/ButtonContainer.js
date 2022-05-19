import React from 'react'
import Buttons from './Buttons'

const ButtonContainer = () => {

  const currentButtons = [
    "C", "%", "re", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", "000", ".", "="
  ]


  currentButtons.map(button => {
    button.includes('C')
  })

  const secondaryButtons = []

  return (
    <div className='buttonContainer'>
      {currentButtons.map(button => {
        return <Buttons 
        value={button} 
        // class = { button.includes(["C", "%", "re"])? "blue" : "red"}
        />
      })}
    </div>
  )
}

export default ButtonContainer