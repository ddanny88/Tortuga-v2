import React from 'react';
import './ShippingInput.css';

const ShippingIput = (props) => {
    const {name } = props;
    return (
        <div className="S-input">
            <label className="S-label" htmlFor={props.name}>{props.label}</label>
            <input 
                name={name}
                value={props.value}
                onChange={props.change}
                className="ShippingInput"
                type="text"
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default ShippingIput