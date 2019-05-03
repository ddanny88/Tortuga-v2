import axios from 'axios';

const initialState = {
    FeaturedProducts: [
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
    ],
    products: []   
}

// ACTION TYPES: 
const GET_PRODUCTS = 'GET_PRODUCTS';
const GET_FEATURED_PRODUCTS = 'GET_FEATURED_PRODUCTS';








// ACTION FUNCTIONS: 
export function getFeaturedProducts() {
    return {
        type: GET_FEATURED_PRODUCTS,
        payload: initialState.FeaturedProducts
    }
}
export function getProducts() {
    return {
        type: GET_PRODUCTS,
        payload: axios.get('/api/products')
    }
}



// product reducer: 
const productReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_FEATURED_PRODUCTS: 
            return {
                ...state, 
                FeaturedProducts: action.payload
            }
        case `${GET_PRODUCTS}_FULFILLED`:
            return {
                ...state, 
                products: action.payload.data
            }
        case `${GET_PRODUCTS}_REJECTED`: 
            return (
                console.log('PRODUCTS REQUEST REJECTED...')
            );
        default: 
            return state;
    }
}

export default productReducer;