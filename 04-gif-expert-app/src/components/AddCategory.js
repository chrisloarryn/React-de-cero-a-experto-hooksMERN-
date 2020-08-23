import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('Hello World')

  const handleInputChange = e => {
    e.preventDefault()
    setInputValue(e.target.value)
    // console.log('handleInputChange invoked')
  }

  const handleSubmit = e => {
    e.preventDefault()
    // console.log('handleSubmit', inputValue)
    setCategories(cats => [{ name: inputValue }, ...cats])
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input type='text' value={inputValue} onChange={handleInputChange} />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
