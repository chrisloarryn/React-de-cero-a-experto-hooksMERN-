import React from 'react'
import { shallow } from 'enzyme'
import { GifExpertApp } from './../GifExpertApp'

import '@testing-library/jest-dom'

// import { useFetchGifs } from '../../hooks/useFetchGifs'
// jest.mock('../../hooks/useFetchGifs')

describe(`Test into <GifExpertApp /> component`, () => {
  test('test into the component', () => {
    const wrapper = shallow(<GifExpertApp />)
    expect(wrapper).toMatchSnapshot()
  })

  test(`should show a list of categories`, () => {
    const categories = [
      {
        name: 'One Piece'
      },
      {
        name: 'Dragon Ball'
      }
    ]
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGrid').length).toBe(categories.length)
  })
})
