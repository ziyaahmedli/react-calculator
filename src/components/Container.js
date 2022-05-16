import React from 'react'
import OutputScreen from './OutputScreen'
import ButtonContainer from './ButtonContainer'
import Buttons from './Buttons'

const Container = () => {
  return (
    <div className='container'>
      <OutputScreen />
      <ButtonContainer />
      <Buttons />
    </div>
  )
}

export default Container