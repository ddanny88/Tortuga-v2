import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './ItemDetail.css';


const ItemDetails = (props) => {
    const { drink } = props;

    return (
        <div>
            <Link to="/"><i className="fas fa-chevron-left"></i></Link>
            <div className="ItemDetails-card">
            <div>
                <img 
                    className="card-img"
                    src={drink.img} 
                    alt={drink.name}
                />
            </div>
            <h1 className="card-heading">{drink.name}</h1>  
            <p className="item-price">${drink.price}</p>
            <p className="item-size">{drink.size}</p>
            <div className="details-disc">
                <p>{drink.discription}</p>
            </div>
            <div className="item-button-container">
                <Button 
                    text="Add to cart"
                    textColor="white"
                    color="#781214"
                    fontSize="20px"
                />
            </div>
        </div>
        </div>
    )
}
export default ItemDetails;

