import React from 'react';
import './MenuItem.css';

const MenuItem = (props) => {
    return (
        <div className="MenuItem">
            <a href="#">{props.text}</a>
        </div>
    )
}

export default MenuItem;