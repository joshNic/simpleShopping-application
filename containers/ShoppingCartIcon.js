import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconStyle: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(95,197,123,0.8)',
    right: 25,
    bottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000
  }
});

const ShoppingCartIcon = () => {
  return (
    <View style={{ padding: 5 }}>
      <View style={styles.iconStyle}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>0</Text>
      </View>
      <Icon name='ios-cart' size={30} />
    </View>
  );
};

export default ShoppingCartIcon;
