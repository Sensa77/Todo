import React from 'react';

const Filter = () => {
  return (
    <div className='filter'>
      <button type='button' className='filter__button'>All</button>
      <button type='button' className='filter__button'>Active</button>
      <button type='button' className='filter__button'>Done</button>
    </div>
  )
}

export default Filter