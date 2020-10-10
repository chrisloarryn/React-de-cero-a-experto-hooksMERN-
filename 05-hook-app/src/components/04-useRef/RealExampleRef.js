import React, { useState } from 'react'
import { MultipleCustomsHooks } from './../03-examples/MultipleCustomsHooks'

import './../02-useEffect/effects.css'

export const RealExampleRef = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr />

      {show && <MultipleCustomsHooks />}

      <button
        className="btn btn-info mt-2"
        onClick={() => {
          setShow(!show)
        }}>
        Show/Hide
      </button>
    </div>
  )
}
