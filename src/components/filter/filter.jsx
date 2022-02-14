import React from "react";
import "./filter.css";
import { useDispatch } from "react-redux";
import { filterAll, filterActive, filterDone } from "../tasks/task";

const Filter = () => {
  const dispatch = useDispatch();
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
        className="filter__button btn btn-outline-dark"
        onClick={() => onFilterAll()}
      >
        All
      </button>
      <button
        type="button"
        className="filter__button btn btn-outline-dark"
        onClick={() => onFilterActive()}
      >
        Active
      </button>
      <button
        type="button"
        className="filter__button btn btn-outline-dark"
        onClick={() => onFilterDone()}
      >
        Done
      </button>
    </div>
  );
};

export default Filter;
