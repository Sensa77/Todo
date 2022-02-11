import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTask, valueSelector } from "../tasks/task";
import { change } from "../tasks/task";
import {clearInput} from "../tasks/task"
import "./newTask.css";

const NewTask = () => {
  const changeTask = useSelector(valueSelector);
  const dispatch = useDispatch();

  return (
    <div className="new-task">
      <form className="new-task__form">
        <input
          type="text"
          className="new-task__input form-control"
          placeholder="What needs to be done"
          value={changeTask}
          onChange={(e) => dispatch(change(e.target.value))}
        ></input>
        <button
          type="button"
          className="new-task__button btn btn-outline-secondary"
          onClick={() => {
            dispatch(addTask())
            dispatch(clearInput())
          }}
        >
          Add item
        </button>
      </form>
    </div>
  );
};

export default NewTask;
