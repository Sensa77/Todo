import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteTask, tasksSelector } from "./task";
import "./tasks.css";


const Tasks = () => {
  const tasks = useSelector(tasksSelector);
  const dispatch = useDispatch();

  return (
    <ul className="tasks">
      {tasks.map((task) => {
        return (
          <li className="task" id={task.id} key={task.id}>
            <span className="task__title">{task.name}</span>
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
