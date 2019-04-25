import React from 'react';
import './MenuButton.css';


const MenuButton = (props) => {
    return (
        <div className="MenuButton">
            <button className="MenuButton-main"><i className="fas fa-user-alt"></i>{props.text}</button>
        </div>
    )
}

export default MenuButton;