import React from 'react';
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
      <h1 className='header__title'>Todo List</h1>
      <span className='header__progress'>3 more to do 0 done</span>
    </div>
  )
}

export default Header