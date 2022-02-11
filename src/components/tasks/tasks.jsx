import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteTask } from "./task";
import "./tasks.css";


const Tasks = ({ id, name }) => {
  const tasks = useSelector((state) => state.delete.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="tasks">
      {tasks.map((task) => {
        return (
          <li className="task" id={task.id} key={task.name}>
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
