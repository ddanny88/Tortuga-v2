import React from 'react';
import './MenuItem.css';

const MenuItem = (props) => {
    return (
        <div className="MenuItem">
            <p className="Menu-item-text">{props.text}</p>
        </div>
    )
}

export default MenuItem;