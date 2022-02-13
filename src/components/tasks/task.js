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
  search: "",
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
      state.tasks[idx].done = !state.tasks[idx].done;
    },
    importantTask(state, action) {
      const idx = state.tasks.findIndex((el) => el.id === action.payload);
      state.tasks[idx].important = !state.tasks[idx].important;
    },
    searchChangeTask(state, action) {
      state.search = action.payload;
      //   state.tasks = state.tasks.filter((item) =>
      //     item.name.includes(state.search)
      //   );
    },
  },
});

export const {
  deleteTask,
  addTask,
  change,
  clearInput,
  doneTask,
  importantTask,
  searchChangeTask,
} = taskSlice.actions;

export const searchSelector = (state) => state.tasks.search;
export const tasksSelector = (state) => state.tasks.tasks;
export const valueSelector = (state) => state.tasks.value;
export default taskSlice.reducer;
