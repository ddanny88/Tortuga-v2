import React, { useEffect } from 'react';
import './Cart.css';
import CartItem from './CartItem/CartItem';
import CartButton from './CartButton/CartButton';
import CartTotal from './CartTotal/CartTotal';
import { connect } from 'react-redux';
import { getCart } from '../../ducks/reducers/productReducer';
import EmptyCart from './EmptyCart/EmptyCart';

/**
 *  Cart is responsible for checking if multiple items in the cart contian the same product id. if item in cart, dont dipslay cartitem component, instead increment quantitity and pass it down to the quantity tracker via props. 
 * 
 * 
 * 
*/


const Cart = (props) => {

    useEffect(() => {
        props.getCart();
    },[])

    const getCartLength = () => {
        let c_length = props.cart.reduce((acc, el) => {
            return acc + el.quantity;
        }, 0);
        return c_length;
    }


    return (
        <div className="Cart">
            <div className="Cart-review">
                <h4>REVIEW YOUR CART ( {props.cart.length === 0 ? 0 : getCartLength()} )</h4>
            </div>
                {
                    props.cart.length > 0 ? 
                    props.cart.map( item => (
                        <CartItem 
                        quan={0}
                        item={item}
                        key={item.id}
                        img={item.img}
                        name={item.name}
                        size={item.size}
                        price={item.price}
                        />
                    ))
                    :
                    <EmptyCart />
                }  
                {
                    props.cart.length > 0 &&
                    <>
                    <div className="Cart-total">
                        <CartTotal />
                    </div>
                    <div className="CheckoutButton">
                        <CartButton />
                    </div>
                    <p className="continueShopping">Continue Shopping</p>
                    </>
                }
        </div>
    )
}

const mapStateToProps = state => {
    const { cart } = state.productReducer;
    return {
        cart
    }
}
export default connect(mapStateToProps, { getCart })(Cart);
