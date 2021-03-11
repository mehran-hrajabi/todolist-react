import React from 'react';
import Icon from '../Icon/Icon';
import '../../assets/sass/components/Todo/_todo.scss';

const Todo = ({text, task, todo, setTodo, done, setDone, pinned, setPinned, high, setHigh, mid, setMid, low, setLow, isDoneList, isPinnedList}) => {
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

    const undoHandler = () => {
        setDone(done.map((item) => {
            if(item.id === task.id){
                addItemHandler(item);
            }
            return item;
        }));
        removeHandler();
    }

    const unpinHandler = () => {
        setPinned(pinned.map((item) => {
            if(item.id === task.id){
                addItemHandler(item);
            }
            return item;
        }));
        removeHandler();
    }

    const addItemHandler = (item) => {
        switch (item.priority) {
            case "HIGH":
                setHigh([
                    ...high, task
                ]);
                break;
            case "MID":
                setMid([
                    ...mid, task
                ]);
                break;    
            case "LOW":
                setLow([
                    ...low, task
                ]);    
                break;    
            default:
                setHigh([
                    ...high, task
                ]);    
                break;
        }
    }

    return(
        <div className="task-container">
            <p>{text}</p>
            <div>
                <Icon clicked={removeHandler} iconType="trash" btnType="task" />
                {!isDoneList? <Icon clicked={completedHandler} iconType="check" btnType="task" />
                            : <Icon clicked={undoHandler} iconType="undo" btnType="task" />}
                {!isPinnedList? <Icon clicked={pinHandler} iconType="pin" btnType="task" />
                            : <Icon clicked={unpinHandler} iconType="unpin" btnType="task" />}
            </div>
        </div>
    )
}

export default Todo;