import React from 'react';
import './CartItem.css';
import QuantityTrack from './QuantityTrack/QuantityTrack';



const CartItem = (props) => {
    // console.log(props.item)
    return (
        <div className="CartItem-card">
            <img 
                className="CartItem-img"
                src={props.img} 
                alt="product img"
            />
            <div className="CartItem-disc">
                <h4>{props.name}</h4>
                <p>{props.size}</p>
                <p>${props.price}</p>
            </div>

            <div className="CartItem-Quantity">
                <QuantityTrack item={props.item} quan={props.quan}/>
            </div>
        </div>
    )
}

export default CartItem;
