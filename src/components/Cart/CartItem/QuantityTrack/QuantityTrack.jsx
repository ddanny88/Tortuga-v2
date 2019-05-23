import React  from 'react';
import './Quantity.css';
import { connect } from 'react-redux';
import { addToCart, getCart } from '../../../../ducks/reducers/productReducer';
import axios from 'axios';


const QuantityTrack = (props) => {

    const incrementItem = () => {
        const { item } = props;
        props.addToCart(item)
    }

    const decrimentItem = async () => {
        const { item } = props;
        let response = await axios.delete(`/api/cart/${item._id}`);
        props.getCart();
        return response;
    }

    const getItemQuantity = () => {
        const { item } = props;
        return item.quantity;
    }

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