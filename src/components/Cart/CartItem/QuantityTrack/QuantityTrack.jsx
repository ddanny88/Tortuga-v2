import React from 'react';
import './Quantity.css';

const QuantityTrack = (props) => {
    return (
        <div className="Q-tracker-container">
            <div className="square">
                <i className="fas fa-minus"></i>
            </div>
            <div className="quan-num">
                <span>5</span>
            </div>
            <div className="square">
                <i className="fas fa-plus"></i>
            </div>
        </div>
    )
}

export default QuantityTrack;