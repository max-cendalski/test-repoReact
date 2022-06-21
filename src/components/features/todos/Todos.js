import './todos.css'
import {selectAllTodos, todoStatusChanged, removedCompletedTodos} from './todosSlice'
import { useSelector, useDispatch } from 'react-redux'
import AddTodo from './AddTodoForm'


const Todos = () => {
const dispatch = useDispatch()
const todosToRender = useSelector(selectAllTodos)

const handleStatusChange = e => {
  const todo = e.target.closest('.todo').getAttribute('data-id')
  dispatch(todoStatusChanged(todo))
}

const handleRemoveAllTodos = () => {
  console.log('todosToRender',todosToRender)
  const todosToKeep = []
  for (var i = 0; i < todosToRender.length; i++) {
    if (todosToRender[i].status === false) {
      todosToKeep.push(todosToRender[i])
    }
  }
  dispatch(removedCompletedTodos(todosToKeep))
}
  return(
    <article className='todos-container'>
      <AddTodo />
      <h1>Todo List</h1>
      {
        todosToRender.map(todo => {
         return (
            <section className='todo' data-id={todo.id} key={todo.id}>
              <h2>{todo.title}</h2>
              {(!todo.status) ? <i onClick={handleStatusChange} className="fa-regular fa-2x fa-square"></i> : <i onClick={handleStatusChange} className="fa-solid fa-2x fa-square-check"></i>}
              <p className='todo-date'>{todo.date}</p>
          </section>
         )
        })
      }
      <button onClick={handleRemoveAllTodos} className='remove-todos-button'>Remove all completed todos</button>
    </article>
  )
}

export default Todos
