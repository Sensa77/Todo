import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  deleteTask,
  tasksSelector,
  doneTask,
  notDoneTask,
  importantTask,
  notImportantTask,
} from "./task";
import "./tasks.css";

const Tasks = () => {
  const tasks = useSelector(tasksSelector);
  const dispatch = useDispatch();

  const switchDone = ({ done, id }) => {
    if (done === false) {
      dispatch(doneTask(id));
    } else {
      dispatch(notDoneTask(id));
    }
  };

  const switchImportant = ({ important, id }) => {
    if (important === false) {
      dispatch(importantTask(id));
    } else {
      dispatch(notImportantTask(id));
    }
  };

  return (
    <ul className="tasks">
      {tasks.map((task) => {
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
