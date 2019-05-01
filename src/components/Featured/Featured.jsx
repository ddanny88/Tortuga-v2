import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getFeaturedProducts } from '../../ducks/reducers/productReducer.js'
import './Featured.css';
import Item from '../Item/Item';


const Featured = (props) => {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        let products = props.getFeaturedProducts();
        setFeaturedProducts(products.payload);
    }, [featuredProducts])



    let displayFeaturedProducts = featuredProducts.map( drink => (
        <Item 
         products={featuredProducts}
         key={drink.id}
         name={drink.name}
         img={drink.img}
         price={drink.price}
         size={drink.size}
        />
     ));

    
    return (
        <div className="Featured">
            <div>
                <h3 className="Featured-text">Featured</h3>
                <hr className="Featured-rule"/>
                <div>
                    { displayFeaturedProducts }
                </div>
            </div>
        </div>
    )
}

Featured.propTypes = {
    getFeaturedProducts: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, { getFeaturedProducts })(Featured);