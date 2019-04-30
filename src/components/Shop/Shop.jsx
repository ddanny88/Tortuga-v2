import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../ducks/reducers/productReducer'
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
       let products = props.getProducts();
       setProducts(products.payload);
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



const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps, { getProducts })(Shop);

