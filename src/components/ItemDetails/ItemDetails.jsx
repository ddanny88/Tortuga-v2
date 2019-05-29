import React from 'react';
import Button from '../Button/Button';
import './ItemDetail.css';
import Loading from '../Loading/Loading';
import { connect } from 'react-redux';
import { addToCart } from '../../ducks/reducers/productReducer'



const ItemDetails = (props) => {
    const { drink } = props;

    const addItemToCart = () => {
        props.addToCart(drink);
    }

    const handleBack = () => {
        props.history.goBack();
    }


    return (
        <div>
            {
                props.drink ?
                <div>
                    <button className="item-back" onClick={handleBack}><i id="item-backArrow" className="fas fa-chevron-left"></i></button>
                    <div className="ItemDetails-card">
                    <div>
                        <img 
                            className="card-img"
                            src={drink.img} 
                            alt={drink.name}
                        />
                    </div>
                    <h1 className="card-heading">{drink.name}</h1>  
                    <p className="item-price">${drink.price}</p>
                    <p className="item-size">{drink.size}</p>
                    <div className="details-disc">
                        <p>{drink.discription}</p>
                    </div>
                    <div className="item-button-container">
                        <Button 
                            addItem={addItemToCart}
                            text="Add to cart"
                            textColor="white"
                            color="#781214"
                            fontSize="20px"
                        />
                    </div>
                </div>
                </div>
                :
                <Loading/>
            }
        </div>
    )
}

const mapStateToProps = state => {
    const { cart } = state.productReducer;
    return {
        cart
    }
}
export default connect(mapStateToProps, { addToCart })(ItemDetails);