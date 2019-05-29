import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updataPassword, updateUsername, clearLoginInput } from '../../ducks/reducers/userReducer';
import { updateSideMenu, updateIsLoggedIn } from '../../ducks/reducers/productReducer'
import './Login.css';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import InputField from '../InputField/InputField';
import LoginButton from './LoginButton/LoginButton';


const Login = (props) => {
    const[error, setError] =useState('')
    const { username, password } = props;

    let icons = [
        "fas fa-user",
        "fas fa-lock"
    ]

    const handleChange = (e) => {
        const {name, value} = e.target;
        name === 'username' && props.updateUsername(value);
        name ===  'password' && props.updataPassword(value);
    }

    const handleLogin = async (e) => {
        const { username, password } = props;
        e.preventDefault();
        let response = await axios.post('/api/user/login', {username, password});
        console.log(response)
        if (!response.data.error) {
            props.updateIsLoggedIn(true);
            setError(null);
        } else {
            setError(response.data.error);
        }
        props.clearLoginInput();
    }

    return (
        <div className="Login">
            { props.isLoggedIn && <Redirect to="/" />}
           <div>
               <h1 className="Login-logo">TORTUGA</h1>
               <hr className="logo-rule"/>
            <form className="Login-form" onSubmit={handleLogin}>
                <InputField 
                    name="username"
                    value={username}
                    change={handleChange}
                    placeholder="  username"
                    type="text"
                    icon={icons[0]}
                    label="Username"
                />
                <InputField 
                    name="password"
                    value={password}
                    change={handleChange}
                    placeholder="  password"
                    type="password"
                    icon={icons[1]}
                    label="Password"
                />
                <br/>
                { error && <p className="loginError">{error}</p> }
                <LoginButton text="LOGIN"/>
                <Link to="/user/register" style={{textDecoration: 'none'}} className="SignUpText"><p> Sign Up</p></Link>
            </form>
           </div>
        </div>
    )
}

const mapStateToProps = state => {
    const { username, password } = state.userReducer;
    const { menuIsOpen, isLoggedIn } = state.productReducer;
    return {
        username,
        password,
        menuIsOpen,
        isLoggedIn
    };
}

export default connect(mapStateToProps, { updataPassword, updateUsername, clearLoginInput, updateSideMenu, updateIsLoggedIn })(Login);