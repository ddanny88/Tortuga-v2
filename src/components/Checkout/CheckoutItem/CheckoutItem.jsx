import React from 'react';
import './CheckoutItem.css';


const CheckoutItem = (props) => {
    return (
        <div className="CheckoutItem">
            <div className="CheckoutImg">
                <img 
                src={props.img} 
                alt={props.name}
                className="CheckoutItem-img"
                />
            </div>
            <div className="item-quan">{props.quantity}</div>
            <div className="Checkout-item-details">
                <h3>{props.name}</h3>
                <p>{props.size}</p>
                <p>{props.price}</p>
            </div>
            
        </div>
    )
}

export default CheckoutItem;

CheckoutItem.defaultProps = {  
    name: 'Patron',
    price: 79.99,
    size: "750ml",
    img: "https://s3.us-east-2.amazonaws.com/tortuga-assets/patron.webp",
    category: "liquor",
    quantity: 1,
    discription: "The world’s first ultra-premium tequila, Patrón Silver should be savored starting with the very first sip - from the delicate aroma of fruits and citrus to the sweet and smooth taste with a light pepper finish. It’s made using a handcrafted process unique to Patrón, which gives it the perfect balance of fresh agave flavor with baked agave undertones – core influencer notes you’ll find in all Patrón Tequilas."     
}