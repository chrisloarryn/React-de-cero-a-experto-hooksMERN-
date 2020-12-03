import React from 'react'
import { todoReducer } from './../../../components/08-useReducer/todoReducer'
import { demoTodos } from './../fixtures/demoTodos'
import * as actions from './../../../helpers/actions'

describe('Tests in todoReducer', () => {
  test('Should return default status', () => {
    const state = todoReducer(demoTodos, {})

    expect(state).toEqual(demoTodos)
  })
  test('Should add a TODO', () => {
    const newTodo = {
      id: 3,
      desc: 'Learn Express',
      done: false
    }
    const action = {
      type: actions.ADD_TODO,
      payload: newTodo
    }
    const state = todoReducer(demoTodos, action)
    expect(state.length).toBe(3)
    expect(state).toEqual([...demoTodos, newTodo])
  })
  test('Should delete a TODO', () => {
    // action.payload = ID del TODO
    const action = {
      type: actions.DEL_TODO,
      payload: 1
    }
    const state = todoReducer(demoTodos, action)

    expect(state.length).toBe(1)
    expect(state).toEqual([demoTodos[1]])
  })
  test('Should handle TOGGLE of TODO', () => {
    // action.payload = ID del TODO
    const action = {
      type: actions.TOGGLE_TODO,
      payload: 1
    }
    const state = todoReducer(demoTodos, action)

    expect(state[0].done).toBe(true)
    expect(state[1]).toEqual(demoTodos[1])
  })
})
