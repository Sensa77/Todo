import { configureStore } from "@reduxjs/toolkit";
import taskReducer  from "../components/tasks/task";
console.log(taskReducer)

const store = configureStore({
  reducer: {
    tasks: taskReducer,
}})

export default store