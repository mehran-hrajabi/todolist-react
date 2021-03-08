import React from 'react';

const Icon = ({clicked, style}) => {
    return(
        <button onClick={clicked}>
            <i className={style}></i>
        </button>
    )
}

export default Icon;