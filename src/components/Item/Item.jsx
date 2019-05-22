import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

/**
 * 
 * @param {*} props
 * 
 *  item
    key,
    name,
    img,
    price,
    size
*/




const Item = (props) => {

    const parseName = (name) => {
        return name.split(' ').join('\n')
    }


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
            <hr className="Item-rule"/>
            <div>
                <h4 className="Item-name">{parseName(props.name)}</h4>
                <div className="Item-user-checkout">
                    <p className="Item-price">${props.price}</p>
                    <p className="size">{props.size}</p>
                </div>
            </div>
        </div>
    )
}


export default Item; 