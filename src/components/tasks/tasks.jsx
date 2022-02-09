import React from 'react';

const Tasks = () => {
  return (
<div className='tasks'>
  <div className='task'>
    <span className='task__title'>Drink Coffee</span>
    <button type='button' className='task__delete'></button>
    <button type='button' className='task__done'></button>
  </div>
  <div className='task'>
    <span className='task__title'>Make awesome app</span>
    <button type='button' className='task__delete'></button>
    <button type='button' className='task__done'></button>
  </div>
  <div className='task'>
    <span className='task__title'>Have a lunch</span>
    <button type='button' className='task__delete'></button>
    <button type='button' className='task__done'></button>
  </div>
</div>
  )
}

export default Tasks