import React from 'react';
import "./filter.css"

const Filter = () => {
  return (
    <div className='filter'>
      <button type='button' className='filter__button btn btn-outline-dark'>All</button>
      <button type='button' className='filter__button btn btn-outline-dark'>Active</button>
      <button type='button' className='filter__button btn btn-outline-dark'>Done</button>
    </div>
  )
}

export default Filter