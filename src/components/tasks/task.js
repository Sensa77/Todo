import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    { id: 1,
      name: "Drink Coffee"
    },
    {
      id: 2,
      name: "Make awesome app"
    },
    {
      id: 3,
      name: "Have a lunch"
    }
  ]
}

  const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
      deleteTask(state, action) {
        const idx = state.tasks.findIndex((el) => el.id === action.payload)
        const newArr = [...state.tasks.slice(0, idx), ...state.tasks.slice(idx + 1)]
        return {tasks: newArr}
        // state.tasks.splice(idx, 1)
      }
    }
  })

  export const {deleteTask} = taskSlice.actions
  export default taskSlice.reducer
