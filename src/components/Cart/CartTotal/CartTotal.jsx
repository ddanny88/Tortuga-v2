import React from 'react';
import './CartTotal.css';


const CartTotal = (props) => {
    return (
        <div className="CartTotal-container">
            <p className="subtotal">subtotal</p>
            <p>$ <span>{ props.subtotal }</span></p>
        </div>
    )
}


export default CartTotal;