import React from 'react';
import '../../assets/sass/components/Backdrop/_backdrop.scss';

const Backdrop = ({backdropAction}) => {
    return <div className="backdrop" onClick={backdropAction}></div>
}

export default Backdrop;