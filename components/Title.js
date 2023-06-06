import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors } from '../constants/colors';

export function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    padding: 12,
    borderWidth: 2,
    borderColor: Colors.accent500,
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accent500,
    textAlign: 'center',
  },
});
