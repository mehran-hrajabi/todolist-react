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
  const [numOfTasks, setNumOfTasks] = useState([]);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    setNumOfTasks([
      pinned.length, high.length, mid.length, low.length, done.length
    ]);
    localStorage.setItem('low', JSON.stringify(low));
    localStorage.setItem('mid', JSON.stringify(mid));
    localStorage.setItem('high', JSON.stringify(high));
    localStorage.setItem('done', JSON.stringify(done));
    localStorage.setItem('pinned', JSON.stringify(pinned));
  },[low, mid, high, done, pinned]);

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

      <h1>Pinned: <span>{numOfTasks[0]}</span></h1>
      <TodoList
        todo={pinned}
        setTodo={setPinned}
        done={done}
        setDone={setDone}
        pinned={pinned}
        setPinned={setPinned}
        low={low}
        setLow={setLow}
        mid={mid}
        setMid={setMid}
        high={high}
        setHigh={setHigh}
        isPinnedList={true}
      />

      <h1>High: <span>{numOfTasks[1]}</span></h1>
      <TodoList
        todo={high}
        setTodo={setHigh}
        done={done}
        setDone={setDone}
        pinned={pinned}
        setPinned={setPinned}
        low={low}
        setLow={setLow}
        mid={mid}
        setMid={setMid}
        high={high}
        setHigh={setHigh}
      />

      <h1>Mid: <span>{numOfTasks[2]}</span></h1>
      <TodoList
        todo={mid}
        setTodo={setMid}
        done={done}
        setDone={setDone}
        pinned={pinned}
        setPinned={setPinned}
        low={low}
        setLow={setLow}
        mid={mid}
        setMid={setMid}
        high={high}
        setHigh={setHigh}
      />

      <h1>Low: <span>{numOfTasks[3]}</span></h1>
      <TodoList
        todo={low}
        setTodo={setLow}
        done={done}
        setDone={setDone}
        pinned={pinned}
        setPinned={setPinned}
        low={low}
        setLow={setLow}
        mid={mid}
        setMid={setMid}
        high={high}
        setHigh={setHigh}
      />

      <h1>Done: <span>{numOfTasks[4]}</span></h1>
      <TodoList
        todo={done}
        setTodo={setDone}
        done={done}
        setDone={setDone}
        pinned={pinned}
        setPinned={setPinned}
        isDoneList={true}
        low={low}
        setLow={setLow}
        mid={mid}
        setMid={setMid}
        high={high}
        setHigh={setHigh}
      />
    </div>
  );
}

export default App;