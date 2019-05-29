import React from 'react';
import './ReviewAddres.css';


const ReviewAddressInfo = (props) => {
    return (
        <div className="UserInfo ReviewAddress">
            <h3>Shipping Address</h3>
            <p><span className="review_span">Address: </span>{props.address}</p>
            <p><span className="review_span">City: </span>{props.city}</p>
            <p><span className="review_span">Street: </span>{props.st}</p>
            <p><span className="review_span">Zipcode: </span>{props.zipcode}</p>
        </div>
    )
}

export default ReviewAddressInfo;