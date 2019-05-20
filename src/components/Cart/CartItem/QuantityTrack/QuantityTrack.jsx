import React  from 'react';
import './Quantity.css';
import { connect } from 'react-redux';
import { addToCart, getCart } from '../../../../ducks/reducers/productReducer';
import axios from 'axios';


/**
 * check if the productID is already in the cart, if so, add to the quantity and recalculate the total price. 
 * if not in cart, add to cart
 * 
 * 
 * when the munus is clicked, if quantity > 1, decriment quantity and recalculate price. if quantity === 1, remove item from cart..
 * 
 * 
 * 
 * each quantityTrack needs to hold its own quantity state to be displyaed. NO shared centeral state
*/


const QuantityTrack = (props) => {


    const incrementItem = () => {
        const { item } = props;
        props.addToCart(item)
    }

    // check this with dummy data
    const decrimentItem = async () => {
        const { item } = props;
        let response = await axios.delete(`/api/cart/${item._id}`);
        props.getCart();
    }

    // const getCartLength = () => {
    //     let c_length = props.cart.reduce((acc, el) => {
    //         return acc + el.quantity;
    //     }, 0);
    //     return c_length;
    // }
    const getItemQuantity = () => {
        const { item } = props;
        return item.quantity;
    }

    console.log("HERE",props.cart)
    return (
        <div className="Q-tracker-container">
            <div className="square" onClick={decrimentItem}>
                <i className="fas fa-minus"></i>
            </div>
            <div className="quan-num">
                <span>{props.cart.length === 0 ? 0 : getItemQuantity()}</span>
            </div>
            <div className="square" onClick={incrementItem}>
                <i className="fas fa-plus"></i>
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

export default connect(mapStateToProps, { addToCart, getCart })(QuantityTrack);