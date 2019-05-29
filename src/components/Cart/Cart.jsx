import React, { useEffect, useState } from 'react';
import './Cart.css';
import CartItem from './CartItem/CartItem';
import CartButton from './CartButton/CartButton';
import CartTotal from './CartTotal/CartTotal';
import { connect } from 'react-redux';
import { getCart } from '../../ducks/reducers/productReducer';
import { Link } from 'react-router-dom';
import EmptyCart from './EmptyCart/EmptyCart';
import uuid from 'uuid/v4';

import axios from 'axios';



const Cart = (props) => {
    const [subtotal, setSubtotal] = useState('0.00');

    useEffect(() => {
        props.getCart();        
    },[])

    useEffect(() => {
        getSubtotal();
    });

    const getCartLength = () => {
        let c_length = props.cart.reduce((acc, el) => {
            return acc + el.quantity;
        }, 0);
        return c_length;
    }

    const getSubtotal = async() => {
        let response = await axios.get('/api/cart/subtotal')
        setSubtotal(response.data);
    }

    // const toCheckout = async () => {
    //     let response = await axios.get('/api/get/user');
    //     console.log(response)
    //     if (response.data.user) {
    //         setUserLoggedIn(true);
    //     } else {
    //         setUserLoggedIn(false)
    //     }
    // }


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
                        key={uuid()}
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
                        <CartTotal subtotal={subtotal}/>
                    </div>
                    <div className="CheckoutButton">
                        <Link to="/user/cart/checkout"><CartButton /></Link>
                    </div>
                   <Link to="/shop" style={{textDecoration: 'none', color: 'black'}}><p className="continueShopping">Continue Shopping</p></Link>
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
