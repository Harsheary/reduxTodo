import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id:1, text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo,',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((t) => t.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const todo = state.todos.map((t) => t.id === action.payload? t.text = action.payload: t.text)
            state.todos.push(todo)
        }
    }
})


export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer