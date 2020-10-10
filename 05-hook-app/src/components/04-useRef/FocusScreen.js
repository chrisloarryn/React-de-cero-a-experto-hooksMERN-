import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {
  const inputNameRef = useRef()
  const inputAgeRef = useRef()

  const handleClick = e => {
    e.preventDefault()
    inputNameRef.current.select()
    // document.querySelector('input').focus()
  }
  return (
    <form>
      <h1>Focus Screen</h1>
      <div className="form-group">
        <label htmlFor="exampleInputName">Your name:</label>
        <input
          ref={inputNameRef}
          type="text"
          className="form-control"
          id="exampleInputName"
          aria-describedby="nameHelp"
        />
        <small id="nameHelp" className="form-text text-muted">
          We'll never share your name with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputAge">Your age:</label>
        <input
          ref={inputAgeRef}
          type="text"
          className="form-control"
          id="exampleInputAge"
          aria-describedby="ageHelp"
        />
        <small id="ageHelp" className="form-text text-muted">
          We'll never share your age with anyone else.
        </small>
      </div>

      <button onClick={handleClick} className="btn btn-outline-primary mt-1">
        Focus
      </button>
    </form>
  )
}
