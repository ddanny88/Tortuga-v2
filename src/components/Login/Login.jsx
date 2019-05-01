import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import InputField from '../InputField/InputField';
import LoginButton from './LoginButton/LoginButton';


/**
 * login button shoud redirect to the gome page and triggering account setting. 
 */


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let icons = [
        "fas fa-user",
        "fas fa-lock"
    ]

    const handleChange = (e) => {
        const {name, value} = e.target;
        name === 'username' && setUsername(value);
        name ===  'password' && setPassword(value);
    }
    
    return (
        <div className="Login">
           <div>
               <h2 className="login-welcome">Welcome back!</h2>
            <form className="Login-form">
            <i className="fas fa-glass-cheers"></i>
                <InputField 
                    name="username"
                    value={username}
                    change={handleChange}
                    placeholder="  username"
                    type="text"
                    icon={icons[0]}
                />
                <label htmlFor="password"></label>
                <InputField 
                    name="password"
                    value={password}
                    change={handleChange}
                    placeholder="  password"
                    type="password"
                    icon={icons[1]}
                />
                <br/>
                <LoginButton text="LOGIN"/>
                <Link to="/" style={{textDecoration:'none'}}><p className="login-cancel">Cancel</p></Link>
            </form>
           </div>
        </div>
    )
}

export default Login;