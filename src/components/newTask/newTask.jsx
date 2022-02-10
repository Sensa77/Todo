import React from 'react';
import "./newTask.css"

const NewTask = () => {
  return (
    <div className='new-task'>
      <form className='new-task__form'>
      <input type="text" className="new-task__input form-control" placeholder='What needs to be done'></input>
      <button type='button' className='new-task__button btn btn-outline-secondary'>Add item</button>
      </form>
    </div>
  )
}

export default NewTask