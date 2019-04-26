import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './shop.css';
import Item from '../Item/Item'
import Search from '../Search/Search';



const headerImg = 'https://s3.us-east-2.amazonaws.com/tortuga-slider/white_liquor2.png';

/**
 * display all of the products in database.
 * 
 * when  one of the items is clicked, show itemDetails page. 
 * component will need to mount with products in state. 
 * 
 * extract the name from 
 * 
 * here The user should also be able to filter by category and search by name
 * 
 * 
 * 
 * when you search, when the response is given, display either the requrested items or just display the featured items. 
 */

const Shop = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(props.products)
    }, [products])


    let displayProducts = products.map( prod => (
        <Item 
            key={prod.id}
            name={prod.name}
            img={prod.img}
            price={prod.price}
            size={prod.size}
        />
    ));

    return (
        <div className="shop">
            <Carousel 
                interval={ 5000 }
                stopOnHover={ false }
                showStatus={ false } 
                showThumbs= { false } 
                infiniteLoop={ true } 
                autoPlay={ true } 
                swipeable={ false }
                showArrows={ false }
                showIndicators={ false }
                emulateTouch={ false }
            >
            <div>
                <img src={headerImg} alt="black and white bottle"/>
            </div>
            </Carousel>

            <div className="Search-container">
                <Search placeholder="  search items"/>
            </div>

            <hr className="shop-rule"/>

            { displayProducts }
        </div>
    )
}

Shop.defaultProps = {
    products: [
        {
            id: 1,
            name: 'Patron',
            price: 79.99,
            size: "750ml",
            img: "https://s3.us-east-2.amazonaws.com/tortuga-assets/patron.webp",
            category: "liquor",
            discription: "The world’s first ultra-premium tequila, Patrón Silver should be savored starting with the very first sip - from the delicate aroma of fruits and citrus to the sweet and smooth taste with a light pepper finish. It’s made using a handcrafted process unique to Patrón, which gives it the perfect balance of fresh agave flavor with baked agave undertones – core influencer notes you’ll find in all Patrón Tequilas."
        },
        {                            
            id: 2,
            name: "Tanqueray London Dry Gin",
            price: 31.99,
            size: "750ml",
            img: "https://s3.us-east-2.amazonaws.com/tortuga-assets/gin.webp",
            category: 'liquor',
            discription: "Crafted using a time honored recipe of only the highest quality grains, the purest water, the most select juniper berries, finest botanicals, and a unique quadruple-distillation process (Aromatic, Citrus, Herbal, Spice, Balanced)"
        },
        {
            id: 3,
            name: "Crown Royal",
            price: 36.99,
            size: "750ml",
            img: "https://s3.us-east-2.amazonaws.com/tortuga-assets/crown.jpg",
            category: 'liquor',
            discription: "Canadian whiskies are generally thought to be lighter and smoother than most other types of whiskies. Like most Canadian whiskies, Crown Royal Canadian Whisky is a blended by mixing finished whiskies with a base spirit Crown Royal Canadian Whisky has been aged for 20 years, which is slightly longer than the average for Canadian whiskies. This refers to the age of the youngest component of the whiskey, so there may be a part of the blend that is much older."
        },
        {
            id: 4,
            name: "Hennessy",
            price: 49.99,
            size: "750ml",
            img: "https://s3.us-east-2.amazonaws.com/tortuga-assets/henny.webp",
            category: 'liquor',
            discription: "Hennessy VS is a blend of over 40 different eaux de vies from the four premier growing regions of Cognac. Beautifull golden color with a fruity sweetness and a hint of vanilla on the finish."
        }
    ]
}


export default Shop;

