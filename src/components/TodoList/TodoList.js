import React from 'react';
import Todo from '../Todo/Todo';

const TodoList = ({todo, setTodo}) => {
    return(
        <div>
            <ul>
                {todo.map((task) => (
                    <Todo
                        text={task.text}
                        id={task.id}
                        todo={todo}
                        task={task}
                        setTodo={setTodo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;