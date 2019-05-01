import React from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.css'
import MenuItem from './MenuItem/MenuItem';
import MenuButton from './MenuButton/MenuButton';



const SideMenu = (props) => {

    const linkStyle = {
        textDecoration: 'none'
    }

    let icons = [
        "fas fa-home",
        "fas fa-glass-martini-alt",
        "fas fa-cart-arrow-down",
        "fas fa-user-circle"

    ]

    return (
        <div id="SideMenu" className={props.menuStatus ? "open" : "close"}>
            <span onClick={props.toggle} className="SideMenu-close">&times;</span>
            <div className="SideMenu-user-menu">

                <ul className="SideMenu-list">
                    <Link 
                        style={linkStyle} 
                        to="/">
                        <MenuItem 
                            text="Home" 
                            icon={icons[0]} 
                        />
                    </Link>

                    <Link 
                        style={linkStyle}
                        to="/shop">
                        <MenuItem 
                            text="Shop" 
                            icon={icons[1]}
                        />
                    </Link>

                    <Link
                        style={linkStyle}
                        to='/cart'>
                        <MenuItem 
                            text="Cart"
                            icon={icons[2]} 
                    />
                    </Link>

                    <Link
                        style={linkStyle}
                        to="/user/account">
                        <MenuItem 
                            text="Account" 
                            icon={icons[3]}
                        />
                    </Link>
                </ul> 
                <br/>
                <Link to="/user/login"><MenuButton text='LOGIN'/></Link>
                <Link style={linkStyle}to="/user/register"><p className="register-text">Sign Up</p></Link>
            </div>
        </div>
    )
}

export default SideMenu;