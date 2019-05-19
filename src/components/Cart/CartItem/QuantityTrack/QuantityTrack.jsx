import React from 'react';
import './Quantity.css';


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
        console.log('+1')
    }

    const decrimentItem = () => {
        console.log('-1')
    }


    return (
        <div className="Q-tracker-container">
            <div className="square" onClick={decrimentItem}>
                <i className="fas fa-minus"></i>
            </div>
            <div className="quan-num">
                <span>5</span>
            </div>
            <div className="square" onClick={incrementItem}>
                <i className="fas fa-plus"></i>
            </div>
        </div>
    )
}

export default QuantityTrack;