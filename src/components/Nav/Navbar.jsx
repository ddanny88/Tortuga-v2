import React, { useState } from 'react';
import './Nav.css';
import SideMenu from '../SideMenu/SideMenu'
// import Button from '../Button/Button'




const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleToggle = () => {
    setMenuIsOpen(!menuIsOpen);
  }
   
    return (
        <div className="nav-container">
            <SideMenu menuStatus={menuIsOpen} toggle={handleToggle}/>
            <i className="fas fa-bars" onClick={handleToggle}></i>
            <div className="user-menu">
            {/* <Button 
                text="login" 
                color="green" 
                textColor="white"
            /> */}
            <p>cart</p>
            </div>
        </div>
    )
}

export default Navbar;


// hambuger menu
//<i class="fas fa-bars"></i>