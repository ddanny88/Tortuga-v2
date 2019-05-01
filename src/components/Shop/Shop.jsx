import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from '../../ducks/reducers/productReducer'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './shop.css';
import Item from '../Item/Item'
import Search from '../Search/Search';
import Loading from '../Loading/Loading';


const headerImg = 'https://s3.us-east-2.amazonaws.com/tortuga-slider/white_liquor2.png';


const Shop = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let data = await props.getProducts();
            setProducts(data.action.payload.data);
        }
        getData();
    }, [])

    
    
    let displayProducts = products.map( prod => (
        <Item 
            key={prod._id}
            name={prod.name}
            img={prod.img}
            price={prod.price}
            size={prod.size}
        />
    ));

    console.log(props)
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

            { products.length === 0 ? <Loading /> : displayProducts }

        </div>
    )
}

// Shop.propTypes = {
//     getProducts: PropTypes.func.isRequired
// }

const mapStateToProps = state => {
    const { products } = state;
    return {
        products
    }
}
export default connect(mapStateToProps, { getProducts })(Shop);

