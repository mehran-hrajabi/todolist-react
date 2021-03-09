import React from 'react';
import Icon from '../Icon/Icon';
import '../../assets/sass/components/Todo/_todo.scss';

const Todo = ({text, task, todo, setTodo, done, setDone, pinned, setPinned}) => {
    const removeHandler = () => {
        setTodo(todo.filter((element) => element.id !== task.id));
    }

    const completedHandler = () => {
        setDone([
            ...done,task
        ]);
        removeHandler();
    }

    const pinHandler = () => {
        setPinned([
            ...pinned,task
        ]);
        removeHandler();
    }

    return(
        <div className="task-container">
            <p>{text}</p>
            <div>
                <Icon clicked={removeHandler} iconType="trash" btnType="task" />
                <Icon clicked={completedHandler} iconType="check" btnType="task" />
                <Icon clicked={pinHandler} iconType="pin" btnType="task" />
            </div>
        </div>
    )
}

export default Todo;