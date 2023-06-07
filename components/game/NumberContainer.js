import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Colors } from '../../constants/colors';

export function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const { width: deviceWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: Colors.accent500,
    borderRadius: 8,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: 'open-sans-bold',
  },
});
