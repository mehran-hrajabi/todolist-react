import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Icon from '../Icon/Icon';
import '../../assets/sass/components/Input/_input.scss';

const Input = ({low, setLow, mid, setMid, high, setHigh}) => {
    const [inputText, setInputText] = useState("");
    const [priority, setPriority] = useState();

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const setTodoHandler = (e) => {
        e.preventDefault();
        switch (priority) {
            case "HIGH":
                setHigh([
                    ...high, {text:inputText, priority:priority, id: uuidv4()}
                ]);
                break;
            case "MID":
                setMid([
                    ...mid, {text:inputText, priority:priority, id: uuidv4()}
                ]);
                break;
            case "LOW":
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
            <input type="text" placeholder="Task description" maxLength="75" value={inputText} onChange={inputTextHandler} />
            <select onChange={setPriorityHandler}>
                <option value="">Select priority</option>
                <option value="HIGH">High</option>
                <option value="MID">Mid</option>
                <option value="LOW">Low</option>
            </select>
            <Icon clicked={setTodoHandler} iconType="submit" btnType="submit" />
        </div>
    );
}

export default Input;