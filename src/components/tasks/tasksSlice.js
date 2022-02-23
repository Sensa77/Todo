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
  viewTasks: [],
  filterDone: false,
  filterActive: false,
};

const tasksSlice = createSlice({
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
    },
    filter(state, action) {
      state.viewTasks = action.payload;
    },
    filterAll(state) {
      state.filterDone = false;
      state.filterActive = false;
    },
    filterActive(state) {
      state.filterActive = true;
      state.filterDone = false;
    },
    filterDone(state) {
      state.filterDone = true;
      state.filterActive = false;
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
  filter,
  filterAll,
  filterActive,
  filterDone,
} = tasksSlice.actions;

export const filterDoneSelector = (state) => state.tasks.filterDone;
export const filterActiveSelector = (state) => state.tasks.filterActive;
export const viewTasksSelector = (state) => state.tasks.viewTasks;
export const searchSelector = (state) => state.tasks.search;
export const tasksSelector = (state) => state.tasks.tasks;
export const valueSelector = (state) => state.tasks.value;
export default tasksSlice.reducer;
