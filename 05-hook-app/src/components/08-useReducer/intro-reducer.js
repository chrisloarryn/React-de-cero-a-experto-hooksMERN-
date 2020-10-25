const initialState = [
  {
    id: 1,
    todo: 'buy bread',
    done: false,
  },
]

const todoReducer = (state = initialState, action) => {
  if (action?.type === 'ADD') {
    return [...state, action.payload]
  }
  return state
}

let todos = todoReducer()

const newTodo = {
  id: 2,
  todo: 'buy milk',
  done: false,
}

const addTodoAction = {
  type: 'ADD',
  payload: newTodo,
}

todos = todoReducer(todos, addTodoAction)

console.log(todos)
