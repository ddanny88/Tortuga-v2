/**This reducer file is the meeting point of all of your reducers. Once imported, the combineReducer function takes an object that holds the reducers as its key vale pairs.  */
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productReducer from './productReducer';

let reducer = combineReducers({
    userReducer, 
    productReducer
});

export default reducer;