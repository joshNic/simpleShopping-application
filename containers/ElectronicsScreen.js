import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { electronics } from '../Data';
import Products from '../components/Products';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default class ElectronicsScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Electronics'
  };
  render() {
    return (
      <View style={styles.container}>
        <Products products={electronics} />
      </View>
    );
  }
}
