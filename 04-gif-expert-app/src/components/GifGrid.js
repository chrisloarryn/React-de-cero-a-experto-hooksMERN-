import React from 'react'
import PropTypes from 'prop-types'

import { useFetchGifs } from './../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category)
  return (

    <>
      <h3 className='animate__animated animate__bounceIn animate__delay-1s'>
		{category}
      </h3>
      {loading && (
        <p className='animate__animated animate__flash'>Loading...</p>
	  )}
      <div className='card-grid'>
        {images.length > 0 && images.map(img => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}