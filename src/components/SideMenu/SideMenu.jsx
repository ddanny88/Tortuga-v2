import React, { useState } from 'react';
import './SideMenu.css'
import MenuItem from './MenuItem/MenuItem';
import MenuButton from './MenuButton/MenuButton';


const SideMenu = (props) => {
    const [menuItem, setMenuItem] = useState(['Home', 'Account', 'Shop', 'Cart'])
   return (
       <div id="SideMenu" className={props.menuStatus ? "open" : "close"}>
        <span onClick={props.toggle} className="SideMenu-close">&times;</span>
        <div className="SideMenu-user-menu">
            <ul>
                {menuItem.map( val => <MenuItem text={val} key={val}/>)}
            </ul>
            <br/>
            <MenuButton text='LOGIN'/>
        </div>
       </div>
   )
}

export default SideMenu;