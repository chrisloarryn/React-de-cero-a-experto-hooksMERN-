import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import CounterApp from '../CounterApp'

describe('Test into <CounterApp /> component', () => {
  let wrapper = shallow(<CounterApp />) // undefined

  beforeEach(() => {
    wrapper = shallow(<CounterApp />)
  })

  test('test over component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should return 100 in this test case', () => {
    const value = 100
    const wrapper = shallow(<CounterApp value={value} />)

    const counterText = wrapper.find('h2').text().trim()
    expect(counterText).toBe(`${value}`)
  })

  test('should increment counter by +1 doing click in the button', () => {
    wrapper.find('button').at(0).simulate('click', {})
    const counterText = wrapper.find('h2').text().trim()
    expect(counterText).toBe('11')
  })
  test('should decrement counter by +1 doing click in the button', () => {
    wrapper.find('button').at(2).simulate('click', {})
    const counterText = wrapper.find('h2').text().trim()
    expect(counterText).toBe('9')
  })
  test('should reset value to received in the props clicking in reset btn', () => {
    const value = 105
    const wrapper = shallow(<CounterApp value={value} />)
    wrapper.find('button').at(0).simulate('click', {})
    wrapper.find('button').at(0).simulate('click', {})
    wrapper.find('button').at(1).simulate('click', {})
    const counterText = wrapper.find('h2').text().trim()

    expect(counterText).toBe(`${value}`)
  })
})
