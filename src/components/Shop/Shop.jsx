import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from '../../ducks/reducers/productReducer'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './shop.css';
import Item from '../Item/Item'
import Search from '../Search/Search';
import Loading from '../Loading/Loading';

const headerImg = 'https://s3.us-east-2.amazonaws.com/tortuga-slider/white_liquor2.png';




const Shop = (props) => {

    useEffect(() => {
      props.getProducts();
    }, []);

    // static products on page render:
    let displayProducts = props.products.map( prod => (
        <Item 
            item={prod}
            key={prod._id}
            name={prod.name}
            img={prod.img}
            price={prod.price}
            size={prod.size}
        />
    ));

    // returned from search: 
    let displaySearchedItems = props.searchedItems.map( prod => (
        <Item
            item={prod}
            key={prod._id}
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
                <Search placeholder="search items"/>
            </div>

            <hr className="shop-rule"/>

          <div className="Shop-Display">
          { props.searchedItems.length > 0 ? displaySearchedItems : props.products && !props.searching ? displayProducts : props.searching  && <Loading /> }
          </div>


        </div>
    )
}

Shop.propTypes = {
    getProducts: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    const { products, searchedItems, searching } = state.productReducer;
    return {
        products,
        searchedItems,
        searching
    }
}
export default connect(mapStateToProps, { getProducts })(Shop);

