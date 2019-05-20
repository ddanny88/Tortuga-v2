import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import SideMenu from '../SideMenu/SideMenu'
import { connect } from 'react-redux'



const Navbar = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleToggle = () => {
    setMenuIsOpen(!menuIsOpen);
  }
  const getCartLength = () => {
    let c_length = props.cart.reduce((acc, el) => {
        return acc + el.quantity;
    }, 0);
    return c_length;
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
              <Link to="/user/cart"><i className="fas fa-shopping-cart"><span className="Nav-itemDisplay">({props.cart.length === 0 ? 0 : getCartLength()})</span></i></Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
  const { cart } = state.productReducer;
  return {
    cart
  }
}

export default connect(mapStateToProps)(Navbar);


