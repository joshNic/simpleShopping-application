import { createStore } from 'redux';
import CartItems from '../reducers/CartItems';

const store = createStore(CartItems);

export default store;
