import React from 'react'
import { createSelector } from '@reduxjs/toolkit'

import { useSelector } from 'react-redux'
import { RootState } from '../../reducers'
import TodoList from './TodoList'
import { TodoType, toggleTodo } from './todoSlice'

const VisibleTodoList: React.FC = () => {
  const todos = useSelector(selectVisibleTodos)
  return <TodoList todos={todos} toggleTodo={toggleTodo} />
}

const selectTodos = (state: RootState) => state.todos
const selectFilter = (state: RootState) => state.visibilityFilter

const selectVisibleTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, visibilityFilter) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos?.filter((t: TodoType) => t.completed)
      case 'SHOW_ACTIVE':
        return todos?.filter((t: TodoType) => !t.completed)
      default:
        throw new Error('Unknown filter: ' + visibilityFilter)
    }
  }
)

export default VisibleTodoList
