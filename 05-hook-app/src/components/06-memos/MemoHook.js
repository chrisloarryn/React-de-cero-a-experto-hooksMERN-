import React, { useState, useMemo } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { strongProcess } from './../../helpers'

import '../02-useEffect/effects.css'

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000)
  const [show, setShow] = useState(true)

  const memoStrongProcess = useMemo(() => strongProcess(counter), [counter])

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>Counter: {counter}</h3>
      <hr />

      <p> {memoStrongProcess} </p>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-1"
        onClick={() => {
          setShow(!show)
        }}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  )
}
