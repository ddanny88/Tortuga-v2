import React from 'react';
import './CheckoutTotal.css';


const CheckoutTotal = (props) => {
    return (
        <div className="CheckoutTotal">
           <div>Subtotal: <span></span></div>
           <div>Tax: <span></span></div>
           <div>Total: <span></span></div>
        </div>
    )
}

export default CheckoutTotal;