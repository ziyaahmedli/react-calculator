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

  const secondaryButtons = ["C", "%", "re"]
  const operators = ["/", "*", "-", "+", "="]

  currentButtons.map(btn => {
    secondaryButtons.map(e=>{
    })
  })


  let x;



  return (
    <div className='buttonContainer'>
      {currentButtons.map(button => {
        return <Buttons 
        value={button} 
        />
      })}
    </div>
  )
}

export default ButtonContainer