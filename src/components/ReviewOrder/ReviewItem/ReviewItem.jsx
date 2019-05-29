import React from 'react';
import './ReviewItem.css';


const ReviewItem = (props) => {
    return (
        <div className="ReviewItem">
            <div className="ReviewImg">
                <img 
                src={props.img} 
                alt={props.name}
                className="ReviewItem-img"
                />
            </div>
            <div className="item-quan">{props.quantity}</div>

            <div className="Review-item-details">
                <h3>{props.name}</h3>
                <p>{props.size}</p>
            </div>
        </div>
    )
}
export default ReviewItem;