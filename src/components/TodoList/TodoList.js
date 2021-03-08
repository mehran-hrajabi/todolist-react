import React from 'react';
import Todo from '../Todo/Todo';
import '../../assets/sass/components/TodoList/_todoList.scss';

const TodoList = ({todo, setTodo, done, setDone, pinned, setPinned}) => {
    return(
        <div>
            <ul>
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
            </ul>
        </div>
    );
}

export default TodoList;