import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts, updateSideMenu } from './ducks/reducers/productReducer'
import AppWrapper from './components/AppWrapper/AppWrapper';
import Shop from './components/Shop/Shop';
import ItemDetails from './components/ItemDetails/ItemDetails';
import Admin from './components/Admin/Admin';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Checkout from './components/Checkout/Checkout';
import ReviewOrder from './components/ReviewOrder/ReviewOrder';




const Routes = (props) => {

    useEffect(() => {
        props.getProducts();
    }, []);

    const getProductDetails = (routeProps) => {
        let name = routeProps.match.params.name;
        let currentItem = props.products.find( drink => 
            drink.name.toLowerCase() === name.toLowerCase()
        );
        return <ItemDetails {...routeProps} drink={ currentItem }/>
    }

    return (
        <Switch>
            <Route exact path="/" component={ AppWrapper } />
            <Route exact path="/products/:name" render={ getProductDetails } />
            <Route exact path="/shop" component={ Shop } />
            <Route exact path="/user/admin" component={ Admin } />
            <Route exact path="/user/login" component={ Login } />
            <Route exact path="/user/register" component={ Register } />
            <Route exact path="/user/cart" component={ Cart } />
            <Route exact path="/user/cart/checkout" component={Checkout} />
            <Route exact path="/user/cart/checkout/review" component={ReviewOrder} />
            <Redirect to="/" />
        </Switch>
    )
}

const mapStateToProps = state => {
    const { products, menuIsOpen } = state.productReducer;
    return {
        products,
        menuIsOpen
    }
}
export default connect( mapStateToProps, { getProducts, updateSideMenu })(Routes);





