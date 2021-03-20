import React, { useState } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Icon from '../Icon/Icon';
import '../../assets/sass/components/Modal/_modal.scss';

const Modal = ({setShowModal, task, todos, setTodos}) => {
    const [editedTask, setEditedTask] = useState(task.text);
    const [editedPriority, setEditedPriority] = useState(task.priority);
    const [modalStyle, setModalStyle] = useState("editModal openAnimation");

    const closeModalHandler = () => {
        setModalStyle("editModal closeAnimation");
        const timer = setTimeout(() => {
            setShowModal(prev => !prev);
        },200);
        return () => clearTimeout(timer);
    }

    const inputChangedHandler = (e) => {
        setEditedTask(e.target.value);
    }
    const editPriorityHandler = (e) => {
        setEditedPriority(e.target.value);
    }

    const editTaskInfo = () => {
        setTodos(todos.map((item) => {
            if(item.id === task.id){
                return{
                    ...item, text: editedTask, priority: editedPriority
                }
            }
            return item;
        }));
        closeModalHandler();
    }

    return(
        <>
            <Backdrop backdropAction={closeModalHandler} />
            <div className={modalStyle}>
                <Icon clicked={closeModalHandler} iconType="close" btnType="task" />
                <input onChange={inputChangedHandler} value={editedTask} type="text" autoFocus />
                {task.priority !== "DONE" && task.priority !== "PINNED" ? 
                    (<select onChange={editPriorityHandler} value={editedPriority}>
                        <option value="HIGH">High</option>
                        <option value="MID">Mid</option>
                        <option value="LOW">Low</option>
                    </select>) : null}
                <button onClick={editTaskInfo}>Submit Changes</button>
            </div>
        </>          
    );
}

export default Modal;