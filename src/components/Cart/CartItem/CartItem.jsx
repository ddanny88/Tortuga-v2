import React from 'react';
import './CartItem.css';
import QuantityTrack from './QuantityTrack/QuantityTrack';






const CartItem = (props) => {
    return (
        <div className="CartItem-card">
            <img 
                className="CartItem-img"
                src={props.img} 
                alt="makers mark bottle"
            />
            <div className="CartItem-disc">
                <h4>{props.name}</h4>
                <p>{props.size}</p>
                <p>${props.price}</p>
            </div>

            <div className="CartItem-Quantity">
                <QuantityTrack />
            </div>
        </div>
    )
}

export default CartItem;


CartItem.defaultProps = {
    
    id: 1,
    name: 'Patron',
    price: 79.99,
    size: "750ml",
    img: "https://s3.us-east-2.amazonaws.com/tortuga-assets/patron.webp",
    category: "liquor",
    discription: "The world’s first ultra-premium tequila, Patrón Silver should be savored starting with the very first sip - from the delicate aroma of fruits and citrus to the sweet and smooth taste with a light pepper finish. It’s made using a handcrafted process unique to Patrón, which gives it the perfect balance of fresh agave flavor with baked agave undertones – core influencer notes you’ll find in all Patrón Tequilas."
    
}