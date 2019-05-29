import React from 'react';
import './MenuItem.css';

const MenuItem = (props) => {
    return (
        <div onClick={props.click} className="MenuItem">
            <i className={props.icon}></i>
            <p className="Menu-item-text">{props.text}</p>
        </div>
    )
}

export default MenuItem;