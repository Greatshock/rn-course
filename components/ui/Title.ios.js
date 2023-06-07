import React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';

export function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    maxWidth: '80%',
    width: 300,
    padding: 12,
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
});
