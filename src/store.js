import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';
import rootReducer from './ducks/reducers/rootReducer';

const middleWare = compose(applyMiddleware(promise),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default createStore(rootReducer, middleWare);