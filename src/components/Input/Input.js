import React, { useState } from 'react';

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
                    ...high, {text:inputText, priority:priority, id:inputText}
                ]);
                break;
            case "3":
                setMid([
                    ...mid, {text:inputText, priority:priority, id:inputText}
                ]);
                break;
            case "4":
                setLow([
                    ...low, {text:inputText, priority:priority, id:inputText}
                ]);
                break;
            default:
                setHigh([
                    ...high, {text:inputText, priority:priority}
                ]);
                break;
        }
        setInputText("");
    }

    const setPriorityHandler = (e) => {
        setPriority(e.target.value);
    }

    return(
        <div>
            <input type="text" value={inputText} onChange={inputTextHandler} />
            <button type="submit" onClick={setTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <select onChange={setPriorityHandler}>
                <option value="">Select priority</option>
                <option value={2}>High</option>
                <option value={3}>Mid</option>
                <option value={4}>Low</option>
            </select>
        </div>
    );
}

export default Input;