export const todoReducer = (state = [], action) => {
  switch (action?.type) {
    case 'ADD':
      return [...state, action.payload]
    case 'DEL':
      return state.filter(todo => todo.id !== action.payload)
    case 'TOG':
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done }
        } else {
          return todo
        }
      })
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
      )
    default:
      return state
  }
}
