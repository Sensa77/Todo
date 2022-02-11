import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    { id: 1, name: "Drink Coffee" },
    {
      id: 2,
      name: "Make awesome app",
    },
    {
      id: 3,
      name: "Have a lunch",
    },
  ],
  value: "",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    deleteTask(state, action) {
      const idx = state.tasks.findIndex((el) => el.id === action.payload);
      const newArr = [
        ...state.tasks.slice(0, idx),
        ...state.tasks.slice(idx + 1),
      ];
      return { tasks: newArr };
      // state.tasks.splice(idx, 1)
    },
    change(state, action) {
      state.value = action.payload;
    },
    addTask(state) {
      state.tasks.push({
        id: Math.random(1000),
        name: state.value,
      });
    },
    clearInput(state) {
      state.value = "";
    },
  },
});

export const { deleteTask, addTask, change, clearInput } = taskSlice.actions;

export const tasksSelector = (state) => state.tasks.tasks;
export const valueSelector = (state) => state.tasks.value;
export default taskSlice.reducer;
