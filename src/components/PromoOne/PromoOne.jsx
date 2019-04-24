import React from 'react';
import './PromoOne.css';


let imgOne = "https://s3.us-east-2.amazonaws.com/tortuga-assets/compONE.png"

let imgTwo = "https://s3.us-east-2.amazonaws.com/tortuga-assets/money_shot.jpg"



const PromoOne = () => {
    return (
        <div className="PromoOne">
            <div className="promo-stack-one">
                <img 
                className="img1"
                src={imgOne} 
                alt="bottle of whiskey on a table"
                />
            </div>

            <div className="promo-stack-two">
                <img 
                className="img2"
                src={imgTwo} 
                alt="floating whiskey"
                />
            </div>
        </div>
    )
}

export default PromoOne;