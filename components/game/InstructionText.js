import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors } from '../../constants/colors';

export function InstructionText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
    fontSize: 24,
    color: Colors.accent500,
  },
});
