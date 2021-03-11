import React from 'react';
import Todo from '../Todo/Todo';
import '../../assets/sass/components/TodoList/_todoList.scss';

const TodoList = ({todo, setTodo, done, setDone, pinned, setPinned, high, setHigh, mid, setMid, low, setLow, isDoneList, isPinnedList}) => {
    return(
        <div className="list-container">
            {todo.map((task) => (
                <Todo
                    text={task.text}
                    key={task.id}
                    todo={todo}
                    task={task}
                    setTodo={setTodo}
                    done={done}
                    setDone={setDone}
                    pinned={pinned}
                    setPinned={setPinned}
                    isDoneList={isDoneList}
                    isPinnedList={isPinnedList}
                    low={low}
                    setLow={setLow}
                    mid={mid}
                    setMid={setMid}
                    high={high}
                    setHigh={setHigh}
                />
            ))}
        </div>
    );
}

export default TodoList;