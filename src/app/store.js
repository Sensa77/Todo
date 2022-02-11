import { configureStore } from "@reduxjs/toolkit";
import deleteTaskReducer  from "../components/tasks/task";

const store = configureStore({
  reducer: {
    delete: deleteTaskReducer
}})

export default store