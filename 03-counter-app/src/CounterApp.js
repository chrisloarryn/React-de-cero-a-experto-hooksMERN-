import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value)

  // function to handle counter
  const counterAddHandler = () => {
    setCounter(counter + 1)
    // setCounter( (c) => c + 1 )
  }

  const counterResetHandler = () => setCounter(0)

  const counterSubtractHandler = () => setCounter(counter - 1)

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={counterAddHandler}>+1</button>
      <button onClick={counterResetHandler}>Reset</button>
      <button onClick={counterSubtractHandler}>-1</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

export default CounterApp
