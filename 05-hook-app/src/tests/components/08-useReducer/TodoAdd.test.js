import React from 'react'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import { TodoAdd } from 'components/08-useReducer/TodoAdd'

describe('Tests in <TodoAdd />', () => {
  const handleAddTodo = jest.fn()

  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />)

  test('should be rendered correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('handleAddTodo must not be called', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit')
    formSubmit({ preventDefault() {} })
    // handle not called
    expect(handleAddTodo).toHaveBeenCalledTimes(0)
  })

  test('handleAddTodo must be called one time', () => {
    const value = 'Learn React JS'
    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description'
      }
    })
    const formSubmit = wrapper.find('form').prop('onSubmit')
    formSubmit({ preventDefault() {} })
    // handle called
    expect(handleAddTodo).toHaveBeenCalledTimes(1)
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object)) // { }
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false
    }) // any number

    expect(wrapper.find('input').prop('value')).toBe('')
  })
})
