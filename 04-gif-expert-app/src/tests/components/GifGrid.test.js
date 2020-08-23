import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import { GifGrid } from './../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe(`Test into <GifGrid /> component`, () => {
  const category = 'One Punch'

//   beforeEach(() => {
//     wrapper = shallow(<GifGrid category={category} />)
//   })

  test('test into the component', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })
    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should show items when useFetchGifs load them', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'https://localhost/any/thing.jpg',
        title: 'Anything'
      },
      {
        id: '123',
        url: 'https://localhost/any/thing.jpg',
        title: 'Anything'
      }
    ]
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })
    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('p').exists()).toBe(false)
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  })
})
