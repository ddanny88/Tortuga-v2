import axios from 'axios';

const initialState = {
    FeaturedProducts: [
        {
            _id: "5ce2a84d9add1a3608f04c7e",
            name: 'Patron',
            price: 79.99,
            size: "750ml",
            img: "https://s3.us-east-2.amazonaws.com/tortuga-assets/patron.webp",
            category: "liquor",
            quantity: 1,
            discription: "The world’s first ultra-premium tequila, Patrón Silver should be savored starting with the very first sip - from the delicate aroma of fruits and citrus to the sweet and smooth taste with a light pepper finish. It’s made using a handcrafted process unique to Patrón, which gives it the perfect balance of fresh agave flavor with baked agave undertones – core influencer notes you’ll find in all Patrón Tequilas."
        },
        {
            _id: "5ce2a8749add1a3608f04c7f",
            name: "Crown Royal",
            price: 36.99,
            size: "750ml",
            img: "https://s3.us-east-2.amazonaws.com/tortuga-assets/crown.jpg",
            category: 'liquor',
            quantity: 1,
            discription: "Canadian whiskies are generally thought to be lighter and smoother than most other types of whiskies. Like most Canadian whiskies, Crown Royal Canadian Whisky is a blended by mixing finished whiskies with a base spirit Crown Royal Canadian Whisky has been aged for 20 years, which is slightly longer than the average for Canadian whiskies. This refers to the age of the youngest component of the whiskey, so there may be a part of the blend that is much older."
        },
        {
            _id: "5ce2a8879add1a3608f04c80",
            name: "Hennessy",
            price: 49.99,
            size: "750ml",
            img: "https://s3.us-east-2.amazonaws.com/tortuga-assets/henny.webp",
            category: 'liquor',
            quantity: 1,
            discription: "Hennessy VS is a blend of over 40 different eaux de vies from the four premier growing regions of Cognac. Beautifull golden color with a fruity sweetness and a hint of vanilla on the finish."
        }
    ],
    products: [],
    searchedItems: [],
    searching: '' ,
    cart: []
}

// ACTION TYPES: 
const GET_PRODUCTS = 'GET_PRODUCTS';
const GET_FEATURED_PRODUCTS = 'GET_FEATURED_PRODUCTS';
const GET_SEARCHED_ITEMS = 'GET_SEARCHED_ITEMS';
const IS_SEARCHING = 'IS_SEARCHING';
const RESET_SEARCHED_ITEMS = 'RESET_SEARCHED_ITEMS';

// CART ACTIONS TYPES: 
const ADD_TO_CART = 'ADD_TO_CART';
const GET_CART = 'GET_CART';







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
export function getSearchedItems(searchedItems) {
    return {
        type: GET_SEARCHED_ITEMS,
        payload: searchedItems
    }
}
export function isSearching(trueOrFalse) {
    return {
        type: IS_SEARCHING,
        payload: trueOrFalse
    }
}
export function researchSearchedItem() {
    return {
        type: RESET_SEARCHED_ITEMS,
        payload: {
            searchedItems: []
        }
    }
}


// CART ACTION FUNCTIONS: 
export function addToCart(item) {
    return {
        type: ADD_TO_CART,
        payload: axios.post('/api/user/cart', item)
    }
}
export function getCart() {
    return {
        type: GET_CART,
        payload: axios.get('/api/get/cart')
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
        case GET_SEARCHED_ITEMS:
            return {
                ...state,
                searchedItems: action.payload.data
            }
        case IS_SEARCHING:
            return {
                ...state, 
                searching: action.payload
            }
        case RESET_SEARCHED_ITEMS: 
            return {
                ...state,
                searchedItems: action.payload.searchedItems
            }
        case `${ADD_TO_CART}_FULFILLED`: 
            return {
                ...state, 
                cart: action.payload.data
            }
        case `${ADD_TO_CART}_REJECTED`:
            return (
                console.log('CART REQUEST REJECTED..')
            )
        case `${GET_CART}_FULFILLED`:
            return {
                ...state,
                cart: action.payload.data
            }
        default: 
            return state;
    }
}

export default productReducer;


