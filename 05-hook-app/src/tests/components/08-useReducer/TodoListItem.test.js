import React from 'react'
import { todoReducer } from './../../../components/08-useReducer/todoReducer'
import { demoTodos } from './../fixtures/demoTodos'
import * as actions from './../../../helpers/actions'
import { shallow } from 'enzyme'
import { TodoListItem } from 'components/08-useReducer/TodoListItem'
import '@testing-library/jest-dom'

describe('Tests in <TodoListItem />', () => {
  const idx = 1
  const handleDelete = jest.fn()
  const handleToggle = jest.fn()

  let wrapper = shallow(
    <TodoListItem
      todo={demoTodos[idx]}
      index={idx}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  )

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(
      <TodoListItem
        todo={demoTodos[idx]}
        index={idx}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    )
  })
  test('Should be rendered correctly', () => {
    // snapshot
    expect(wrapper).toMatchSnapshot()
  })

  test('Should call handleDelete function', () => {
    // jest.fn()
    // toHaveBeenCalled
    // toHaveBeenCalledWith
    wrapper.find('button').simulate('click')
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[1].id)
  })

  test('Should call handleToggle function', () => {
    // jest.fn()
    // toHaveBeenCalled
    // toHaveBeenCalledWith
    wrapper.find('p').simulate('click')
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[1].id)
  })

  test('Should show text correctly', () => {
    // paragraph content
    const p = wrapper.find('p')
    expect(p.text().trim()).toBe(`${idx + 1} - ${demoTodos[idx].desc}`)
  })

  test('Should have complete class', () => {
    // paragraph content
    const todo = demoTodos[1]
    todo.done = true

    const wrapper = shallow(<TodoListItem todo={demoTodos[idx]} />)
    expect(wrapper.find('p').hasClass('complete')).toBe(true)
  })
})
