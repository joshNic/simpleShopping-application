import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import BooksScreen from './containers/BooksScreen';
import HomeScreen from './containers/HomeScreen';
import ElectronicsScreen from './containers/ElectronicsScreen';
import ShoppingCartIcon from './containers/ShoppingCartIcon';
import CartScreen from './containers/CartScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const AppStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Electronics: ElectronicsScreen,
    Books: BooksScreen,
    Cart: CartScreen
  },
  {
    navigationOptions: {
      headerTitle: 'Shopping App',
      headerRight: <ShoppingCartIcon />
    }
  }
);
export default class ShoppingCart extends Component {
  render() {
    return <AppStackNavigator />;
  }
}
