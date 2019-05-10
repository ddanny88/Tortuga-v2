import React from 'react';
import { connect } from 'react-redux';
import { updataPassword, updateUsername, clearLoginInput } from '../../ducks/reducers/userReducer';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import InputField from '../InputField/InputField';
import LoginButton from './LoginButton/LoginButton';


/**
 * login button shoud redirect to the Home page and triggering account setting. 
*/


const Login = (props) => {

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
        if (response.status === 200) console.log('redirect to home');
        props.clearLoginInput();
    }


    return (
        <div className="Login">
           <div>
               <div>(Logo Here)</div>
            <form className="Login-form" onSubmit={handleLogin}>
                <InputField 
                    name="username"
                    value={username}
                    change={handleChange}
                    placeholder="  username"
                    type="text"
                    icon={icons[0]}
                />
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

const mapStateToProps = state => {
    const { username, password } = state.userReducer;
    return {
        username,
        password
    };
}

export default connect(mapStateToProps, { updataPassword, updateUsername, clearLoginInput })(Login);