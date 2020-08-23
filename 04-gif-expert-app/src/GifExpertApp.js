import React, { useState } from 'react'

import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
// import PropTypes from 'prop-types'

export const GifExpertApp = ( { defaultCategories = [] } ) => {
  const [categories, setCategories] = useState(defaultCategories) // [{ name: 'One Piece' }]

  //   const handleAdd = () => {
  //     // setCategories([...categories, {name: 'Ranma'}])
  //     setCategories((cats) => [...cats, {name: 'Ranma'}])
  //   }

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map(({ name }, index) => (
          <GifGrid key={name} category={name} />
        ))}
      </ol>
    </div>
  )
}

// GifExpertApp.propTypes = {}
