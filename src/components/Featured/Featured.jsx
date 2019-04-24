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
            category: "liquor"
        },
        {
            id: 2,
            name: "Gin",
            price: 50.00,
            img: "https://s3.us-east-2.amazonaws.com/tortuga-assets/gin.webp",
            category: 'liquor'
        }
    ])


    return (
        <div className="Featured">
            <div>
                <h3 className="Featured-text">Featured</h3>
                <hr className="Featured-rule"/>
                <div>
                    { featuredProducts.map( drink => (
                       <Item 
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