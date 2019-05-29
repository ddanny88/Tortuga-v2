import React from 'react';
import './ReviewTotal.css';


const ReviewTotal = (props) => {
    return (
        <div className="totalReview">
            <p><span className="total_span">Subtotal</span>$</p>
            <p><span className="total_span">Tax</span>$</p>
            <p><span className="total_span">Total</span>$</p>
        </div>
    )
}

export default ReviewTotal;