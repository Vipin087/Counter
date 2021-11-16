import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Styles from './counter.module.css'

const Counter = ({ currentCounterState }) => {
  const [counterCount, setCounterCount] = useState(0)
  const [previousCounter, updatePreviousCounter] = useState(currentCounterState)

  useEffect(() => {
    if (previousCounter < currentCounterState) {
      // increased
      setCounterCount(initialState => initialState + 1);
      updatePreviousCounter(currentCounterState)
    } else if (previousCounter > currentCounterState) {
      // Decreased
      setCounterCount(initialState => initialState - 1);
      updatePreviousCounter(currentCounterState)
    }
  }, [currentCounterState, previousCounter])

  const increment = useCallback(() => {
    setCounterCount(initialValue => initialValue + 1)
  }, [])

  const decrement = useCallback(() => {
    setCounterCount(initialValue => initialValue - 1)
  }, [])

  return (
    <div className={Styles.container}>
      <button onClick={decrement}>-</button>
      <p>{counterCount}</p>
      <button onClick={increment}>+</button>
    </div>
  )
}

Counter.propTypes = {
  currentCounterState: PropTypes.number.isRequired
}

export default Counter