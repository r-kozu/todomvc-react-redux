import { useDispatch } from 'react-redux'

interface TodoProps {
  onClick: (event: React.MouseEvent) => any
  completed: boolean
  text: string
}
export type TodoType = TodoProps
interface TodosProps {
  todos: TodoType[]
  toggleTodo: (id: number) => any
}

const Todo: React.FC<TodoProps> = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
)
const TodoList: React.FC<TodosProps> = ({ todos, toggleTodo }) => {
  const dispatch = useDispatch()
  return (
    <ul>
      {todos?.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => dispatch(toggleTodo(todo.id))}
        />
      ))}
    </ul>
  )
}

export default TodoList
