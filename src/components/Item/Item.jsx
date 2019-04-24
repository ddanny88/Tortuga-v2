import React from 'react';
import './Item.css';

const Item = (props) => {
    return (
        <div className="Item">
            <img 
            className="Item-img"
            src={props.img} 
            alt={props.name}
            />
            <h4 className="Item-name">{props.name}</h4>
            <div className="Item-user-checkout">
                <p className="Item-price">${props.price}</p>
                <button>cart</button>
            </div>
        </div>
    )
}

export default Item;