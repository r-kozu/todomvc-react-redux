import './App.css'
import Footer from './features/filters/Footer '
import AddTodo from './features/todos/AddTodo'
import VisibleTodoList from './features/todos/visibleTodoList'

function App() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
}

export default App
