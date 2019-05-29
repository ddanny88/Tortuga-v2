import React from 'react';


const ReviewUserInfo = (props) => {
    return (
        <div className="UserInfo">
            <h4>{props.firstName}</h4>
            <h4>{props.lastName}</h4>
            <h4>{props.email}</h4>
        </div>
    )
}

export default ReviewUserInfo;