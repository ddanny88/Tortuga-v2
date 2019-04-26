import React from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.css'
import MenuItem from './MenuItem/MenuItem';
import MenuButton from './MenuButton/MenuButton';


const SideMenu = (props) => {
   return (
       <div id="SideMenu" className={props.menuStatus ? "open" : "close"}>
        <span onClick={props.toggle} className="SideMenu-close">&times;</span>
        <div className="SideMenu-user-menu">
            <ul className="SideMenu-list">
                <Link to="/"><MenuItem text="Home" /></Link>
                <MenuItem text="Account" />
                <Link to="/shop"><MenuItem text="Shop" /></Link>
                <MenuItem text="Cart" />
            </ul> 
            <br/>
            <MenuButton text='LOGIN'/>
        </div>
       </div>
   )
}

export default SideMenu;