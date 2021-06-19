import React from 'react';
import Todos from './Todos';
import AddTodo from './addTodo';
import { Link } from 'react-router-dom';

export function Home() {

  return (
    <div>
      <Link to="/addTodo">addTodo</Link>
      <Todos status= 'todo'/>
      <Todos status= 'InProgress'/>
      <Todos status= 'Done'/>
    </div>
  )
};

export default Home;