    
import React from 'react';
import './Button.css';


/**
 * 
 * @param props: text, color, textColor, fontSize
 * 
 */

const Button = (props) => {
    const { text, color, textColor, fontSize } = props;
    return (
        <div className="Button">
            <button 
                style={{background: color, color: textColor, fontSize: fontSize }}
                className="Button-main">{ text }
            </button>
        </div>
    )
}

export default Button;