import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';


const Item = (props) => {
    return (
        <div className="Item">
            <div className="Item-img-container">
            <Link to={`/products/${props.name}`}>
                <img 
                className="Item-img"
                src={props.img} 
                alt={props.name}
                />
            </Link>
            </div>

            <div>
                <h4 className="Item-name">{props.name}</h4>
                <div className="Item-user-checkout">
                    <p className="Item-price">${props.price}</p>
                    <button>cart</button>
                </div>
            </div>
        </div>
    )
}

export default Item;