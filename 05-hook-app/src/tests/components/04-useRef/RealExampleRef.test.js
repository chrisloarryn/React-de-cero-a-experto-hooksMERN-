import React from 'react'
import { shallow } from 'enzyme'
import { RealExampleRef } from './../../../components/04-useRef/RealExampleRef'

describe('Tests in <RealExampleRef />', () => {
  const wrapper = shallow(<RealExampleRef />)

  test('Should be rendered correctly', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false)
  })
  test('Should render <MultipleCustomHooks />', () => {
    wrapper.find('button').simulate('click')
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true)
  })
})
