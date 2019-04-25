import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppWrapper from './components/AppWrapper/AppWrapper';
import Shop from './components/Shop/Shop';
import ItemDetails from './components/ItemDetails/ItemDetails';


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
    ]
}

export default Routes;





