import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { books } from '../Data';
import Products from '../components/Products';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default class BooksScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Books'
  };
  render() {
    return (
      <View style={styles.container}>
        <Products products={books} />
      </View>
    );
  }
}
