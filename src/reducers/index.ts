import { combineReducers } from 'redux'
import todosReducer from '/src/features/todos/todoSlice'
import visibilityFilterReducer from '/src/features/filters/filterSlice'

console.log(todosReducer)

console.log(visibilityFilterReducer)
const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
