import React from 'react';
import './EmptyCart.css';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <div className ="EmptyCart">
                <div className="cart-circle">
                <Link to="/shop"><i className="fas fa-cart-arrow-down" id="empyCart-cart"></i></Link>
                </div>
            <h2 className="EmptyCartTxt">Your Cart is empty...</h2>
            <p>Click on the cart to start shopping!</p>
        </div>
    )
}

export default EmptyCart;

