import React from 'react';
import Filter from '../filter/filter';

const Search = () => {
  return (
<div className='search'>
  <input type="text" placeholder="type to search"></input>
  <Filter />
</div>
  )
}

export default Search