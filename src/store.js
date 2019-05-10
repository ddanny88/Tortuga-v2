import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';
import rootReducer from './ducks/reducers/rootReducer';
// import thunk from 'redux-thunk';

const middleWare = compose(applyMiddleware(promise),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default createStore(rootReducer, middleWare);