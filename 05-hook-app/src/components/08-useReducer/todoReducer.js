import * as actions from './../../helpers/actions'
export const todoReducer = (state = [], action) => {
  switch (action?.type) {
    case actions.ADD_TODO:
      return [...state, action.payload]
    case actions.DEL_TODO:
      return state.filter(todo => todo.id !== action.payload)
    case actions.TOG_TODO:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done }
        } else {
          return todo
        }
      })
    case actions.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      )
    default:
      return state
  }
}
