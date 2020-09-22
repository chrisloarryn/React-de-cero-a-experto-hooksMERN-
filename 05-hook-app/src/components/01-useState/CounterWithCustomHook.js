import React from 'react'
import { useCounter } from './../../hooks/useCounter'

import './counter.module.css'

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(100)
  return (
    <>
      <h1>Counter With Custom Hook { state } </h1>
      <hr />

      <button onClick={() => increment(2)} className="btn btn-primary mx-1">+ 1</button>
      <button onClick={reset} className="btn btn-info mx-1">Reset</button>
      <button onClick={() => decrement(2)} className="btn btn-danger mx-1">- 1</button>
    </>
  )
}
