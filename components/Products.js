import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default class Products extends Component {
  renderProducts = products => {
    return products.map((item, index) => {
      return (
        <View key={index} style={{ padding: 20 }}>
          <Button
            onPress={() => this.props.onPress(item)}
            title={item.name + ' - ' + item.price}
          />
        </View>
      );
    });
  };
  render() {
    return (
      <View style={styles.container}>
        {this.renderProducts(this.props.products)}
      </View>
    );
  }
}
