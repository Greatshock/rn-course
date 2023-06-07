import React from 'react';
import { StyleSheet, Text } from 'react-native';

export function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    padding: 12,
    borderWidth: 2,
    borderColor: 'white',
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
});
