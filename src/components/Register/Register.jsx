import React, { useState } from 'react';
import './register.css';
import { Link, Redirect } from 'react-router-dom';
import RegisterInput from './RegisterInput/RegisterInput';
import { updateFirstName, updataPassword, updateEmail, updateLastName, updateUsername, clearRegisterInput, updateLoggedIn } from '../../ducks/reducers/userReducer';
import { connect } from 'react-redux';
import RegisterButton from './RegisterButton/RegisterButton';
import axios from 'axios';

const Register = (props) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "firstName") props.updateFirstName(value);
        if (name === "lastName") props.updateLastName(value);
        if (name === "username") props.updateUsername(value);
        if (name === "password") props.updataPassword(value);
        if (name === "email") props.updateEmail(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, username, password, email } = props;
        let registerData = { firstName, lastName, username, password, email };
        try {
            let response = await axios.post('/api/user/register', registerData);
            console.log(response);
            if (response.status === 201) {
                props.updateLoggedIn(true);
                props.clearRegisterInput();
            }
        } catch (e) {
            console.log('Error: ', e);
        }
    }


    const { firstName, lastName, username, password, email, isLoggedIn } = props;
    return (
        <div className="register">
        { isLoggedIn && <Redirect to="/" /> }
           <div>
               <h2 className="account-txt">create account</h2>
               <hr className="register-rule"/>
                <form className='register-form' onSubmit={handleSubmit}>
                    <RegisterInput name="firstName" value={firstName} change={handleChange} ph="First Name" />
                    <RegisterInput name="lastName" value={lastName} change={handleChange} ph="Last Name" />
                    <RegisterInput name="username" vlaue={username} change={handleChange} ph="Username" />
                    <RegisterInput name="password" value={password} change={handleChange} ph="Password" />
                    <RegisterInput name="email" value={email} change={handleChange} ph="Email"/>

                    <RegisterButton />
                    <p className="returning-user">Returning Custoner?<Link to="/user/login" style={{textDecoration: 'none', color: 'black'}}><span> Login</span></Link></p>
                </form>
           </div>
        </div>
    )
}


const mapStateToProsp = state => {
    const { firstName, lastName, email, username, password, isLoggedIn } = state.userReducer;
    return {
        firstName, 
        lastName,
        email,
        username,
        password,
        isLoggedIn
    }
}


export default connect(mapStateToProsp, { updateFirstName, updataPassword, updateEmail, updateLastName, updateUsername, clearRegisterInput, updateLoggedIn })(Register);
