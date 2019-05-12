import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <div className="Nav-logo">
              <h3>Tortuga</h3>
            </div>
            <div className="user-menu">
            {/* <Button 
                text="login" 
                color="green" 
                textColor="white"
            /> */}
            <p>cart</p>
            </div>
            <div>
              <Link to="/user/cart"><i className="fas fa-shopping-cart">(5)</i></Link>
            </div>
        </div>
    )
}

export default Navbar;


// hambuger menu
//<i class="fas fa-bars"></i>