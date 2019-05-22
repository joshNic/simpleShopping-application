/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Provider } from 'react-redux';
import ShoppingCart from './ShoppingCart';
import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ShoppingCart />
      </Provider>
    );
  }
}
