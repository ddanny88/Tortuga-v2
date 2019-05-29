import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.css'
import MenuItem from './MenuItem/MenuItem';
import MenuButton from './MenuButton/MenuButton';
import { connect } from 'react-redux';
import { updateSideMenu, updateClicked, updateIsLoggedIn } from '../../ducks/reducers/productReducer'
import axios from 'axios';



const SideMenu = (props) => {

    useEffect(() => {
        const getData = async () => {
            let response = await axios.get('/api/get/user');
            if (response.data.user) {
                props.updateIsLoggedIn(true);
            }
        }
        getData();
    }, [])

    const linkStyle = {
        textDecoration: 'none'
    }

    let icons = [
        "fas fa-home",
        "fas fa-glass-martini-alt",
        "fas fa-cart-arrow-down",
        "fas fa-user-circle"

    ]

    const closeMenu = () => {
        props.updateSideMenu(false);
    }

    const handleClick = () =>{
        props.updateClicked(true);
        props.updateSideMenu(false);
    }

    const handleMenuItemClick = () => {
        props.updateSideMenu(false);
    }

    const logout = async() => {
        let response = await axios.get('/api/user/logout');
        console.log(response)
        props.updateIsLoggedIn(false);
    }



    return (
        <div id="SideMenu" className={props.menuStatus ? "open" : "close"}>
            <span onClick={closeMenu} className="SideMenu-close">&times;</span>
            <div className="SideMenu-user-menu">
                <ul className="SideMenu-list">
                    <Link 
                        style={linkStyle} 
                        to="/">
                        <MenuItem 
                            click={handleMenuItemClick}
                            text="Home" 
                            icon={icons[0]} 
                        />
                    </Link>

                    <Link 
                        style={linkStyle}
                        to="/shop">
                        <MenuItem 
                            click={handleMenuItemClick}
                            text="Shop" 
                            icon={icons[1]}
                        />
                    </Link>

                    <Link
                        style={linkStyle}
                        to='/user/cart'>
                        <MenuItem 
                            click={handleMenuItemClick}
                            text="Cart"
                            icon={icons[2]} 
                    />
                    </Link>

                    <Link
                        style={linkStyle}
                        to="/user/account">
                        <MenuItem 
                            click={handleMenuItemClick}
                            text="Account" 
                            icon={icons[3]}
                        />
                    </Link>
                </ul> 
                <br/>
                { !props.isLoggedIn ? <Link to="/user/login"><MenuButton login={handleClick} text='LOGIN'/></Link> : 
                <MenuButton logout={logout} text="LOGOUT"/>
                }
                <Link style={linkStyle}to="/user/register"><p onClick={handleMenuItemClick} className="register-text">Sign Up</p></Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    const { menuIsOpen, loginClicked, isLoggedIn } = state.productReducer;
    return {
        menuIsOpen, 
        loginClicked,
        isLoggedIn
    }
}

export default connect(mapStateToProps, { updateSideMenu, updateClicked, updateIsLoggedIn })(SideMenu);