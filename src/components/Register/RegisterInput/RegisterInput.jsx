import React from 'react';
import './RegisterInput.css';

const RegisterInput = (props) => {
    return (
        <div className="RegisterInput">
            <label className="registerLabel" htmlFor={props.name}>{props.label}</label>
            <input 
            name={props.name}
            value={props.value}
            onChange={props.change}
            placeholder={`Please enter ${props.ph}`}
            type="text"
            className="register-input"
            />
        </div>
    )
}

export default RegisterInput;