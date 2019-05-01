import React from 'react';
import './LoginButton.css';



const LoginButton = (props) => {
    return (
        <div className="LoginButton">
            <button className="login-form-btn">{props.text}</button>
        </div>
    )
}

export default LoginButton;