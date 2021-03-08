import React from 'react';
import Todo from '../Todo/Todo';
import '../../assets/sass/components/TodoList/_todoList.scss';

const TodoList = ({todo, setTodo, done, setDone, pinned, setPinned}) => {
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
                />
            ))}
        </div>
    );
}

export default TodoList;