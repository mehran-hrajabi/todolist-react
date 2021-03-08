import React from 'react';
import Icon from '../Icon/Icon';

const Todo = ({text, task, todo, setTodo, done, setDone, pinned, setPinned}) => {
    const removeHandler = () => {
        setTodo(todo.filter((element) => element.id !== task.id));
    }

    const completedHandler = () => {
        setTodo(todo.map((item)=>{
            return{
                ...item, priority: "5"
            }
        }));
        setDone([
            ...done,task
        ]);
        removeHandler();
    }

    const pinHandler = () => {
        setTodo(todo.map((item)=>{
            return{
                ...item, priority: "1"
            }
        }));
        setPinned([
            ...pinned,task
        ]);
        removeHandler();
    }

    return(
        <div>
            <li>{text}</li>
            <Icon clicked={removeHandler} style={"fas fa-trash"} />
            <Icon clicked={completedHandler} style={"fas fa-check"} />
            <Icon clicked={pinHandler} style={"fas fa-thumbtack"} />
        </div>
    )
}

export default Todo;