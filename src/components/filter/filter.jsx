import React from "react";
import "./filter.css";
import { useDispatch } from "react-redux";
import {
  filterAll,
  filterActive,
  filterDone,
  filterDoneSelector,
  filterActiveSelector,
} from "../tasks/task";
import { useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const filterTasksDone = useSelector(filterDoneSelector);
  const filterTasksActive = useSelector(filterActiveSelector);
  const onFilterAll = () => {
    dispatch(filterAll());
  };

  const onFilterDone = () => {
    dispatch(filterDone());
  };

  const onFilterActive = () => {
    dispatch(filterActive());
  };
  return (
    <div className="filter">
      <button
        type="button"
        className={`filter__button btn btn-outline-dark ${
          !filterTasksDone && !filterTasksActive ? "filter__button--active" : ""
        }
        `}
        onClick={() => onFilterAll()}
      >
        All
      </button>
      <button
        type="button"
        className={`filter__button btn btn-outline-dark ${
          !filterTasksDone && filterTasksActive ? "filter__button--active" : ""
        }`}
        onClick={() => onFilterActive()}
      >
        Active
      </button>
      <button
        type="button"
        className={`filter__button btn btn-outline-dark ${
          filterTasksDone && !filterTasksActive ? "filter__button--active" : ""
        }`}
        onClick={() => onFilterDone()}
      >
        Done
      </button>
    </div>
  );
};

export default Filter;
