import React from 'react'

const Buttons = (props) => {
  return (
    <button className={props.class}>{props.value}</button>
  )
}

export default Buttons