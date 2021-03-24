import React, { useEffect, useState } from 'react';
import Input from '../components/Input/Input';
import TodoList from '../components/TodoList/TodoList';
import '../assets/sass/containers/App/_app.scss';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let todosLocal = JSON.parse(localStorage.getItem("todos"));
    setTodos(todosLocal);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);

  return (
    <div className="app">
      <h1>Todo List</h1>
      <Input
        todos={todos}
        setTodos={setTodos}
      />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        type="pinned"
      />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        type="high"
      />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        type="mid"
      />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        isLowList={true}
        type="low"
      />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        isDoneList={true}
        type="done"
      /> 
    </div>
  );
}

export default App;