import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'

import './styles.css'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

const init = () => JSON.parse(localStorage.getItem('todos')) || []

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  const handleDelete = todoId => {
    // create action
    const action = {
      type: 'DEL',
      payload: todoId
    }
    // dispatch
    dispatch(action)
  }
  const handleToggle = todoId => dispatch({ type: 'TOGGLE', payload: todoId })

  const handleAddTodo = newTodo => {
    console.log(newTodo)
    dispatch({ type: 'ADD', payload: newTodo })
  }

  return (
    <div>
      <h1>TodoApp ( {todos.length} )</h1>
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
