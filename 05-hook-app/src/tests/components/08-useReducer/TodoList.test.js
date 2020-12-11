import React from 'react'
import { demoTodos } from './../fixtures/demoTodos'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import { TodoList } from 'components/08-useReducer/TodoList'

describe('Tests in <TodoList />', () => {
  const handleDelete = jest.fn()
  const handleToggle = jest.fn()

  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  )

  test('Should be rendered correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Should have two <TodoListItem />', () => {
    // expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length)
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(
      expect.any(Function)
    )
  })
})
