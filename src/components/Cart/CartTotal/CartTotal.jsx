import React from 'react';
import './CartTotal.css';

const CartTotal = () => {
    return (
        <div className="CartTotal-container">
            <p className="subtotal">subtotal</p>
            <p>$ <span>79.99</span></p>
        </div>
    )
}

export default CartTotal;