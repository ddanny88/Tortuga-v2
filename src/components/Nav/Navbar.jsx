import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import SideMenu from '../SideMenu/SideMenu'
import { connect } from 'react-redux'
import { getCart, updateSideMenu } from '../../ducks/reducers/productReducer';



const Navbar = (props) => {

  useEffect(() => {
    props.getCart();
  }, []);

  const handleToggle = () => {
    props.updateSideMenu(true)
  }

  const getCartLength = () => {
    let c_length = props.cart.reduce((acc, el) => {
        return acc + el.quantity;
    }, 0);
    return c_length;
  }

    return (
        <div className="nav-container">
            <SideMenu menuStatus={props.menuIsOpen} toggle={handleToggle}/>
            <i className="fas fa-bars" onClick={handleToggle}></i>
            <div className="Nav-logo">
              <h3>Tortuga</h3>
            </div>
            <div className="user-menu">
            <p>cart</p>
            </div>
            <div>
              <Link to="/user/cart"><i className="fas fa-shopping-cart"><span className="Nav-itemDisplay">({ props.cart.length > 0 ? getCartLength() : 0 })</span></i></Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
  const { cart, menuIsOpen } = state.productReducer;
  return {
    cart,
    menuIsOpen
  }
}

export default connect(mapStateToProps, { getCart, updateSideMenu })(Navbar);


