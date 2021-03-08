import React, { useEffect, useState } from 'react';
import Input from './components/Input/Input';
import TodoList from './components/TodoList/TodoList';

const App = () => {
  const [inputText, setInputText] = useState("");
  const [low, setLow] = useState([]);
  const [mid, setMid] = useState([]);
  const [high, setHigh] = useState([]);
  const [done, setDone] = useState([]);
  const [pinned, setPinned] = useState([]);

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

      <h2>Pinned</h2>
      <TodoList
        todo={pinned}
        setTodo={setPinned}
        done={done}
        setDone={setDone}
        pinned={pinned}
        setPinned={setPinned}
      />

      <h2>High</h2>
      <TodoList
        todo={high}
        setTodo={setHigh}
        done={done}
        setDone={setDone}
        pinned={pinned}
        setPinned={setPinned}
      />

      <h2>Mid</h2>
      <TodoList
        todo={mid}
        setTodo={setMid}
        done={done}
        setDone={setDone}
        pinned={pinned}
        setPinned={setPinned}
      />

      <h2>Low</h2>
      <TodoList
        todo={low}
        setTodo={setLow}
        done={done}
        setDone={setDone}
        pinned={pinned}
        setPinned={setPinned}
      />

      <h2>Done</h2>
      <TodoList
        todo={done}
        setTodo={setDone}
        done={done}
        setDone={setDone}
        pinned={pinned}
        setPinned={setPinned}
      />
    </div>
  );
}

export default App;
