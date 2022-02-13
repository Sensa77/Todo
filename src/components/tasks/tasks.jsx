import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  deleteTask,
  tasksSelector,
  doneTask,
  importantTask,
  searchSelector,
} from "./task";
import "./tasks.css";

const Tasks = () => {
  const tasks = useSelector(tasksSelector);
  const searchTask = useSelector(searchSelector);
  const dispatch = useDispatch();
  console.log(searchTask);

  const switchDone = ({ id }) => {
    dispatch(doneTask(id));
  };

  const switchImportant = ({ id }) => {
    dispatch(importantTask(id));
  };

  return (
    <ul className="tasks">
      {tasks
        .filter((task) =>
          task.name.toLowerCase().includes(searchTask.toLowerCase())
        )
        .map((task) => {
          return (
            <li className="task" id={task.id} key={task.id}>
              <span
                className={`task__title ${
                  task.done ? "task__title--active" : ""
                } ${task.important ? "task__title--important" : ""}`}
                onClick={() => switchImportant(task)}
              >
                {task.name}
              </span>
              <div className="task__buttons btn-group">
                <button
                  type="button"
                  className="task__delete btn btn-outline-danger"
                  onClick={() => dispatch(deleteTask(task.id))}
                >
                  delete
                </button>
                <button
                  type="button"
                  className="task__done btn btn-outline-success"
                  onClick={() => switchDone(task)}
                >
                  done
                </button>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default Tasks;
