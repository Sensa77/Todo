import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  deleteTask,
  tasksSelector,
  doneTask,
  importantTask,
  searchSelector,
  viewTasksSelector,
  filter,
  filterActiveSelector,
  filterDoneSelector,
} from "./task";
import "./tasks.css";

const Tasks = () => {
  const tasks = useSelector(tasksSelector);
  const viewTasks = useSelector(viewTasksSelector);
  const searchTask = useSelector(searchSelector);
  const filterTaskActive = useSelector(filterActiveSelector);
  const filterTaskDone = useSelector(filterDoneSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (filterTaskActive) {
      dispatch(filter(tasks.filter((task) => !task.done)));
    } else if (filterTaskDone) {
      dispatch(filter(tasks.filter((task) => task.done)));
    } else {
      dispatch(filter(tasks));
    }
  }, [filterTaskActive, filterTaskDone, tasks]);

  const switchDone = ({ id }) => {
    dispatch(doneTask(id));
  };

  const switchImportant = ({ id }) => {
    dispatch(importantTask(id));
  };

  return (
    <ul className="tasks">
      {viewTasks
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
