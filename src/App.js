import Header from './components/Header/Header';
import AddToDo from './components/addToDo/AddToDo';
import ToDoList from './components/toDoList/ToDoList';

import React from 'react'

import './index.css'

function App() {
  const [todo, setTodo] = React.useState([

  ])
  return (
    <div>
      <Header />
      <AddToDo setTodo={setTodo} todo={todo} />
      <ToDoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
