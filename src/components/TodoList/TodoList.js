import React, { useState } from 'react';
import Todo from '../Todo/Todo';

const TodoList = ({todo}) => {
    return(
        <div>
            <ul>
                {todo.map(task => (
                    <Todo text={task.text} id={task.id}  />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;