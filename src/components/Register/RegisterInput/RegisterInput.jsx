import React from 'react';
import './RegisterInput.css';

const RegisterInput = (props) => {
    return (
        <div className="RegisterInput">
            <input 
            name={props.name}
            value={props.value}
            onChange={props.change}
            placeholder={props.ph}
            type="text"
            className="register-input"
            />
        </div>
    )
}

export default RegisterInput;