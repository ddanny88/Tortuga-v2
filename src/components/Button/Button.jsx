import React from 'react';
import './Button.css';

const Button = (props) => {
    const { text, color, textColor } = props;
    return (
        <div className="Button">
            <button 
            style={{background: color, color: textColor }}
            className="Button-main">{ text }
            </button>
        </div>
    )
}

export default Button;