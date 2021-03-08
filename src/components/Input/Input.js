import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Icon from '../Icon/Icon';
import '../../assets/sass/components/Input/_input.scss';

const Input = ({inputText, setInputText, low, setLow, mid, setMid, high, setHigh}) => {
    const [priority, setPriority] = useState();

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const setTodoHandler = (e) => {
        e.preventDefault();
        switch (priority) {
            case "2":
                setHigh([
                    ...high, {text:inputText, priority:priority, id: uuidv4()}
                ]);
                break;
            case "3":
                setMid([
                    ...mid, {text:inputText, priority:priority, id: uuidv4()}
                ]);
                break;
            case "4":
                setLow([
                    ...low, {text:inputText, priority:priority, id: uuidv4()}
                ]);
                break;
            default:
                setHigh([
                    ...high, {text:inputText, priority:priority, id: uuidv4()}
                ]);
                break;
        }
        setInputText("");
    }

    const setPriorityHandler = (e) => {
        setPriority(e.target.value);
    }

    return(
        <div className="task-input">
            <input type="text" placeholder="Task description" value={inputText} onChange={inputTextHandler} />
            <select onChange={setPriorityHandler}>
                <option value="">Select priority</option>
                <option value={2}>High</option>
                <option value={3}>Mid</option>
                <option value={4}>Low</option>
            </select>
            <Icon clicked={setTodoHandler} iconType="submit" btnType="submit" />
        </div>
    );
}

export default Input;