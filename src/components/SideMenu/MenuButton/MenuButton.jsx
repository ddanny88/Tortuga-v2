import React from 'react';
import './MenuButton.css';
import { connect } from 'react-redux';



const MenuButton = (props) => {
    return (
        <div className="MenuButton">
            <button onClick={ props.isLoggedIn ? props.logout : props.login } className="MenuButton-main">{ props.text }</button>
        </div>
    )
}

const mapStateToProps = state => {
    const { isLoggedIn} = state.productReducer;
    return {
        isLoggedIn
    }
}

export default connect(mapStateToProps)(MenuButton);