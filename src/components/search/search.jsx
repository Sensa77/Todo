import React from 'react';
import Filter from '../filter/filter';
import "./search.css"

const Search = () => {
  return (
<div className='search'>
  <input type="text" placeholder="type to search" className='search__input form-control'></input>
  <Filter />
</div>
  )
}

export default Search