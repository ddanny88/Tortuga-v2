import React, { useEffect } from 'react';
import './Checkout.css';
import { connect } from 'react-redux';
import { getCart } from '../../ducks/reducers/productReducer';
import CheckoutItem from './CheckoutItem/CheckoutItem';


const Checkout = (props) => {

    useEffect(() => {
        props.getCart()
    }, [])


    let displayCheckoutItems = props.cart.map( item => (
        <CheckoutItem 
            name={item.name}
            img={item.img}
            size={item.size}
            price={item.price}
            quantity={item.quantity}
        />
    ));

    return (
        <div className="Checkout-container">
            <div className="Checkout-order-summary"> Order Summary</div>
                <div className="Checkout-Item-list">
                    { displayCheckoutItems }
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

export default connect(mapStateToProps, {getCart})(Checkout);