import React from 'react';
import './PromoTwo.css';


let imgOne = "https://s3.us-east-2.amazonaws.com/tortuga-assets/beershot.jpg"




const PromoTwo = () => {
    return (
        <div className="PromoTwo">
            <div className="promo-stack-text">
                <h3 className="Promo-catch">"Drinking before 10am makes you a pirate, not an alcoholic." -Unknown</h3>
            </div>
            <div className="promo-stack-one-2">
                <img 
                className="img1-2"
                src={imgOne} 
                alt="bottle of whiskey on a table"
                />
            </div>

        </div>
    )
}

export default PromoTwo;