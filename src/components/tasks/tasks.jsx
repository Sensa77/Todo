import React from 'react';
import "./tasks.css"

const Tasks = () => {
  return (
<ul className='tasks'>
  <li className='task'>
    <span className='task__title'>Drink Coffee</span>
    <div className='task__buttons btn-group'>
    <button type='button' className='task__delete btn btn-outline-danger'>delete</button>
    <button type='button' className='task__done btn btn-outline-success'>done</button>
    </div>
  </li>
  <li className='task'>
  <span className='task__title'>Make awesome app</span>
    <div className='task__buttons btn-group'>
    <button type='button' className='task__delete btn btn-outline-danger'>delete</button>
    <button type='button' className='task__done btn btn-outline-success'>done</button>
    </div>
  </li>
  <li className='task'>
    <span className='task__title'>Have a lunch</span>
    <div className='task__buttons btn-group'>
    <button type='button' className='task__delete btn btn-outline-danger'>delete</button>
    <button type='button' className='task__done btn btn-outline-success'>done</button>
    </div>
  </li>
</ul>
  )
}

export default Tasks