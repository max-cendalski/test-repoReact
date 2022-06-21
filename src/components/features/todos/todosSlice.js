import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub, format } from 'date-fns'



const initialState = {
  todos: [
    {
      id: nanoid(),
      title: 'Send resumes',
      status: false,
      date: format(new Date(), "'Wrote down on' eee d")
    },
     {
      id: nanoid(),
      title: 'Read book',
      status: false,
      date: format(new Date(), "'Wrote down on' eee d")
    },
  ]
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: {
      reducer(state, action) {
        state.todos.push(action.payload)
      },
      prepare(title,status) {
        return {
          payload: {
            title,
            status: false,
            id: nanoid(),
            date: format(new Date(), "'Wrote down' eee d")
          }
        }
      }
    },
    todoStatus: {
      reducer(state, action) {
        console.log('state.action',action.payload)
        const todoToChange =state.todos.findIndex(todo => todo.id === action.payload)
        state.todos[todoToChange].status = !state.todos[todoToChange].status
      }
    }
  }})


export const selectAllTodos = (state) => state.todos.todos

export const {todoAdded, todoStatus} = todosSlice.actions

export default todosSlice.reducer
