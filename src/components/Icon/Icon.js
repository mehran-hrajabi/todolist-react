import React, { useEffect, useState } from 'react';
import '../../assets/sass/components/Icon/_icon.scss';

const Icon = ({clicked, iconType, btnType}) => {
    const [btnStyle, setBtnStyle] = useState("");
    const [iconStyle, setIconStyle] = useState("");

    useEffect(() => {
        switch (btnType) {
            case "submit":
                setBtnStyle("submit-iconBtn");
                break;
        
            case "task":
                setBtnStyle("task-iconBtn");
                break;
            default:
                break;
        }

        switch (iconType) {
            case "submit":
                setIconStyle("fas fa-plus-square fa-2x");
                break;
            case "check":
                setIconStyle("fas fa-check fa-2x");
                break;
            case "trash":
                setIconStyle("fas fa-trash fa-2x");
                break;
            case "pin":
                setIconStyle("fas fa-thumbtack fa-2x");
                break;
            case "undo":
                setIconStyle("fas fa-undo-alt fa-2x");
                break;
            case "unpin":
                setIconStyle("fas fa-times fa-2x");
                break;
            default:
                break;
        }
    },[btnType, iconType]);

    return(
        <button className={btnStyle} onClick={clicked}>
            <i className={iconStyle}></i>
        </button>
    )
}

export default Icon;