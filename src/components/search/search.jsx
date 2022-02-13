import React from "react";
import Filter from "../filter/filter";
import { useDispatch } from "react-redux";
import { searchChangeTask } from "../tasks/task";
import "./search.css";

const Search = () => {
  const dispatch = useDispatch();
  return (
    <div className="search">
      <input
        type="text"
        placeholder="type to search"
        className="search__input form-control"
        onChange={(e) => dispatch(searchChangeTask(e.target.value))}
      ></input>
      <Filter />
    </div>
  );
};

export default Search;
