import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
import { addToCart } from '../../ducks/reducers/productReducer';
import { connect } from 'react-redux';

/**
 * 
 * @param {*} props
 * 
 *  item
    key,
    name,
    img,
    price,
    size
*/




const Item = (props) => {

    const addItemToCart = () => {
        const { item } = props;
        props.addToCart(item);
    }

    return (
        <div className="Item">
            <div className="Item-img-container">
            <Link to={`/products/${props.name}`}>
                <img 
                className="Item-img"
                src={props.img} 
                alt={props.name}
                />
            </Link>
            </div>

            <div>
                <h4 className="Item-name">{props.name}</h4>
                <div className="Item-user-checkout">
                    <p className="Item-price">${props.price}</p>
                    <p className="size">{props.size}</p>
                </div>
                <i onClick={addItemToCart} className="fas fa-plus-circle"></i>
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

export default connect(mapStateToProps, { addToCart })(Item);