import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  tasks: [
    { id: 1, name: "Drink Coffee", done: false, important: false },
    {
      id: 2,
      name: "Make awesome app",
      done: false,
      important: false,
    },
    {
      id: 3,
      name: "Have a lunch",
      done: false,
      important: false,
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
      state.tasks = newArr;
      // state.tasks.splice(idx, 1)
    },
    change(state, action) {
      state.value = action.payload;
    },
    addTask(state) {
      state.tasks.push({
        id: Math.random(1000),
        name: state.value,
        done: false,
        important: false,
      });
    },
    clearInput(state) {
      state.value = "";
    },
    doneTask(state, action) {
      const idx = state.tasks.findIndex((el) => el.id === action.payload);
      state.tasks[idx].done = true;
    },
    notDoneTask(state, action) {
      const idx = state.tasks.findIndex((el) => el.id === action.payload);
      state.tasks[idx].done = false;
    },
    importantTask(state, action) {
      const idx = state.tasks.findIndex((el) => el.id === action.payload);
      state.tasks[idx].important = true;
    },
    notImportantTask(state, action) {
      const idx = state.tasks.findIndex((el) => el.id === action.payload);
      state.tasks[idx].important = false;
    },
  },
});

export const {
  deleteTask,
  addTask,
  change,
  clearInput,
  doneTask,
  notDoneTask,
  importantTask,
  notImportantTask,
} = taskSlice.actions;

export const tasksSelector = (state) => state.tasks.tasks;
export const valueSelector = (state) => state.tasks.value;
export default taskSlice.reducer;
