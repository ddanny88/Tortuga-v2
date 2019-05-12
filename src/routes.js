import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppWrapper from './components/AppWrapper/AppWrapper';
import Shop from './components/Shop/Shop';
import ItemDetails from './components/ItemDetails/ItemDetails';
import Admin from './components/Admin/Admin';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Register from './components/Register/Register';




const Routes = (props) => {

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
            <Redirect to="/" />
        </Switch>
    )
}

Routes.defaultProps = {
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

export default Routes;





