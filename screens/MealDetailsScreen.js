import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function MealDetailsScreen({ route }) {
  const { mealId } = route.params;

  return (
    <View>
      <Text>Meal Screen {mealId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
