import React, { useState } from 'react';
import './Featured.css';
import Item from '../Item/Item';


const Featured = () => {
    const [featuredProducts, setFeaturedProducts] = useState([
        {
            id: 1,
            name: 'Patron',
            price: 79.99,
            img: "https://s3.us-east-2.amazonaws.com/tortuga-assets/patron.webp",
            category: "liquor",
            discription: "The world’s first ultra-premium tequila, Patrón Silver should be savored starting with the very first sip - from the delicate aroma of fruits and citrus to the sweet and smooth taste with a light pepper finish. It’s made using a handcrafted process unique to Patrón, which gives it the perfect balance of fresh agave flavor with baked agave undertones – core influencer notes you’ll find in all Patrón Tequilas."
        },
        {                            
            id: 2,
            name: "Tanqueray London Dry Gin",
            price: 31.99,
            img: "https://s3.us-east-2.amazonaws.com/tortuga-assets/gin.webp",
            category: 'liquor',
            discription: "Crafted using a time honored recipe of only the highest quality grains, the purest water, the most select juniper berries, finest botanicals, and a unique quadruple-distillation process (Aromatic, Citrus, Herbal, Spice, Balanced)"
        }
    ]);


    return (
        <div className="Featured">
            <div>
                <h3 className="Featured-text">Featured</h3>
                <hr className="Featured-rule"/>
                <div>
                    { featuredProducts.map( drink => (
                       <Item 
                        products={featuredProducts}
                        key={drink.id}
                        name={drink.name}
                        img={drink.img}
                        price={drink.price}
                       />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Featured;