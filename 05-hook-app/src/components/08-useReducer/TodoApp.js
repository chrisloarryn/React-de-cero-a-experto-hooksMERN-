import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'

import './styles.css'
import { TodoList } from './components/TodoList'
import { TodoAdd } from './components/TodoAdd'

const init = () => JSON.parse(localStorage.getItem('todos')) || []

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init)

  console.log(todos)
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  const handleDelete = todoId => {
    // create action
    const action = {
      type: 'DEL',
      payload: todoId,
    }
    // dispatch
    dispatch(action)
  }
  const handleToggle = todoId => dispatch({ type: 'TOGGLE', payload: todoId })

  const handleAddTodo = newTodo => dispatch({ type: 'ADD', payload: newTodo })

  return (
    <div>
      <h1>TodoApp ( {(todos && todos.length) || 0} )</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  )
}
