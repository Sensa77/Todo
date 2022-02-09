import React from 'react';

const NewTask = () => {
  return (
    <div className='new-task'>
      <form className='new-task__form'>
      <input type="text" className="new-task__input" placeholder='What needs to be done'></input>
      <button type='button' className='new-task__button'>Add item</button>
      </form>
    </div>
  )
}

export default NewTask