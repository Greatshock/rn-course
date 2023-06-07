import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Colors } from '../../constants/colors';

export function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const { width: deviceWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 6,
    backgroundColor: Colors.primary800,
    elevation: 4, // shadow for Android, bigger value => bigger shadow
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
