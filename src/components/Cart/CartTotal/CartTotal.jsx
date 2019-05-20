import React from 'react';
import './CartTotal.css';
import { connect } from 'react-redux';



/**
 * 
*/


const CartTotal = (props) => {
    console.log(props)
    return (
        <div className="CartTotal-container">
            <p className="subtotal">subtotal</p>
            <p>$ <span>{ 0.00 }</span></p>
        </div>
    )
}

const mapStateToProps = state => {
    const { cartSubtotal } = state.productReducer;
    return {
        cartSubtotal
    }
}

export default connect(mapStateToProps)(CartTotal);