import React from 'react';


const ReviewAddressInfo = (props) => {
    return (
        <div className="UserInfo">
            <h4>{props.address}</h4>
            <h4>{props.city}</h4>
            <h4>{props.st}</h4>
            <h4>{props.zipcode}</h4>
        </div>
    )
}

export default ReviewAddressInfo;