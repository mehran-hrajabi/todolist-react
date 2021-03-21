import React, { useEffect, useState } from 'react';
import Input from '../components/Input/Input';
import TodoList from '../components/TodoList/TodoList';
import '../assets/sass/containers/App/_app.scss';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [numOfTasks, setNumOfTasks] = useState([]);

  useEffect(() => {
    let todosLocal = JSON.parse(localStorage.getItem("todos"));
    setTodos(todosLocal);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    
    let pinnedCounter=0, highCounter=0, midCounter=0, lowCounter=0, doneCounter=0;
    todos.forEach((item) => {
      switch (item.priority) {
        case "PINNED": pinnedCounter++;
          break;
        case "HIGH": highCounter++;
          break;
        case "MID": midCounter++;
          break;
        case "LOW": lowCounter++;
          break;  
        case "DONE": doneCounter++;
          break;  
        default:
      }
    });
    setNumOfTasks([
      pinnedCounter, highCounter, midCounter, lowCounter, doneCounter
    ]);
  },[todos]);

  return (
    <div className="app">
      <h1>Todo List</h1>
      <Input
        todos={todos}
        setTodos={setTodos}
      />
      {/*<span>Pinned: {numOfTasks[0]}</span>
      <span>High: {numOfTasks[1]}</span>
      <span>Mid: {numOfTasks[2]}</span>
      <span>Low: {numOfTasks[3]}</span>
      <span>Done: {numOfTasks[4]}</span>*/}

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