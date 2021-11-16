import React, { useCallback, useState } from 'react'

import Counter from '../components/counter/counter'

import Styles from './counters.module.css'

const Counters = () => {
  const [globalCounter, updateGlobalCounter] = useState(0)
  const [counterComponents, updateCounterComponents] = useState([...new Array(3)].map(() => Counter));

  const incrementGlobalCounter = useCallback(() => {
    updateGlobalCounter(initilValue => initilValue + 1)
  }, [])

  const decrementGlobalCounter = useCallback(() => {
    updateGlobalCounter(initilValue => initilValue - 1)
  }, [])


  const addCounterBtnClickHandler = useCallback(() => updateCounterComponents([...counterComponents, Counter]), [counterComponents])
  return (
    <div className={Styles.Container}>
      <div className={Styles.boxContainer}>
        <h1>Counters Task</h1>
        <div className={Styles.globalContainer}>
          <button onClick={decrementGlobalCounter}>-</button>
          <button onClick={incrementGlobalCounter}>+</button>
        </div>
        {counterComponents.map((Counter, index) => <Counter key={`Counter_${index}`} currentCounterState={globalCounter} />)}
        <p onClick={addCounterBtnClickHandler}>+ Add Counter</p>
      </div>
    </div>
  )
}

export default Counters