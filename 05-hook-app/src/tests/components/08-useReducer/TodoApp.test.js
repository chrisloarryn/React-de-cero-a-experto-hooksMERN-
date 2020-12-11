import React from 'react'
import { mount, shallow } from 'enzyme'
import '@testing-library/jest-dom'
import { TodoApp } from 'components/08-useReducer/TodoApp'
import { demoTodos } from './../fixtures/demoTodos'
import { act } from '@testing-library/react'

describe('Tests in <TodoApp />', () => {
  const wrapper = shallow(<TodoApp />)

  Storage.prototype.setItem = jest.fn()

  test('Should be rendered correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Should add a TODO', () => {
    const wrapper = mount(<TodoApp />)

    act(() => {
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0])
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1])
      expect(localStorage.setItem).toHaveBeenCalledTimes(1)
      expect(wrapper.find('h1').text().trim()).toBe('TodoApp ( 1 )')

      // expect(localStorage.setItem).toHaveBeenCalledWith
    })
  })

  test('Should delete TODO', () => {
    wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0])
    wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id)
    expect(wrapper.find('h1').text().trim()).toBe('TodoApp ( 0 )')
  })
})
