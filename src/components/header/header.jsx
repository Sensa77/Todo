import React from "react";
import { useSelector } from "react-redux";
import { tasksSelector } from "../tasks/tasksSlice";
import "./header.css";

const Header = () => {
  const tasks = useSelector(tasksSelector);

  const filterDone = () => {
    const tasksDone = tasks.filter((task) => task.done);
    return tasksDone.length;
  };

  const filterActive = () => {
    const tasksActive = tasks.filter((task) => !task.done);
    return tasksActive.length;
  };

  return (
    <div className="header">
      <h1 className="header__title">Todo List</h1>
      <span className="header__progress">
        {filterActive()} more to do {filterDone()} done
      </span>
    </div>
  );
};

export default Header;
