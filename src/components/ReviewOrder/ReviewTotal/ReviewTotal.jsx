import React from 'react';
import './ReviewTotal.css';


const ReviewTotal = (props) => {
   
    return (
        <div className="totalReview">
            <div className="reviewTotalItem">
                <p><span className="total_span">Subtotal</span></p>
                <p className="money">${props.subtotal}</p>
            </div>
            <div className="reviewTotalItem">
                <p><span className="total_span">Tax</span></p>
                <p className="money">${props.tax}</p>
            </div>
            <div className="reviewTotalItem">
                <p><span className="total_span">Total</span></p>
                <p className="money">${props.total}</p>
            </div>
        </div>
    )
}

export default ReviewTotal;