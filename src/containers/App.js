import React, { useEffect, useState } from 'react';
import Input from '../components/Input/Input';
import TodoList from '../components/TodoList/TodoList';
import '../assets/sass/containers/App/_app.scss';

const App = () => {
  const [inputText, setInputText] = useState("");
  const [low, setLow] = useState([]);
  const [mid, setMid] = useState([]);
  const [high, setHigh] = useState([]);
  const [done, setDone] = useState([]);
  const [pinned, setPinned] = useState([]);

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  useEffect(() => {
    saveToLocalStorage();
  },[low, mid, high, done, pinned]);

  const saveToLocalStorage = () => {
    localStorage.setItem('low', JSON.stringify(low));
    localStorage.setItem('mid', JSON.stringify(mid));
    localStorage.setItem('high', JSON.stringify(high));
    localStorage.setItem('done', JSON.stringify(done));
    localStorage.setItem('pinned', JSON.stringify(pinned));
  }
  const getFromLocalStorage = () => {
      let lowLocal = JSON.parse(localStorage.getItem("low"));
      let midLocal = JSON.parse(localStorage.getItem("mid"));
      let highLocal = JSON.parse(localStorage.getItem("high"));
      let doneLocal = JSON.parse(localStorage.getItem("done"));
      let pinnedLocal = JSON.parse(localStorage.getItem("pinned"));
      setLow(lowLocal);
      setMid(midLocal);
      setHigh(highLocal);
      setDone(doneLocal);
      setPinned(pinnedLocal);
  }

  return (
    <div className="app">
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

      <h1>Pinned</h1>
      <TodoList
        todo={pinned}
        setTodo={setPinned}
        done={done}
        setDone={setDone}
        pinned={pinned}
        setPinned={setPinned}
        isDoneList={false}
        isPinnedList={true}
      />

      <h1>High</h1>
      <TodoList
        todo={high}
        setTodo={setHigh}
        done={done}
        setDone={setDone}
        pinned={pinned}
        setPinned={setPinned}
        isDoneList={false}
        isPinnedList={false}
      />

      <h1>Mid</h1>
      <TodoList
        todo={mid}
        setTodo={setMid}
        done={done}
        setDone={setDone}
        pinned={pinned}
        setPinned={setPinned}
        isPinnedList={false}
      />

      <h1>Low</h1>
      <TodoList
        todo={low}
        setTodo={setLow}
        done={done}
        setDone={setDone}
        pinned={pinned}
        setPinned={setPinned}
        isDoneList={false}
        isPinnedList={false}
      />

      <h1>Done</h1>
      <TodoList
        todo={done}
        setTodo={setDone}
        done={done}
        setDone={setDone}
        pinned={pinned}
        setPinned={setPinned}
        isDoneList={true}
        isPinnedList={false}
      />
    </div>
  );
}

export default App;