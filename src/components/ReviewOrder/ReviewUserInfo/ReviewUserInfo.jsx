import React from 'react';
import './ReviewUserInfo.css'

const ReviewUserInfo = (props) => {
    return (
        <div className="UserInfo">
            <h3>Customer Info</h3>
            <p><span className="review_span">First Name: </span>{props.firstName}</p>
            <p><span className="review_span">Last Name: </span>{props.lastName}</p>
            <p><span className="review_span">Email: </span>{props.email}</p>
        </div>
    )
}

export default ReviewUserInfo;