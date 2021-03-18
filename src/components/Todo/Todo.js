import React from 'react';
import Icon from '../Icon/Icon';
import '../../assets/sass/components/Todo/_todo.scss';

const Todo = ({text, task, todos, setTodos, type}) => {
    const removeHandler = () => {
        setTodos(todos.filter((element) => element.id !== task.id));
    }

    const completedHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === task.id){
                let tempPriority = task.priority;
                return{
                    ...item, priority: "DONE", prevPriority: tempPriority
                }
            }
            return item;
        }));
    }

    const pinHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === task.id){
                let tempPriority = task.priority;
                return{
                    ...item, priority: "PINNED", prevPriority: tempPriority
                }
            }
            return item;
        }));
    }

    const undoHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === task.id){
                let tempPriority = task.prevPriority;
                console.log(task.prevPriority);
                return{
                    ...item, priority: tempPriority, prevPriority: "DONE"
                }
            }
            return item;
        }));
    }

    const unpinHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === task.id){
                let tempPriority = task.prevPriority;
                console.log(task.prevPriority);
                return{
                    ...item, priority: tempPriority, prevPriority:"PINNED"
                }
            }
            return item;
        }));
    }

    return(
        <div className="task-container">
            <p>{text}</p>
            <div>
                <Icon clicked={removeHandler} iconType="trash" btnType="task" />
                {type!=="done" ? <Icon clicked={completedHandler} iconType="check" btnType="task" />
                                : <Icon clicked={undoHandler} iconType="undo" btnType="task" />}
                {type!=="pinned" ? <Icon clicked={pinHandler} iconType="pin" btnType="task" />
                                : <Icon clicked={unpinHandler} iconType="unpin" btnType="task" />}
            </div>
        </div>
    );
}

export default Todo;