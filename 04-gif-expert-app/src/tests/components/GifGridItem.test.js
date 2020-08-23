import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import { GifGridItem } from './../../components/GifGridItem'

describe('Test into <GifGridItem /> component', () => {
  const { title, url } = { title: 'Hello', url: 'https://google.cl' }

  const wrapper = shallow(<GifGridItem title={title} url={url} />)
  // beforeEach(() => {
  //     wrapper = shallow(<GifGridItem />)
  // })

  test('test into the component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should return paragraph with the title', () => {
    const p = wrapper.find('p')
    expect(p.text().trim()).toBe(title)
  })

  test('should get img = to alt and url from props', () => {
    const img = wrapper.find('img')
    // console.log(img.props()) // prop('src') => for only one prop
    expect(img.prop('src')).toBe(url)
    expect(img.prop('alt')).toBe(title)
  })

  test(`should have 'animate__delay-1s' className`, () => {
      const div = wrapper.find('div')
      const className = div.prop('className')
      expect(className.includes('animate__delay-1s')).toBe(true)
      expect(className.includes('animate__delay-1s')).not.toBe(false)
  })
})
