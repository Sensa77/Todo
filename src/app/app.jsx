import React from 'react';
import Header from '../components/header/header';
import NewTask from '../components/newTask/newTask';
import Search from '../components/search/search';
import Tasks from '../components/tasks/tasks';

const App = () => {
  return (
<div className='app'>
  <Header></Header>
  <Search></Search>
  <Tasks></Tasks>
  <NewTask></NewTask>
</div>
  )
}

export default App