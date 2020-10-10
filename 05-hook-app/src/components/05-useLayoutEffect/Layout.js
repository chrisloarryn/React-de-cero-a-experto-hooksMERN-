import React, { useState, useLayoutEffect, useRef } from 'react'
import { useFetch } from './../../hooks/useFetch'

import './Layout.css'
import { useCounter } from '../../hooks/useCounter'

export const Layout = () => {
  const { counter, increment } = useCounter(1)
  const [boxSize, setBoxSize] = useState({})
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`,
  )
  const { quote } = !!data && data[0]
  const paragraphTag = useRef()
  useLayoutEffect(() => {
    setBoxSize(paragraphTag.current.getBoundingClientRect())
  }, [quote])
  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p className="mb-0" ref={paragraphTag}>
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button onClick={() => increment()} className="btn btn-primary">
        Next quote
      </button>
    </div>
  )
}
