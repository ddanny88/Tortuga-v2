import React from 'react';
import './Cart.css';
import CartItem from './CartItem/CartItem';
import CartButton from './CartButton/CartButton';
import CartTotal from './CartTotal/CartTotal';


/**
 *  makes a call to getCart endpoint and gets the cart from the server.
 */



const Cart = (props) => {
    return (
        <div className="Cart">
            <div className="Cart-review">
                <h4>REVIEW YOUR CART ( 5 )</h4>
            </div>
                <CartItem />
                <CartItem />
                <CartItem />
            <div className="Cart-total">
                <CartTotal />
            </div>
            <div className="CheckoutButton">
                <CartButton />
            </div>
            <p className="continueShopping">Continue Shopping</p>
        </div>
    )
}

export default Cart;