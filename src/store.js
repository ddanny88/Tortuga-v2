import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from './ducks/reducers/rootReducer';

const middleWare = applyMiddleware(promise)

export default createStore(rootReducer, middleWare);