import React, { useState } from 'react';
import Input from './components/Input/Input';
import TodoList from './components/TodoList/TodoList';

const App = () => {
  const [inputText, setInputText] = useState("");
  const [low, setLow] = useState([]);
  const [mid, setMid] = useState([]);
  const [high, setHigh] = useState([]);

  return (
    <div>
      <h1>Todo List</h1>
      <Input
        inputText={inputText}
        setInputText={setInputText}
        low={low}
        setLow={setLow}
        mid={mid}
        setMid={setMid}
        high={high}
        setHigh={setHigh}
      />

      <h2>High</h2>
      <TodoList
        todo={high}
      />

      <h2>Mid</h2>
      <TodoList
        todo={mid}
      />

      <h2>Low</h2>
      <TodoList
        todo={low}
      />      
    </div>
  );
}

export default App;
