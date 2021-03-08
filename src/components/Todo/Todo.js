import React from 'react';

const Todo = ({text, task, todo, setTodo, done, setDone}) => {
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
    return(
        <div>
            <li>{text}</li>
            <button onClick={removeHandler}>
                <i className="fas fa-trash"></i>
            </button>
            <button onClick={completedHandler}>
                <i className="fas fa-check"></i>
            </button>
        </div>
    )
}

export default Todo;