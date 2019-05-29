import React from 'react';
import './inputField.css';

/**
 * 
 * @param {*} props
 *  value,
 *  name,
 *  change,
 *  placeholder,
 *  type,
 *  icon
 */

const InputField = (props) => {
    return (
        <div className="InputField">
            <div>
            <i className={props.icon}></i>
            <label htmlFor={props.name} className="InputField-label">{props.label}</label>
            </div>
            <input 
                className="form-input"
                type={props.type}
                value={props.value}
                name={props.name}
                onChange={props.change}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default InputField;