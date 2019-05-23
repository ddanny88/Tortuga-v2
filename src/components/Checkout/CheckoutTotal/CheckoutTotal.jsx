import React, { useEffect, useState } from 'react';
import './CheckoutTotal.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';


const CheckoutTotal = (props) => {
    const [subtotal, setSubtotal] = useState(0);
    const[tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        getSubtotal();
    }, []);

    useEffect(() => {
        let x = calcTax(subtotal);
        setTax(x);
    });

    useEffect(() => {
        setTotal(tax + subtotal);
    });

    const calcTax = subtotal => {
        return  parseInt((subtotal * 0.0825).toFixed(2));
    }

    const getSubtotal = async() => {
        let response = await axios.get('/api/cart/subtotal')
        setSubtotal(response.data);
    }


    return (
        <div className="CheckoutTotal">
            {/* ORDER SUMMARY  */}
           <div className="Checkout-sub">Subtotal: <span className="T">${subtotal}</span></div>
           <div className="Checkout-tax">Tax: <span className="T">${tax}</span></div>
           <hr className="Checkout-rule"/>
           <div className="Checkout-total">Total: <span className="T">${total}</span></div>
           <Link to="/user/cart" style={{textDecoration: 'none', color:'black'}}>
            <div className="checkout-back-container">
                <i className="fas fa-chevron-left"></i>
                <p className="Checkout-back">Back to Cart</p>
            </div>
           </Link>
        </div>
    )
}

const mapStateToProps = state => {
    const { cart } = state.productReducer;
    return {
        cart
    }
}

export default connect(mapStateToProps)(CheckoutTotal);