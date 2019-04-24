import React from 'react';
import './MenuButton.css';


const MenuButton = (props) => {
    return (
        <div className="MenuButton">
            <button className="MenuButton-main">{props.text}</button>
        </div>
    )
}

export default MenuButton;