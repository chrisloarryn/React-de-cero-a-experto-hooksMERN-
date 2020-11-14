import React from 'react'
import '@testing-library/jest-dom'

import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe(`Tests in <AddCategory /> Component`, () => {
  const setCategories = jest.fn()
  let wrapper = shallow(<AddCategory setCategories={setCategories} />)
  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={setCategories} />)
  })

  test('should be rendered correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should change text box', () => {
    const input = wrapper.find('input')
    const value = 'Hello world from test'
    input.simulate('change', {
      target: {
        value,
      },
      preventDefault() {},
    })
    expect(wrapper.find('p').text().trim()).toBe(value)
  })

  test(`should NOT post info with the submit handler`, () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} })
    expect(setCategories).toHaveBeenCalledTimes(1)
  })

  test('should call setCategories and clean the box', () => {
    const value = 'test n3'
    wrapper.find('input').simulate('change', {
      target: {
        value,
      },
      preventDefault() {},
    })

    // let text = wrapper.find('p').text().trim()

    wrapper.find('form').simulate('submit', { preventDefault() {} })

    expect(setCategories).toHaveBeenCalled()
    expect(setCategories).toBeCalledTimes(1)
    expect(setCategories).toHaveBeenLastCalledWith(expect.any(Function))

    const input = wrapper.find('input').prop('value')
    expect(input).toBe('')
  })
})
