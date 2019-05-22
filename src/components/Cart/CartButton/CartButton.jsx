import React from 'react';
import './CartButton.css';

const CartButton = (props) => {
    return (
        <div>
            <button className="Checkout" onClick={props.toCheckout}>
                checkout
            </button>
        </div>
    )
}

export default CartButton;